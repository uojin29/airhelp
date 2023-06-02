import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ArrivBookingForm = () => {
    const [formData, setFormData] = useState({
        reservationPhoneNumber: '',
        reservationName: '',

        representativeName: '',
        passengerCount: 0,
        departureLocation: '',
        arrivalLocation: '인천공항',
        // flightDepartureTime: '',
        flightNumber: '',
        flightArrivalTime: '',
        reservationMemo: ''
    });

    const [passengerInfo, setPassengerInfo] = useState([]);

    const formatPassengerInfo = (passengerName, passengerPhoneNumber, passengerEmail) => {
        return {
            passengerId: passengerInfo.length + 1,
            passengerName: passengerName,
            passengerPhoneNumber: passengerPhoneNumber,
            passengerEmail: passengerEmail,
        }
    }

    const addNewPasswenger = (passengerName, passengerPhoneNumber, passengerEmail) => {
        setPassengerInfo([...passengerInfo, formatPassengerInfo(passengerName, passengerPhoneNumber, passengerEmail)])
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Reservation Phone Number:
                <Input
                    type="number"
                    name="reservationPhoneNumber"
                    value={formData.reservationPhoneNumber}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                Reservation Name:
                <Input
                    type="text"
                    name="reservationName"
                    value={formData.reservationName}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                Passenger Count:
                <Input
                    type="number"
                    name="passengerCount"
                    value={formData.passengerCount}
                    onChange={handleChange}
                    required
                />
            </Label>

            { }

            <Label>
                Passenger Phone Number:
                <Input
                    type="number"
                    name="passengerPhoneNumber"
                    value={formData.passengerPhoneNumber}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                Passenger Email:
                <Input
                    type="email"
                    name="passengerEmail"
                    value={formData.passengerEmail}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                Representative Name:
                <Input
                    type="text"
                    name="representativeName"
                    value={formData.representativeName}
                    onChange={handleChange}
                    required
                />
            </Label>



            <Label>
                출발지:
                <Input
                    type="text"
                    name="departureLocation"
                    value={formData.departureLocation}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                도착지:
                <Input
                    type="text"
                    name="arrivalLocation"
                    value={formData.arrivalLocation}
                    onChange={handleChange}
                    label="인천공항"
                />
            </Label>

            <Label>
                비행기 편명:
                <Input
                    type="text"
                    name="flightNumber"
                    value={formData.flightDetails}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                비행기 출발 시간:
                <Input
                    type="time"
                    name="flightDepartureTime"
                    value={formData.flightDetails}
                    onChange={handleChange}
                    required
                />
            </Label>

            {/* <Label>
                비행기 도착 시간:
                <Input
                    type="time"
                    name="flightArrivalTime"
                    value={formData.flightDetails}
                    onChange={handleChange}
                    required
                />
            </Label> */}

            <Label>
                예약자가 남기는 메모:
                <Textarea
                    name="reservationMemo"
                    value={formData.reservationMemo}
                    onChange={handleChange}
                />
            </Label>

            <Button type="submit">예약</Button>
        </Form>
    );
};

export default ArrivBookingForm;
