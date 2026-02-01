import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;