import * as React from "react";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <h1>Inspiring quote</h1>
      <Quote text="To be, or not to be..." author="Hamlet" />
    </div>
  );
}

export function Quote({ text, author }) {
  return (
    <blockquote>
      <p>{text}</p>
      <cite>{author}</cite>
    </blockquote>
  );
}
