import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import HarryBooks from "./Components/HarryBooks";
// import SherlockBooks from "./Components/SherlockBooks";
import heart from '../src/images/bx_bx-book-heart.png';
import bell from '../src/images/ic_round-notifications-none.png';
import diamond from '../src/images/fluent_premium-person-20-regular.png';
import {FaSistrix} from "react-icons/fa";

function App() {
  const [state, setState] = useState(1);
  const [hpBooks, setHpBooks] = useState([]);
  const [shBooks, setShBooks] = useState([]);
  const [search, setSearch] = useState("");

  function bookSearch(){
    setHpBooks(allBooks.filter((book) => {
      return book.volumeInfo.title.includes(search);
    }))
  }

  useEffect(() => {
    async function getHarryPotter() {
      let response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter`
      );
      let data = await response.json();
      let Books = data.items;
      setHpBooks(Books);
      // console.log(Books);
    }
    getHarryPotter();
    async function getSherlockHolmes() {
      let response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
      );
      let data = await response.json();
      let books = data.items;
      setShBooks(books);
      // console.log(books);
    }
    getSherlockHolmes();
  }, [state]);

  let allBooks = hpBooks.concat(shBooks);
  // console.log(allBooks);

  return (
    <div className="App">
      <div className="header">
        <span className="logo">BookShop</span>
        <div className="search-area">
          <div className="search-box">
            <span id="search-icon">
              <FaSistrix />
            </span>
            <input type="text" id="search-input" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <button id="search-btn" onClick={bookSearch}>Search</button>
        </div>
        <div className="other-icons">
          <span>
            <img src={heart} alt="" />
          </span>
          <span>
            <img src={bell} alt="" />
          </span>
          <span>
            <img src={diamond} alt="" />
          </span>
        </div>
      </div>
      <div className="books-cards">
        {allBooks.map((element, index) => {
          return (
            <HarryBooks
              key={index}
              title={element.volumeInfo.title}
              img={element.volumeInfo.imageLinks.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
