import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
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

const ConfirmationForm = () => {
  const [confirmationData, setConfirmationData] = useState({
    reservationConfirmationNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfirmationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform confirmation submission logic here
    console.log(confirmationData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        예약 확인 전화번호:
        <Input
          type="text"
          name="reservationConfirmationNumber"
          value={confirmationData.reservationConfirmationNumber}
          onChange={handleChange}
          required
        />
      </Label>

      <Button type="submit">확인</Button>
    </Form>
  );
};

export default ConfirmationForm;
