import React from 'react';

const FoodForm = (props) => {
  const [name, setName] = React.useState('');
  const [calories, setCalories] = React.useState('');
  const [image, setImage] = React.useState('');

  function addNewFood(e) {
    e.preventDefault();

    let foodToBeAdded = {
      name: name,
      calories: calories,
      image: image,
      quantity: 0,
    };

    props.setFoodArr(props.foodArr.concat(foodToBeAdded));
  }

  return (
    <form onSubmit={addNewFood}>
      <label>Name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        name="name"
        value={name}
      />
      <label>Calories</label>
      <input
        onChange={(e) => setCalories(e.target.value)}
        name="calories"
        value={calories}
      />
      <label>Image</label>
      <input
        onChange={(e) => setImage(e.target.value)}
        name="image"
        value={image}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FoodForm;