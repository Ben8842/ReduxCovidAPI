import ActionTypes from "../constants/ActionTypes";

export const showModal = ({ modalProps, modalType }) => (dispatch) => {
  dispatch({
    type: ActionTypes.SHOW_MODAL,
    modalProps,
    modalType,
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: ActionTypes.HIDE_MODAL,
  });
};

export const createModalError = (modalError) => (dispatch) => {
  dispatch({
    type: ActionTypes.CREATE_MODAL_ERROR,
    payload: modalError,
  });
};
