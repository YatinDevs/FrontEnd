import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //   const x = "Yatin"; // eslint warning unused var
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  //    color: "LightBlue",fontSize: "50px",textTransform: "uppercase",
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}> Dominos Pizza Co.</h1>
    </header>
  );
}

// ################# Passing props to a component ##########################
// Step 1: Pass props to the child component
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Summer Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic italian Cuisine.6 Creative dishes to Choose from. All from
            our stone oven, All delicious.
          </p>
          <ul className="pizzas">
            {/* We dont do it like this we pass objec itself */}
            {/* {pizzaData.map((pizza)=>(<Pizza name={pizza.name}
           ingredients={pizza.ingredients}
           photoName={pizza.photoName}
           price={pizza.price}/>
           ))} */}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        /*null*/ <p>
          We're Still Working on Our Menu and Availability. Please Come back
          later!
        </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={100}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={15}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// Step 2: Read props inside the child component

function Pizza({ pizzaObj }) {
  //
  // Destructuring Props Obj
  console.log(pizzaObj);
  // Conditional Rendering With Multiple Returns :
  // if (pizzaObj.soldOut) return null;

  // -[19] Setting Classes and Text Conditionally.
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>

        {/* 
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price + 5}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 5}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const openHour = 10;
  const closeHour = 23;
  const date = new Date().toLocaleDateString();
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're Currently Open!")
  // else alert("Sorry We're Closed!")
  // Conditional Rendering With Multiple Returns :
  // if (!isOpen)
  //   return (
  //     <footer className="footer">
  //       <p>
  //         CLOSED!, We're Happy to Welcome you between {openHour}:00 and{" "}
  //         {closeHour}:00
  //       </p>
  //     </footer>
  //   );

  return (
    <footer className="footer">
      {/* {"Date:" + new Date().toLocaleDateString()+" "}{ "Time:"+hour +":"+min+","} "We're Currently Open, Ready to Serve." */}
      {/* Conditional Rendering with && */}
      {isOpen ? (
        <Order closeHour={closeHour} date={date} />
      ) : (
        <p>
          CLOSED! We're Happy to Welcome you between {openHour}:00 and{" "}
          {closeHour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement(
  //   'footer',
  //   null,
  //   "We're Currently Open!Ready to Serve.",
  // )
}

function Order({ closeHour, date }) {
  return (
    <div className="order">
      <p>
        We're Open until {closeHour}:00 {date}. Come Visit Us or Order Online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// React V18 --> rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
// We can use Strict Mode.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App></App>,document.getElementById("root"));
