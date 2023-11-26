import './App.css';
import React, { PureComponent } from 'react';
import Header from "./dashboard/header/Header.jsx";
import SearchBar from "./dashboard/searchbar/SearchBar.jsx";
import Filter from "./dashboard/emojis/Filter.js";
import EmojiResults from "./dashboard/emojis/EmojiResults.jsx";
// import Filter from "./dashboard/emojis/Filter.js";

export default class App extends PureComponent 
{
    state = {
      filteredEmojis: Filter("", 20),
    };
  
    handleChange = (event) => {
      this.setState({
        filteredEmojis: Filter(event.target.value, 15),
      });
    };
  
    render() {
      return (
        <div>
          <Header />
          <SearchBar handleChange={this.handleChange} />
          <EmojiResults emojiData={this.state.filteredEmojis} />
        </div>
      );
    }
  }