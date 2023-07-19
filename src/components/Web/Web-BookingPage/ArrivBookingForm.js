import React, { useState } from 'react';
import { Form, Divider, Input, Button, InputNumber } from 'antd';

// import axios from 'axios';
import styled from 'styled-components';

const DepartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 980px;
  padding: 50px 300px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-align: start;
  font-weight: bold;
  display: flex;
  margin-bottom: 100px;
`;

const TextButton = styled.div`
  height: 30px;
  border: 1px solid #068fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const TextGrids = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
`;

const Texts = styled.div`
  margin-bottom: 10px;
`;

const TextDetail = styled.div`
  font-size: 16px;
  display: flex;
  text-align: start;
  word-break: keep-all;
`;

const TextTitle = styled(TextDetail)`
  font-weight: bold;
`;

const InputForm = styled.div``;

export default function DepartBookingForm() {
  const [formData, setFormData] = useState({
    //         reservationPhoneNumber: '',
    reservationName: '',

    representativeName: '',
    passengerCount: 0,
    departureLocation: '인천공항',
    arrivalLocation: '',
    // flightDepartureTime: '',
    flightNumber: '',
    flightArrivalTime: '',
    reservationMemo: '',
  });

  const onSubmit = (values) => {
    console.log(values);

    // axios
    //   .post(`http://localhost:8080/funding/${roomId}/15`, {
    //     flight_Number: values.flight_Number,
    //   })
    //   .then((result) => {
    //     console.log('up');
    //     console.log(result);
    //     // navigate('/');
    //   })
    //   .catch((e) => {
    //     console.log('error');
    //     console.log(e);
    //   });
  };

  return (
    <>
      {/* <Header /> */}
      <DepartContainer>
        <Title>공항 도착 예약 (On-Line Departure Reservation) </Title>
        {/* <TextDetail> */}
        {/* 출발일 기준 최소 24시간 이전에 예약을 해주십시오 */}
        {/* All reservations should be made at least 24 hours before departure time. */}
        {/* </TextDetail> */}
        {/* <TextDetail> */}
        {/* 예약 취소는 탑승 6시간 이전에만 가능합니다 */}
        {/* Cancellation is allowed with 6 hours notice. */}
        {/* </TextDetail> */}
        <>
          <Form name="productUpload" onFinish={onSubmit}>
            {/* 출발 정보 */}
            <Grids>
              <TextGrids>
                <TextButton> 도착 정보 </TextButton>
                <Texts>
                  <TextTitle>비행기 출발 시간</TextTitle>
                  <TextDetail>(Flight Departure Date & Time)</TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="Flight_Depart_time">
                  <Input
                    size="large"
                    placeholder="출발 일시 ** 날짜, 시, 분으로 수정 필요 ** "
                  />
                  {/* <DatePickerValue /> */}
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle> 비행기 편명 </TextTitle>
                  <TextDetail>(Flight Number)</TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="flight_Number">
                  <Input size="large" placeholder="비행기 편명" />
                </Form.Item>
              </InputForm>
            </Grids>
            <Divider />
            {/* 경로 정보 */}
            <Grids>
              <TextGrids>
                <TextButton> 경로 정보 </TextButton>
                <Texts>
                  <TextTitle> 콜벤 탑승 장소 </TextTitle>
                  <TextDetail> (Pick-up Location) </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="pickup_location">
                  <Input size="large" placeholder="콜벤 탑승 장소" />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle> 콜벤 하차 장소 </TextTitle>
                  <TextDetail> (Arrival Location) </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="arrival_location">
                  <Input size="large" placeholder="콜벤 하차 장소" />
                </Form.Item>
              </InputForm>
            </Grids>

            <Divider />
            {/* 승객 정보 */}
            <Grids>
              <TextGrids>
                <TextButton> 승객 정보 </TextButton>
                <Texts>
                  <TextTitle>탑승 인원</TextTitle>
                  <TextDetail>(Number of Passengers)</TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="passengers_num">
                  <InputNumber
                    size="large"
                    style={{ width: '500px' }}
                    placeholder="탑승 인원 (명)"
                  />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle> 승객 성명 </TextTitle>
                  <TextDetail> (Passenger Name) </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="passenger_name">
                  <Input size="large" placeholder="승객명" />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle> 승객 연락처 </TextTitle>
                  <TextDetail> (Passenger Contact Number) </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="passenger_phonenumber">
                  <Input size="large" placeholder="승객 연락처" />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle> 승객 이메일 </TextTitle>
                  <TextDetail> (Passenger Contact Email) </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="passenger_email">
                  <Input size="large" placeholder="승객 이메일" />
                </Form.Item>
              </InputForm>
            </Grids>
            <Divider />
            {/* 예약자 정보 */}
            <Grids>
              <TextGrids>
                <TextButton> 예약자 정보 </TextButton>
                <Texts>
                  <TextTitle> 예약자 성명 </TextTitle>
                  <TextDetail>( Reservation Name )</TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="reserve_name">
                  <Input size="large" placeholder="예약자 성명" />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle> 예약자 연락처 </TextTitle>
                  <TextDetail>( Reservation Phone Number )</TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="reserve_number">
                  <Input size="large" placeholder="예약자 연락처" />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle> 기타사항 </TextTitle>
                  <TextDetail> (Special Note) </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <Form.Item name="team">
                  <Input.TextArea
                    rows={3}
                    size="large"
                    placeholder="기타 사항"
                  />
                </Form.Item>
              </InputForm>
            </Grids>
            <Divider />
            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  id="submit-button"
                  size="large"
                  htmlType="submit"
                  style={{
                    border: '1px solid #068FFF',
                    marginRight: '10px',
                    fontWeight: 'bold',
                    width: '150px',
                    borderRadius: '20px',
                  }}
                >
                  취소
                </Button>
                <Button
                  id="submit-button"
                  size="large"
                  htmlType="submit"
                  style={{
                    border: '1px solid #068FFF',
                    backgroundColor: '#068FFF',
                    color: 'white',
                    marginRight: '10px',
                    fontWeight: 'bold',
                    width: '150px',
                    borderRadius: '20px',
                  }}
                >
                  예약
                </Button>
              </div>
            </Form.Item>
          </Form>
        </>
      </DepartContainer>
    </>
  );
}
