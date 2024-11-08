import React, { useState } from "react";
import { render } from "@react-email/render";
import BookingConfirmationEmail from "../../utils/BookingConfirmationEmail";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = () => {
  const [showModal, setShowModal] = useState(false);

  const initialValues = {
    name: "",
    mobileNumber: "",
    telephoneNumber: "",
    email: "",
    eventType: "",
    eventDate: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, "Mobile Number must be 10 digits")
      .required("Mobile Number is required"),
    telephoneNumber: Yup.string().matches(
      /^\d{10}$/,
      "Telephone Number must be 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    eventType: Yup.string().required("Event Type is required"),
    eventDate: Yup.string().required("Event Date is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const emailHtml = await render(<BookingConfirmationEmail booking={values} />);

      console.log("Generated email HTML:", emailHtml);
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, emailHtml }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setTimeout(() => {
        setShowModal(true);
        setSubmitting(false);
      }, 400);
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert('There was an error confirming your booking. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <div>
                <Field
                  type="text"
                  name="name"
                  style={{
                    width: "20vw",
                    height: "35px",
                    border: "none",
                    borderBottom: "1px grey solid",
                  }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error"
                  style={{ color: "#cc0d2e", textAlign: "left" }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <div>
                <Field
                  type="text"
                  name="mobileNumber"
                  style={{
                    width: "20vw",
                    height: "35px",
                    border: "none",
                    borderBottom: "1px grey solid",
                  }}
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="error"
                  style={{ color: "#cc0d2e", textAlign: "left" }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="telephoneNumber">Telephone Number:</label>
              <div>
                <Field
                  type="text"
                  name="telephoneNumber"
                  style={{
                    width: "20vw",
                    height: "35px",
                    border: "none",
                    borderBottom: "1px grey solid",
                  }}
                />
                <ErrorMessage
                  name="telephoneNumber"
                  component="div"
                  className="error"
                  style={{ color: "#cc0d2e", textAlign: "left" }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <div>
                <Field
                  type="email"
                  name="email"
                  style={{
                    width: "20vw",
                    height: "35px",
                    border: "none",
                    borderBottom: "1px grey solid",
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                  style={{ color: "#cc0d2e", textAlign: "left" }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="eventType">Type of Event:</label>
              <div>
                <Field
                  as="select"
                  name="eventType"
                  style={{
                    width: "20vw",
                    height: "35px",
                    border: "none",
                    borderBottom: "1px grey solid",
                  }}
                >
                  <option value="">Select Type of Event</option>
                  <option value="Virtual Birthday Party">
                    Virtual Birthday Party
                  </option>
                  <option value="Virtual Company Party">
                    Virtual Company Party
                  </option>
                  <option value="Multiple Deliveries">Multiple Deliveries</option>
                  <option value="Christmas Party">Christmas Party</option>
                  <option value="In-store Birthday Party">
                    In-store Birthday Party
                  </option>
                  <option value="In-store Baptismal">In-store Baptismal</option>
                  <option value="Others">Others</option>
                </Field>
                <ErrorMessage
                  name="eventType"
                  component="div"
                  className="error"
                  style={{ color: "#cc0d2e", textAlign: "left" }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="eventDate">Date of Event:</label>
              <div>
                <Field
                  type="date"
                  name="eventDate"
                  style={{
                    width: "20vw",
                    height: "35px",
                    border: "none",
                    borderBottom: "1px grey solid",
                  }}
                />
                <ErrorMessage
                  name="eventDate"
                  component="div"
                  className="error"
                  style={{ color: "#cc0d2e", textAlign: "left" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                marginTop: "1.5em",
              }}
            >
              <button className="form-submit-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Booking...' : 'Book Now'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h3>Thank you for booking an event with <span style={{ color: "#cc0d2e" }}>Jollibee!</span></h3>
              <p>We will be in touch...</p>
              <button onClick={() => setShowModal(false)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;
