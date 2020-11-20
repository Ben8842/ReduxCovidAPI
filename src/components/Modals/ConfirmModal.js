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
        <h1 className="modal-title">{title}</h1>
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
        <h3>{message}</h3>
        <h3>{message2}</h3>
        <h3>{message3}</h3>
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
