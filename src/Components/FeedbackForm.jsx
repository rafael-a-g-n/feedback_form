import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(
      `Please confirm your details:\n\n${confirmationMessage}`
    );
    if (isConfirmed) {
      console.log("Submitting feedback:", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: "",
      });
      alert("Thank you for your valuable feedback!");
    }
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <div className="rating-group">
          <span>Rate Us:</span>
          <div className="rating-container">
            <input
              id="rating-5"
              type="radio"
              name="rating"
              value="5"
              onChange={handleChange}
              checked={formData.rating === "5"}
            />
            <label htmlFor="rating-5">★</label>
            <input
              id="rating-4"
              type="radio"
              name="rating"
              value="4"
              onChange={handleChange}
              checked={formData.rating === "4"}
            />
            <label htmlFor="rating-4">★</label>
            <input
              id="rating-3"
              type="radio"
              name="rating"
              value="3"
              onChange={handleChange}
              checked={formData.rating === "3"}
            />
            <label htmlFor="rating-3">★</label>
            <input
              id="rating-2"
              type="radio"
              name="rating"
              value="2"
              onChange={handleChange}
              checked={formData.rating === "2"}
            />
            <label htmlFor="rating-2">★</label>
            <input
              id="rating-1"
              type="radio"
              name="rating"
              value="1"
              onChange={handleChange}
              checked={formData.rating === "1"}
            />
            <label htmlFor="rating-1">★</label>
          </div>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
