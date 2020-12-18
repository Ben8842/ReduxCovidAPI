import React from "react";

const LoginModal = ({
  closeModal,
  confirmAction,
  title,
  fields,
  onInputChange,
  showLabel,
  modalError,
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
        <form>
          {fields.map((field) => {
            return (
              <div className="form-group" key={field.name}>
                {showLabel && (
                  <label htmlFor="address">{`${field.label}`}</label>
                )}
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  className="form-control"
                  placeholder={`${field.placeholder}`}
                  onChange={onInputChange}
                />
              </div>
            );
          })}
        </form>
        <p>{modalError}</p>
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
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
