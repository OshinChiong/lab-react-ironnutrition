import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import CalculateCalories from './components/CalculateCalories';

function App() {
  const [foodArr, setFoodArr] = React.useState(foods);

  function updateQuantity(food) {
    let updatedArr = foodArr.map((singlefood) => {
      if (singlefood.name === food.name) {
        singlefood.quantity++;
      }
      return singlefood;
    });
    setFoodArr(updatedArr);
  }

  return (
    <div>
      <h3>Add new Food</h3>
      <FoodForm setFoodArr={setFoodArr} foodArr={foodArr} />

      <CalculateCalories foodArr={foodArr} />

      {foodArr.map((individualFood) => {
        return (
          <FoodBox food={individualFood} updateQuantity={updateQuantity} />
        );
      })}
    </div>
  );
}

export default App;
