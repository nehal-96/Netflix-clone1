import React from "react";
import ReactDOM from "react-dom";
import 'normalize-css';
import App from "./App";
import {GlobalStyle} from './globalstyle';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <>
    <GlobalStyle />
    <App />
    </>,
  rootElement
);
