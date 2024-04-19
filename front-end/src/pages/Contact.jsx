import React, { useState } from "react";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const handleInputOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/contacts`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>

        <form className="space-y-8" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputOnChange}
              placeholder="example@gmail.com"
              className="form__input"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputOnChange}
              placeholder="Let us know how we can help you"
              className="form__input"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputOnChange}
              placeholder="Leave a comment...."
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
