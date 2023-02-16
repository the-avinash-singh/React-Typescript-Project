import './App.css';
import { DishItem } from './component/DishItem';
import { DishNo } from './component/dishNo';
import { Starter } from './component/Starter';
function App() {
  const DishList=[
   
    {
      dishes:"Aloo Nazakat",
      prices:500,
      images:"/images/i1.jpg"
    },
    {
      dishes:"Asparagus Puff Pastry Bundles",
      prices:1000,
      images:"/images/Asparagus puff pastry bundles.jpg",
    },
    {
      dishes:"Chilli Garlic Prawn",
      prices:1000,
      images:"./images/Chilli garlic Prawn.jpg",
    },
    {
      dishes:"Aloo Cutlets",
      prices:1000,
      images:"./images/cutlet.jpg",
    },
    {
      dishes:"Deviled Eggs",
      prices:1000,
      images:"./images/deviled eggs.jpg",
    },
    {
      dishes:"Hummus Crostini",
      prices:1000,
      images:"./images/hummus crostini.jpg",
    },
    {
      dishes:"King Crab Bites",
      prices:1000,
      images:"./images/king crab bites.jpg",
    },
    {
      dishes:"Manchurian",
      prices:1000,
      images:"./images/manchurian.jpg",
    },
    {
      dishes:"Mix Mushroom Medley",
      prices:1000,
      images:"./images/mix mushroom medley.jpg",
    },
    {
      dishes:"Tortilla Pinwheels ",
      prices:1000,
      images:"./images/tortilla pinwheels.jpg",
    },
  ]
  return (
    <div className="App">
      <div className="divide-y-2">
        <DishNo dish={DishList}/>
        <Starter dish={DishList}/>
      </div>
      <div>
        <DishItem dish={DishList}/>
      </div>
    </div>
  );
}

export default App;
