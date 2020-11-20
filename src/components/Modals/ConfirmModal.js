import React from "react";

const ConfirmModal = ({
  closeModal,
  confirmAction,
  title,
  message,
  message2,
  message3,
}) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={closeModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>{message}</p>
        <p>{message2}</p>
        <p>{message3}</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={confirmAction}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
