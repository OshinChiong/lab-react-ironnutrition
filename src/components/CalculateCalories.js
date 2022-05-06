import React from 'react';

const CalculateCalories = (props) => {
  //This is an array of foods with quantity
  let total;
  let selectedFoods = props.foodArr.filter((food) => {
    return food.quantity > 0;
  });

  return (
    <div>
      <h4>Today's Foods:</h4>
      <ul>
        {selectedFoods.map((food) => {
          total += food.calories * food.quantity;
          return (
            <li>
              {food.quantity} {food.name} {food.calories * food.quantity}
            </li>
          );
        })}
      </ul>
      <p>Total calories: {total}</p>
      <p>
        Total calories:{' '}
        {selectedFoods.reduce(
          (sum, nextVal) => sum + nextVal.quantity * nextVal.calories,
          0
        )}
      </p>
    </div>
  );
};

export default CalculateCalories;