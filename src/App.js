import React from "react";
import "./styles.css";
import { useState } from "react";

const book = {
  drawing: [
    {
      name: "Keys to Drawing",
      rating: "5/5",
      discription: "**This book is the best drawing book I have found. It is really helpful**"
    },
    {
      name: "Art Fundamentals",
      rating: "4.5/5",
      discription: "**This is counterproductive to talk about elements of drawing, fundamentals are a foundation, On which a structure sits**"
    },
    {
      name: "The Sketch Encyclopedia",
      rating: "4.5/5",
      discription: "**It gives step by step assistance on learning how to draw EVERYTHING.This book is all you need to learn how to draw a variety of things.**"
    }
  ],

  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      discription: "**This is a book about JavaScript, programming, you can read it online**"
    },
    {
      name: "Secrets of the JavaScript Ninja",
      rating: "5/5",
      discription: "**With Secrets of the JavaScript Ninja readers will gain the knowledge**"
    },
    {
      name: "JavaScript and JQuery",
      rating: "4.5/5",
      discription: "**Excellent book for the beginner who interested to learn JavaScript & jQuery.This book contain Vanilla JavaScript. It was written in 2014.**"
    }
  ],

  comedy: [
    {
      name: "You’ve Got to Laugh",
      rating: "4/5",
      discription: "**A charming read with a rollercoaster of emotions. You will smile, cry and most of all laugh**"
    },
    {
      name: "Carry On, Jeeves",
      rating: "3.5/5",
      discription: "**This book never fails to lift up your spirit.It has to be the ultimate feel-good read, outrageously funny and impeccably written**"
    },
    {
      name: "The Divine Comedy",
      rating: "4.6/5",
      discription: "**This book is a complete edition. It includes all three poems Inferno, Purgatorio and Paradiso along with illustrations.**"
    }
  ],

  business: [
    {
      name: "Think and Grow Rich",
      rating: "3.5/5",
      discription: "**This book was published in 1940's ,it is old book but had every bit of relevant and eternal information which we think of now and ever**"
    },
    {
      name: "Rich Dad, Poor Dad",
      rating: "4/5",
      discription: "**This book is written for beginners. You aren't required to be from commerce background to understand it. Not many terms are used and those used are explained sufficiently**"
    },
    {
      name: "Business Adventures",
      rating: "5/5",
      discription: "**There are twelve stories in this book from the business world, mostly occurring in the 1950s and 1960s**"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚📚 Goodbooks 📚📚 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(book).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {book[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <h1> </h1>
              <div style={{ fontSize: "smaller" }}> {book.discription} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
