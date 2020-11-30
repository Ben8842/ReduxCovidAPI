import React, { Component } from "react";
import { connect } from "react-redux";

import ModalRoot from "./ModalRoot";

import "./dist/css/template.css";
import "./App.css";

import { showModal, hideModal } from "./actions/modal";
import USAMap from "react-usa-map";

const MESSAGE = "A modal component.";

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

var cheeseColor = [];

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
    var { isLoaded, citems } = this.state;
    var x = -1;
    while (x < 55) {
      x++;

      if (citems[x].positive > 1000000) {
        cheeseColor.push("darkred");
      } else if (citems[x].positive > 900000) {
        cheeseColor.push("red");
      } else if (citems[x].positive > 500000) {
        cheeseColor.push("firebrick");
      } else if (citems[x].positive > 300000) {
        cheeseColor.push("crimson");
      } else if (citems[x].positive > 150000) {
        cheeseColor.push("indianred");
      } else if (citems[x].positive > 90000) {
        cheeseColor.push("lightcoral");
      } else if (citems[x].positive > 50000) {
        cheeseColor.push("darksalmon");
      } else if (citems[x].positive > 20000) {
        cheeseColor.push("salmon");
      } else if (citems[x].positive < 20000) {
        cheeseColor.push("lightsalmon");
      }
      console.log(cheeseColor[x]);
    }
    return {
      AK: {
        fill: cheeseColor[0],
      },
      AL: {
        fill: cheeseColor[1],
      },
      AR: {
        fill: cheeseColor[2],
      },
      AS: {
        fill: cheeseColor[3],
      },
      AZ: {
        fill: cheeseColor[4],
      },
      CA: {
        fill: cheeseColor[5],
      },
      CO: {
        fill: cheeseColor[6],
      },
      CT: {
        fill: cheeseColor[7],
      },
      DC: {
        fill: cheeseColor[8],
      },
      DE: {
        fill: cheeseColor[9],
      },
      FL: {
        fill: cheeseColor[10],
      },
      GA: {
        fill: cheeseColor[11],
      },
      GU: {
        fill: cheeseColor[12],
      },
      HI: {
        fill: cheeseColor[13],
      },
      IA: {
        fill: cheeseColor[14],
      },
      ID: {
        fill: cheeseColor[15],
      },
      IL: {
        fill: cheeseColor[16],
      },
      IN: {
        fill: cheeseColor[17],
      },
      KS: {
        fill: cheeseColor[18],
      },
      KY: {
        fill: cheeseColor[19],
      },
      LA: {
        fill: cheeseColor[20],
      },
      MA: {
        fill: cheeseColor[21],
      },
      MD: {
        fill: cheeseColor[22],
      },
      ME: {
        fill: cheeseColor[23],
      },
      MI: {
        fill: cheeseColor[24],
      },
      MN: {
        fill: cheeseColor[25],
      },
      MO: {
        fill: cheeseColor[26],
      },
      MP: {
        fill: cheeseColor[27],
      },
      MS: {
        fill: cheeseColor[28],
      },
      MT: {
        fill: cheeseColor[29],
      },
      NC: {
        fill: cheeseColor[30],
      },
      ND: {
        fill: cheeseColor[31],
      },
      NE: {
        fill: cheeseColor[32],
      },
      NH: {
        fill: cheeseColor[33],
      },
      NJ: {
        fill: cheeseColor[34],
      },
      NM: {
        fill: cheeseColor[35],
      },
      NV: {
        fill: cheeseColor[36],
      },
      NY: {
        fill: cheeseColor[37],
      },
      OH: {
        fill: cheeseColor[38],
      },
      OK: {
        fill: cheeseColor[39],
      },
      OR: {
        fill: cheeseColor[40],
      },
      PA: {
        fill: cheeseColor[41],
      },
      PR: {
        fill: cheeseColor[42],
      },
      RI: {
        fill: cheeseColor[43],
      },
      SC: {
        fill: cheeseColor[44],
      },
      SD: {
        fill: cheeseColor[45],
      },
      TN: {
        fill: cheeseColor[46],
      },
      TX: {
        fill: cheeseColor[47],
      },
      UT: {
        fill: cheeseColor[48],
      },
      VA: {
        fill: cheeseColor[49],
      },
      VI: {
        fill: cheeseColor[50],
      },
      VT: {
        fill: cheeseColor[51],
      },
      WA: {
        fill: cheeseColor[52],
      },
      WI: {
        fill: cheeseColor[53],
      },
      WV: {
        fill: cheeseColor[54],
      },
      WY: {
        fill: cheeseColor[55],
      },
    };
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
