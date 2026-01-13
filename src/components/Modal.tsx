interface IModalProps {
    show: boolean;
    onClose: ()=> void;
}

const Modal = ({show, onClose}: IModalProps) =>{
     if (!show) return null;

    return <>
    <div className="modal-overlay">
  <div className="modal-content">
    <p>Meddelande skickat</p>
    <p>Vi återkommer till dig så fort som möjligt!</p>
    <div className="modal-actions">
      <button onClick={onClose}>Stäng</button>
    </div>
  </div>
</div>
    </>
};
export default Modal;