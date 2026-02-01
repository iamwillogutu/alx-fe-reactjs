import React from 'react';
import './App.css';
import { AddRecipeForm } from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { RecipeList } from './components/RecipeList';
import { RecipeDetails } from './components/RecipeDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Recipe Sharing App</h1>

        <Routes>
          {/* Main page: Add recipe + list */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe details page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
