import React, { Component } from "react";
import { connect } from "react-redux";

import ModalRoot from "./ModalRoot";

import "./dist/css/template.css";
import "./App.css";

import { showModal, hideModal } from "./actions/modal";
import USAMap from "react-usa-map";

const MESSAGE = "A boat modal component.";

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  },
});

class App extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  statesFilling = () => {
    return {
      TX: {
        fill: "yellow",
        clickHandler: this.openConfirmModal,
        //clickHandler: () => alert("The state of Texas has a lot of Positive Cases"),
      },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    };
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
    this.openConfirmModal = this.openConfirmModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.openPromptModal = this.openPromptModal.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  closeModal() {
    this.props.hideModal();
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  showInput() {
    const { address } = this.state;
    const message = address ? `Address: ${address}` : "No address entered";
    this.props.showModal(
      {
        open: true,
        title: "Prompt Modal",
        message,
        closeModal: this.closeModal,
      },
      "alert"
    );
  }

  openAlertModal() {
    this.props.showModal(
      {
        open: true,
        title: "Alert Modal",
        message: MESSAGE,
        closeModal: this.closeModal,
      },
      "alert"
    );
  }

  openConfirmModal() {
    this.props.showModal(
      {
        open: true,
        title: "Confirm Modal",
        message: MESSAGE,
        confirmAction: this.closeModal,
        closeModal: this.closeModal,
      },
      "confirm"
    );
  }

  openDeleteModal() {
    this.props.showModal(
      {
        open: true,
        title: "Delete Modal",
        message: MESSAGE,
        deleteAction: this.closeModal,
        closeModal: this.closeModal,
        deleteText: "delete",
      },
      "delete"
    );
  }

  openPromptModal() {
    this.props.showModal(
      {
        open: true,
        title: "Prompt Modal",
        fields: [
          {
            name: "address",
            placeholder: "Enter your address",
            showLabel: false,
          },
        ],
        onInputChange: this.onInputChange,
        confirmAction: this.showInput,
      },
      "prompt"
    );
  }

  render() {
    return (
      <div className="app">
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
        <header className="app-header">
          <h1 className="app-title">COVID</h1>
        </header>
        <div className="container">
          <div className="modal-types row d-flex justify-content-center align-items-center">
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openAlertModal}
              >
                alert
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openConfirmModal}
              >
                confirm
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openDeleteModal}
              >
                delete
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openPromptModal}
              >
                prompt
              </button>
            </div>
          </div>
        </div>
        <span className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </span>
        <ModalRoot hideModal={this.props.hideModal} />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
