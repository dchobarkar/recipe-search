import React, { Component } from "react";

import Form from "./components/Form";
import "./App.css";

const API_KEY = "";

class App extends Component {
  state = {
    recipes: [],
  };

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://food2fork.com/api/search?key=${API_KEY}&g=shredded%20chicken&count=5`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map((recipe) => {
          return <p key={recipe.recipe_id}>{recipe.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
