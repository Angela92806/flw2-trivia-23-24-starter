import React, { useState } from "react";
import './App.css'
import data from "./sample_data.json";
import Question from "./componets/Question.jsx";


export default function App() {
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question Question={props.Question}/>
    </div>
  );
}
