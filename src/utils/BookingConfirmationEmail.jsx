import React from 'react';
import { Container, Heading, Text } from '@react-email/components';

const BookingConfirmationEmail = ({ booking }) => (
  <Container>
    <Heading>🎉 Your Jollibee Party Reservation is Confirmed! 🎉</Heading>
    <Text>Hi {booking.name},</Text>
    <Text>Thank you for booking with Jollibee! Here are your reservation details:</Text>
    <Text><strong>Date:</strong> {booking.eventDate}</Text>
    <Text>We're excited to celebrate with you! See you soon!</Text>
  </Container>
);

export default BookingConfirmationEmail;
