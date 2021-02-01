import React, { Component } from "react";
import { connect } from "react-redux";
import { max } from "mathjs";
import ModalRoot from "./ModalRoot";

import "./dist/css/template.css";
import "./App.css";

import { showModal, hideModal, createModalError } from "./actions/modal";
import USAMap from "react-usa-map";

const MESSAGE = "A modal component.";

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  },
  createModalError: (modalError) => {
    dispatch(createModalError(modalError));
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

var popu = [
  731545,
  4903185,
  3017825,
  55465,
  7278717,
  39512223,
  5758736,
  3565287,
  705749,
  973764,
  21477737,
  10617423,
  165768,
  1415872,
  3155070,
  1787065,
  12671821,
  6732219,
  2913314,
  4467673,
  4648794,
  6949503,
  6045680,
  1344212,
  9986857,
  5639632,
  6137428,
  56882,
  2976149,
  1068778,
  10488084,
  762062,
  1934408,
  1359711,
  8882190,
  2096829,
  3080156,
  19453561,
  11689100,
  3956971,
  4217737,
  12801989,
  3194000,
  1059361,
  5148714,
  884659,
  6833174,
  28995881,
  3205958,
  8535519,
  106977,
  623989,
  7614893,
  5822434,
  1792147,
  578759,
];

var cheeseColor = [];

let figureout = (abbreviation) => {
  var finder = cheese.indexOf(abbreviation);

  return finder;
};

class App extends Component {
  mapHandler = (event) => {
    //clickHandler: this.openConfirmModal;
    let boat = figureout(event.target.dataset.name);

    this.openConfirmModal(boat);
  };
  statesFilling = () => {
    var { isLoaded, citems } = this.state;
    var x = -1;
    var y = -1;
    var density = [];
    while (y < 55) {
      y++;
      density.push(citems[y].positive / popu[y]);
    }
    var maxy = Math.max(...density);
    var minny = Math.min(...density);
    //console.log(Math.max(...density) + "hi" + Math.min(...density));
    var diffyTen = maxy / 10;

    var blue = 0;
    var green = 0;
    var red = 255;

    while (x < 55) {
      x++;
      var toty = Math.floor((density[x] / maxy) * 510);
      // console.log(toty);
      if (toty <= 255) {
        green = Math.floor(255 - toty);
        blue = Math.floor(255 - toty);
        cheeseColor.push("rgb(255," + green + "," + blue + ")");
      }
      if (toty > 255) {
        red = Math.floor(510 - toty);
        green = 0;
        blue = 0;
        cheeseColor.push("rgb(" + red + "," + green + "," + blue + ")");
      }

      //console.log(density[x]);
      /*
      if (density[x] > maxy - diffyTen) {
        cheeseColor.push("#2C0800");
      } else if (density[x] > maxy - 2 * diffyTen) {
        cheeseColor.push("#AB2100");
      } else if (density[x] > maxy - 3 * diffyTen) {
        cheeseColor.push("#C92E09");
      } else if (density[x] > maxy - 4 * diffyTen) {
        cheeseColor.push("#DC4A27");
      } else if (density[x] > maxy - 5 * diffyTen) {
        cheeseColor.push("#EB7255");
      } else if (density[x] > maxy - 6 * diffyTen) {
        cheeseColor.push("#F3A08C");
      } else if (density[x] > maxy - 7 * diffyTen) {
        cheeseColor.push("#FAC8BC");
      } else if (density[x] > maxy - 8 * diffyTen) {
        cheeseColor.push("#FFD9D0");
      } else if (density[x] < maxy - 8 * diffyTen) {
        cheeseColor.push("#FFE9E4");
      }*/
      //console.log(cheeseColor[x]);
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
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.showInput = this.showInput.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
    this.openLogInModal = this.openLogInModal.bind(this);
    this.submitLogIn = this.submitLogIn.bind(this);
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    let loggedin = typeof user === "object";
    fetch("https://api.covidtracking.com/v1/states/current.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          citems: json,
          ...user,
          loggedin: loggedin,
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

  submitSignUp() {
    const { email, username, password } = this.state;
    fetch("http://localhost:5000/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ email, username, password }),
      // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 400) {
          return res.text();
        }
        //if (res.status === 201) {
        else {
          return;
        }
      })

      .then((data) => {
        if (typeof data === "string") {
          console.log("duplicate user detected");
          this.props.createModalError(data);
        }
        //if (typeof data === "object") {
        else {
          console.log("new user saved!");
          this.closeModal();
        }
      });
  }

  submitLogIn() {
    const { email, password } = this.state;
    fetch("http://localhost:5000/authenticate", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ email, password }),
      // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 400) {
          return res.text();
        }
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (typeof data === "string") {
          console.log("message hello");
          this.props.createModalError(data);
        }
        if (typeof data === "object") {
          localStorage.setItem("user", JSON.stringify(data));
          console.log(data);
          this.setState(data);
          this.setState({
            loggedin: true,
          });
          this.closeModal();
        }
      });
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
    var pos = citems[file].positive;
    var pop = popu[file];
    var hos = citems[file].hospitalizedCurrently;
    var det = citems[file].death;

    this.props.showModal(
      {
        open: true,
        title: citems[file].state,
        message:
          pos.toLocaleString() +
          " positive cases " +
          " and the population is " +
          pop.toLocaleString(),
        message2: hos.toLocaleString() + " are currently hospitalized",
        message3: det.toLocaleString() + " total deaths",
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

  openSignUpModal() {
    this.props.showModal(
      {
        open: true,
        title: "Sign Up",
        fields: [
          {
            name: "email",
            placeholder: "email address",
            showLabel: false,
          },
          {
            name: "username",
            placeholder: "username",
            showLabel: false,
          },
          {
            name: "password",
            placeholder: "password",
            showLabel: false,
          },
        ],
        onInputChange: this.onInputChange,
        confirmAction: this.submitSignUp,
      },
      "prompt"
    );
  }

  openLogInModal() {
    this.props.showModal(
      {
        open: true,
        title: "Log In",
        fields: [
          {
            name: "email",
            placeholder: "email",
            showLabel: false,
          },
          {
            name: "password",
            placeholder: "password",
            showLabel: false,
          },
        ],
        onInputChange: this.onInputChange,
        confirmAction: this.submitLogIn,
      },
      "prompt"
    );
  }

  render() {
    console.log(this.state);
    var { isLoaded, citems, username, loggedin } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const authbuttons = (
        <div className="container">
          <div className="d-flex flex-row-reverse">
            <div className="p-2">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={this.openSignUpModal}
              >
                SIGN UP
              </button>
            </div>
            <div className="p-2">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={this.openLogInModal}
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      );

      const logoutButton = (
        <div className="container">
          <div className="d-flex flex-row-reverse">
            <div className="p-2">
              <button className="btn btn-outline-primary btn-sm">
                LOG OUT
              </button>
            </div>

            <div className="p-2">
              <button className="btn btn-outline-primary btn-sm">
                SETTINGS
              </button>
            </div>
            <h6 class="app-titlesH">{username} is logged in</h6>
          </div>
        </div>
      );

      return (
        <div className="app">
          {username && loggedin ? logoutButton : authbuttons}

          <h1 className="app-titles">COVID-19</h1>
          <h1 className="app-titles">Click on a State</h1>
          <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
          <header className="app-header">
            <h1 className="app-title">COVID-19</h1>
          </header>

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

/*
 <ul>
   DATA HAS BEEN LOADED
   {citems.map((item) => (
     <li key={item.id}>
       Positive Cases: {item.positive} | State: {item.state} | {item.id}
     </li>
   ))}
   ;
 </ul>;

 */

/*<div className="container">
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
              <div className="col">
                <button
                  className="btn btn-outline-primary btn-block"
                  onClick={this.openSignUpModal}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>*/
