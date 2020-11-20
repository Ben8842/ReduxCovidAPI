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

var cheese = [
  "AK",
  "AL",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MP",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

let figureout = (abbreviation) => {
  var finder = cheese.indexOf(abbreviation);
  console.log(finder + " figureout " + abbreviation + " abbreviation");
  return finder;
};

class App extends Component {
  mapHandler = (event) => {
    //clickHandler: this.openConfirmModal;
    let boat = figureout(event.target.dataset.name);
    console.log(boat);
    this.openConfirmModal(boat);
  };
  statesFilling = () => {
    return {};
  };
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isLoaded: false,
      citems: [],
    };
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
    this.openConfirmModal = this.openConfirmModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.openPromptModal = this.openPromptModal.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/states/current.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          citems: json,
        });
      });
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

  openConfirmModal(file) {
    var { isLoaded, citems } = this.state;
    console.log(file + " number is the index");
    this.props.showModal(
      {
        open: true,
        title: citems[file].state,
        message: citems[file].positive + " positive cases",
        message2:
          citems[file].hospitalizedCurrently + " are currently hospitalized",
        message3: citems[file].death + " total deaths",
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
    var { isLoaded, citems } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <h1 className="app-titles">COVID-19</h1>
          <h1 className="app-titles">Click on a State</h1>
          <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />

          <header className="app-header">
            <h1 className="app-title">COVID-19</h1>
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
          <ul>
            DATA HAS BEEN LOADED
            {citems.map((item) => (
              <li key={item.id}>
                Positive Cases: {item.positive} | State: {item.state} |{" "}
                {item.id}
              </li>
            ))}
            ;
          </ul>
          <span className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </span>
          <ModalRoot hideModal={this.props.hideModal} />
        </div>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
