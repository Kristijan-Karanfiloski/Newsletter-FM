import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalSlice.jsx";
import "./Modal.scss";

import { IconSuccess } from "../svg/IconSuccess.jsx";

const Modal = () => {
  const modal = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  // console.log(modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  // console.log("From the modal component", modal);

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="modal__body">
            <IconSuccess />
            <h1 className="modal__header">Thanks for subscribing!</h1>
            <p className="modal__text">
              A confirmation email has been sent to{" "}
              <span>ash@loremcompany.com.</span>
              Please open it and click the button inside to confirm your
              subscription.
            </p>
            <button className="modal__btn" onClick={handleCloseModal}>
              Dismiss message
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
