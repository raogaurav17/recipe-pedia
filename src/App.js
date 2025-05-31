import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import { Footer } from './Components/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);

  const apiKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const handleSearch = async (query) => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=12&apiKey=${apiKey}`
      );
      const data = await res.json();

      const detailedRecipes = await Promise.all(
        data.results.map(async (recipe) => {
          const res = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`
          );
          return await res.json();
        })
      );

      setRecipes(detailedRecipes);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?number=4&apiKey=${apiKey}`
        );
        const data = await res.json();
        setRecipes(data.recipes || []);
      } catch (error) {
        console.error('Error fetching random recipes:', error);
      }
    };

    fetchRandomRecipes();
  }, [apiKey]);


  return (
    <>
      <Header onSearch={handleSearch} />
      <Home recipes={recipes} />
      <Footer />
    </>
  );
}

export default App;
