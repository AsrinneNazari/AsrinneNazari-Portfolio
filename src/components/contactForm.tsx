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
  // const [errorText, setErrorText] = useState("");
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

    if (!form.current) {
      console.log("error!");
      return;
    }

       emailjs 
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          return;
        }
      );
      // const { name, title, email, message } = inputValue;
    
  };

  return (
    <>
      <div className="inputForm">
        <form ref={form} onSubmit={handleSubmit}>
          Name
          <input type="text" name="name" className="inputField" value={inputValue.name} onChange={handleInputChange} />
          Title
          <input type="text" name="title" className="inputField" />
          Email
          <input type="email" name="email" className="inputField" />
          Message
          <textarea name="message" className="inputField" />
          <button type="submit">Send</button>
        </form>
        <Modal show={showModal} onClose={onClose} />
      </div>
    </>
  );
};
export default ContactForm;
