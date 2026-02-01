import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Now we use useNavigate directly

  const handleClick = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // ✅ Navigate to main page after deletion
    }
  };

  return <button onClick={handleClick} style={{ color: 'red' }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
