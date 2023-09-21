# Two Options for Setting up a React Project :

- Complete "starter kit" for React Applications.
- Everyting is already configured : ESLint,Prettier,Jest,etc.
- Problem : (Created many years ago)
- Uses slow and outdated technologies (i.e webpack)

Mostly Use for:

- Use for tutorial or experiments --> is good
- Dont use for a Real-world app

- 2. Vite
- Mordern Build tool that contains a template for setting up React Applications
- Need to manually set up ESLint(and others).
- Extermely Fast hot module replacement(HMR) and bundling is also fast.
  (Page updates instantly.)

# What about React Frameworks ?

- The React team now advises to use a "React Framework" for New Projects.
- 1. Next.js
- 2. Remix

- Many People think that this is not the best idea:
  "vanilla" React apps are important too!
- This only makes Sense for building actual Products ,not for Learning React
- Dont Worry about this Recommendation for now . Lets just learn React!.

- 1. Create-React-App

# Setting Up With Create-React-App

- npx create-react-app pizza-menu
- npx create-react-app@5 pizza-menu --> (Version5)

- cd pizza-menu
- # npm run start -> (to Start the Project).

# =================================================================================

# Section 5 : Working With Components,Props,and JSX.

# ==================================================================================

- Overview :
- Core Concepts : Components,Props,and JSX.
- Creating and reusing Components.
- Rendering Lists
- Conditional Rendering.
- # Writing Own Code.
- # PIZZA MENU Project .

- [1]. Rendering the Root Component and Strict Mode :
- 1.webpack expects index.js in src(if we start vanilla react,i.e deleting files).
- 2.importing React and React-DOM using NPM in Index.js file.

- # [2].Debugging
- # [3].Components as Building Blocks.

  - React application are Entirely made out of Components.
  - Building blocks of user Interfaces in React
  - Piece of UI that has its own data,logic,and appearance(how it works and looks).
  - we build complex UIs by building multiple components and combining them.
  - Components can be reused ,nested inside each other and pass data between them.

- [4].Creating and Reusing a Component.
  - (New Components --> Using Functions)
  - # Nesting Component.
- # [5]. What is JSX ?

  - It is an Declarative Syntax to Describe what Components look like and how they work
  - Components must return a block of JSX.
  - Extension of JS that allows us to embed JS CSS and React Components into HTML.
  - Each JSX element is converted to React.createElement function call.
  - JSX Element with Babel --> to React.createElement.

  - Why JSX is Declarative ?:

  - Imperative :

    - Manual DOM element selections and DOM traversing.
    - Step by Step DOM mutations until we react the desired UI

  - Declarative
    - Describe what UI Should look like using JSX, based on current data.
    - React is abstraction away from DOM : we never touch the DOM.
    - # Instead we think of the UI as a Reflection of the current data.

- # [6]. Creating More Components :
- # [7]. JavaScript Logic in Components

- # [8]. Separation of Concerns.

  - Rise Of Interactive SPAS --> JavaScript is in Charge of HTML --> Logic and UI are tightly coupled --> why keep them separated? --> React Components + JSX.

  - HTML and JS are Colocated in ReactJS

  - Fundamental Reason for components --> Logic and UI are tightly coupled

  - [i] - Before One Technology Per File --> Traditional Separation of concerns

                         - completely New Paradigm.

  - [ii] - One Component per File --> Each Component is Concerned with one piece of the UI.

  - # Seperation of Concerns --> is Present in ReactJs --> Incase of Component per File.

- [9] Styling React Applications.

  - className instead class to style and few more JSX rules.
    - Used till now:
    - Main index.css to style components (Incase of Small Applications)
  - Will Use Later Styled Components.

=====================================================================================

- # [10] Passing and Receiving Props

  - React components use props to communicate with each other.
  - Every parent component can pass some information to its child components by giving them props.
  - Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

    - 1. Passing props to a component
      - Step 1: Pass props to the child component
      - Step 2: Read props inside the child component

- # [11] Props ,Immutability , and One-Way Data Flow.

  - # Reviewing Props :

  Props : Props are used to pass data from parent components to Child Components (Down the Component tree).

  - Essential tool to configure and customize components (like function parameters).

  - with props ,parent components control how child components look and work.

  - Anything can be passed as props : Single Values , Arrays , Objects,
    functions, Even Other components.

  - ! Props are Read- Only!:

  - Props is data coming from the outside ,
    and can only be Updated by the Parent Component.
  - State is Internal Data that can be updated by the component's Logic.
    ---------------|
    ---------------|
    Component |
    ---------------|
    Data |
    Props | ---> Props is data coming from the outside , and can ----> Parent Component
    | only be Updated by the Parent Component.
    State | -------> State is Internal Data that can be updated
    by the component's Logic.
    ---------------|
    Logic |
    Appearance |
    ---------------|

- Hence Props are Read - Only ,they are immutable! This is one of React's Strict Rules.
- If You need to mutate props,you actually need state.
  So, Why ?
- Mutating Props would affect Parent, creating side Effect(Not pure).
- Components have to be pure functions in terms of props and state.
- This allows React to Optimize apps, avoid bugs , Make apps predictable.

let x=7; --> Should not mutate data outside the function scope. eg.

function Component (){
x=23;
return <h1>Number{x}</h1>  
 }

=====================================================================================

- # React Uses One Way Data Flow .
- One Way Data Flow :
  - Makes applications More predictable and easier to understand.
  - makes applications easier to debug as we have more control over the data .
  - Is More Performant.

====================================================================================

- # [12] The Rules Of JSX.

- General JSX Rules.

  - JSX Works Essentially like HTML , But we can enter "JS Mode" by using {}
    (for text or attributes.)
  - We Can place JS expressions inside {}
    Example : reference variable , create arrays or objects, [].map(),ternary operators
  - Statements are not allowed (if/else,for loop,switch).
  - JSX produces a JS expression

  const element = <h1> Hello React </h1>;
  const element = React.createElement("h1,null,"Hello React!");

  - We can Place other pieces of JSX inside {}.
  - We can write JSX anywhere inside component (in if/else,assign to var,pass it into functions)

  - A piece of JSX can only have one root Element. If you need more, use<React.Fragment> (or the short<>)==================================================================================

  Difference Between JSX and HTML :

  1. className instead of HTML's class.
  2. htmlFor instead of HTML's for
  3. Every tag needs to be closed . Examples : <img/> <br/>
  4. All event handlers and other properties need to be camelCased.
     Example : onClick or onMouseOver

  Exception: aria-_ and data-_ are written with dashes like in HTML.

  5. CSS inline styles are written like this : {{<style>}}
     (to reference variable , and then an object)
  6. CSS property names are also camelCased.
  7. # Comments need to be in {} (because they are JS.)

  - [13] Rendering Lists

  - Inside Pizza Menu project :
  - Used Map method to Render List of Array with objects.
  - Passed an Pizza Obj from parent as props.
  - fetched props obj and used in child to iterate through whole list
  - and Render whole Pizza Menu.
    The `map` method in JavaScript can be used to modify an array by passing a callback function that takes each element of the array as its parameter and returns the modified version. The `map` method does not modify the original array, but instead creates a new one with updated values.

==================================================================================

- [14] Conditional Rendering With && :

  - React doesnt not render boolean values .
  -      {isOpen && <p>Open</p>} ---> In case reference var - isOpen is true
          Open will be rendered here
          In case False --> short circuit will happen and nothing will be rendered
  <!-- ------------------------------------------------------ -->
  - In case of Number if false 0 is rendered we dont want it So
  const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Summer Menu</h2>
      {numPizzas  && (
        <ul className="pizzas">

  - So we added condition numPizza >0 so it return boolean
  const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Summer Menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">

==================================================================================

<!--     Concepts till now

// ################# Passing props to a component ##########################
// Step 1: Pass props to the child component
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Summer Menu</h2>
      {numPizzas > 0 && (
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
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 5}</span>
      </div>
    </li>
  );
}

-->

==================================================================================

- [14] Conditional Rendering With Ternaries :

- Using Ternary Operator we can pass alternative outcome while rendering Conditions

// ################# Passing props to a component ##########################
// Step 1: Pass props to the child component
function Menu() {
// const pizzas = pizzaData;
const pizzas = [];
const numPizzas = pizzas.length;
return (

<main className="menu">
<h2>Our Summer Menu</h2>
{numPizzas > 0 ? (
<ul className="pizzas">
{/_ We dont do it like this we pass objec itself _/}
{/_ {pizzaData.map((pizza)=>(<Pizza name={pizza.name}
           ingredients={pizza.ingredients}
           photoName={pizza.photoName}
           price={pizza.price}/>
))} _/}
{pizzas.map((pizza) => (
<Pizza pizzaObj={pizza} key={pizza.name} />
))}
</ul>
) :(
        /*null*/ <p>
          We're Still Working on Our Menu and Availability. Please Come back
          later!
        </p>
      )}

);
}

==================================================================================

- [15] Conditional Rendering With Multiple Returns :

function Pizza(props) {
console.log(props);
// Conditional Rendering With Multiple Returns :

if (props.pizzaObj.soldOut) return null;
return (

<li className="pizza">
<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
<div>
<h1>{props.pizzaObj.name}</h1>
<p>{props.pizzaObj.ingredients}</p>
<span>{props.pizzaObj.price + 5}</span>
</div>
</li>
);
}

================================================================================

# InCase of Conditional Rendering Ternary Operator is Recommended.

==================================================================================

- [16] Extracting JSX into a New Component.

- [17] Destructuring Props.

- [18] React Fragements

- What are the benefits of React fragment?
  With React Fragment, you can render multiple elements of a component without adding extra div tags. We can write cleaner, more readable code with React Fragments. It takes up less memory and renders components faster. Each component is rendered as expected.
- When should I use React fragments?
  When should you use React Fragment. You should use the React Fragment when you want to add a parent element to fulfill the JSX syntax, but without introducing an extra node to the DOM. After compilation, the fragment component does not make it to the DOM—only the children element do.

-[19] Setting Classes and Text Conditionally.
