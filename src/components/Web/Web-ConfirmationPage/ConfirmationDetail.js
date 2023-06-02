import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const ReservationDetail = () => {
  const {BookingId} = useParams();
  const [bookDoc, setBookDoc] = useState(null);

  const fetchBookById = async (bookId) => {
    try {
      const bookRef = firestore.collection('books').doc(bookId);
      const bookDoc = await bookRef.get();
  
      if (bookDoc.exists) {
        const bookData = bookDoc.data();
        // Handle the book data as needed
        console.log(bookData);
        setBookDoc(bookDoc);
      } else {
        // Handle case when book document does not exist
        console.log('Book not found');
      }
    } catch (error) {
      // Handle error if there's an issue fetching the book document
      console.error('Error fetching book:', error);
    }
  };

  useEffect(() => {
    fetchBookById(BookingId);
  }, []);

  return ReservationDetailForm({reservation: bookDoc});
}


const ReservationDetailForm = ({ reservation }) => {
  return (
    <Container>
      <Heading>예약 확인 상세</Heading>

      <DetailItem>
        <strong>예약자 전화번호:</strong> {reservation.reservationPhoneNumber}
      </DetailItem>

      <DetailItem>
        <strong>예약자 명:</strong> {reservation.reservationName}
      </DetailItem>

      <DetailItem>
        <strong>탑승자 전화번호:</strong> {reservation.passengerPhoneNumber}
      </DetailItem>

      <DetailItem>
        <strong>탑승자 이메일:</strong> {reservation.passengerEmail}
      </DetailItem>

      <DetailItem>
        <strong>대표 탑승자 명:</strong> {reservation.representativeName}
      </DetailItem>

      <DetailItem>
        <strong>탑승 인원:</strong> {reservation.passengerCount}
      </DetailItem>

      <DetailItem>
        <strong>출발지:</strong> {reservation.departureLocation}
      </DetailItem>

      <DetailItem>
        <strong>도착지:</strong> {reservation.arrivalLocation}
      </DetailItem>

      <DetailItem>
        <strong>비행기 편명 및 시간:</strong> {reservation.flightDetails}
      </DetailItem>

      <DetailItem>
        <strong>예약자가 남긴 메모:</strong> {reservation.reservationMemo}
      </DetailItem>
    </Container>
  );
};

export default ReservationDetail;
