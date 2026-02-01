import React from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { RecipeList } from './components/RecipeList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>

      {/* Form to add a new recipe */}
      <AddRecipeForm />

      {/* List of recipes */}
      <RecipeList />
    </div>
  );
}

export default App;