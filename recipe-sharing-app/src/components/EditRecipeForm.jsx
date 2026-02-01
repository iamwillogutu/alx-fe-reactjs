import React, { useState } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

export const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', marginBottom: '20px' }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={{ display: 'block', marginBottom: '10px', width: '300px', height: '100px' }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};
