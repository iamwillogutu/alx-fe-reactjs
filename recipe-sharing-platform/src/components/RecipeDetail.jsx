import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-20 text-gray-600">Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {/* Example ingredients */}
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </div>

          {/* Cooking Steps Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {/* Example steps */}
              <li>Step 1: Lorem ipsum dolor sit amet.</li>
              <li>Step 2: Consectetur adipiscing elit.</li>
              <li>Step 3: Sed do eiusmod tempor incididunt.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
