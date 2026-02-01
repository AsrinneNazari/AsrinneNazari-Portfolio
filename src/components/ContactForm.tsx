import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import Modal from "./Modal";

const ContactForm = () => {
  const startInput = {
      name: "",
      title: "",
      email: "",
      message: "",
    };
  const [inputValue, setInputValue] = useState(startInput);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const form = useRef<HTMLFormElement | null>(null);

   const onClose = () => {
    setShowModal(false);
  };

const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } =
      e.target; 
    setInputValue((prev) => ({
      ...prev ,
      [name]:
        value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (!form.current) return;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );
     setIsSubmitting(false); 
    setShowModal(true);
    setInputValue(startInput);
  } catch (error) {
    console.error("Email failed:", error);
    setIsSubmitting(false);
  }
};

  return (
    <>
      <div className="inputForm">
        <form ref={form} onSubmit={handleSubmit}>
          Name
          <input type="text" name="name" className="inputField" value={inputValue.name} onChange={handleInputChange}/>
          Title
          <input type="text" name="title" className="inputField" value={inputValue.title} onChange={handleInputChange} />
          Email
          <input type="email" name="email" className="inputField" value={inputValue.email} onChange={handleInputChange} />
          Message
          <textarea name="message" className="inputField message" value={inputValue.message} onChange={handleInputChange}/>
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? (
    <>
      <span className="spinner" />
      Sending...
    </>
  ) : (
    "Send"
  )}
</button>
        </form>
        <Modal show={showModal} onClose={onClose}/>
      </div>
    </>
  );
};
export default ContactForm;

