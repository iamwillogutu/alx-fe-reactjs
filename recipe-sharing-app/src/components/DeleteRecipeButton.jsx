import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

export const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleClick = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      onDelete?.();
    }
  };

  return <button onClick={handleClick} style={{ color: 'red' }}>Delete Recipe</button>;
};