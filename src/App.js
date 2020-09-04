import React from "react";
import "./styles.css";
import css from "./App.module.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className={css.item} tabIndex="0">
        <span>Here</span>
        <div className={css.yore}>
          <ul>div.ul-line*42</ul>
        </div>
      </div>
    </div>
  );
}
