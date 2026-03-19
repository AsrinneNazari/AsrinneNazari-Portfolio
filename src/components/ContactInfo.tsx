import { MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="contactInfoText">
      <h3 className="contactTitle">Let’s connect ✨</h3>

      <p className="contactDescription">
        Have a question, an idea, or just want to say hi?  
        I’m always open to talking about new opportunities, projects, or anything frontend-related.
      </p>

      <div className="contactLocation">
        <MapPin size={18} />
        <span>Stockholm, Sweden</span>
      </div>
    </div>
  );
};