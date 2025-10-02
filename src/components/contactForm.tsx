import { FormEvent } from "react";

const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
          name
          <input type="text" name="name" className="inputField" />
          email
          <input type="email" name="email" className="inputField" />
          text
          <textarea name="message" className="inputField" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
