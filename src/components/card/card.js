import * as React from "https://cdn.skypack.dev/react@17.0.1";
import './card.scss';

function CardGrid() {
  return (
    <div className="wrapper">
      <Card
        img="https://imgs.search.brave.com/gCmzDe3RYZxGhWu5jBHyqyCG4GxQYl-Hw2XSDmRsJNY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/OHBFa2phbkVOT0Z2/YWFaNERzOGhBSGFF/OCZwaWQ9QXBp"
        title="Indian Cuisine"
        description="Indian cuisine consists of a variety of regional and traditional cuisines native to India."
      />

      <Card
        img="https://imgs.search.brave.com/BPfe6wsYfWD3cJ_090w41Tz9pb9OQPq1QDe0RXPCnCU/rs:fit:700:500:1/g:ce/aHR0cDovL3d3dy5h/Y2NsYWluZGlhLmNv/bS9zdWNjZXNzLXN0/b3JpZXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDIvNS5q/cGc"
        title="Continental"
        description="Continental food refers to the delicacies consumed in European countries"
      />

      <Card
        img="https://imgs.search.brave.com/nSEc_hPeiGR0Z-GSKy-YsuylaEh5Ij0eoKytzNNHzvQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tQWtMRTJqSENI/bGsvVWtqdm5YNlJX/VkkvQUFBQUFBQUFD/X3MvdVpQUTZmSG10/NTAvczE2MDAvZGVz/c2VydHM2LmpwZw"
        title="Dessert"
        description="Don't Skip the dessert with your meal!"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card" style={{backgroundColor:'black'}}>
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Explore</button>
    </div>
  );
}
export default CardGrid;
