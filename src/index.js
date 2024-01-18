import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import Router from "./components/Router";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
