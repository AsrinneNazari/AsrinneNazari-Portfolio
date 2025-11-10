import { FormEvent } from "react";

const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
          Name
          <input type="text" name="name" className="inputField" />
          Email
          <input type="email" name="email" className="inputField" />
          Message
          <textarea name="message" className="inputField" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
