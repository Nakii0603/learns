"use client";
import React, { useState } from "react";

export default function Home() {
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handler = () => {
    setComment((prevComments) => [...prevComments, inputValue]);
    setInputValue("");
  };
  return (
    <div>
      <input
        value={inputValue}
        className="border-2 border-black"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handler} className="btn">
        add comment
      </button>
      <div>
        {comment.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
    </div>
  );
}
