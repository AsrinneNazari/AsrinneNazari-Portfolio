interface IModalProps {
    show: boolean;
    onClose: ()=> void;
}

const Modal = ({show, onClose}: IModalProps) =>{
     if (!show) return null;

    return <>
    <div className="modal-overlay">
  <div className="modal-content">
    <p>Message sent!</p>
    <p>I will get back to you as soon as possible!</p>
    <div className="modal-actions">
      <button onClick={onClose}>Close</button>
    </div>
  </div>
</div>
    </>
};
export default Modal;