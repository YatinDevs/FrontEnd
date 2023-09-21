# ==============================================================================

# Section 6 : State, Events, and Forms : Interactive Components.

# ==============================================================================

- Topic :
  - Handling Events.
  - State to update the UI
  - Building Forms the "React Way".
  - Controlled Elements.

<!-- ------------ -->

- Created steps app.

- [1]. Handling Events React Way.

- [2]. What is State in React?

-- what we need to learn :

- State is most important concept in React.
- What React Developers Need to Learn About State :

1. What is State and Why Do we Need it?
2. How to use State in Practice?

- useState
- useReducer
- ContextAPI

3. Thinking about state

- when to use state
- where to place state
- types of state
<!------------------------------------------------------------------------------------>
- [3] Creating a State Variable with useState :

# What is State?

- State is Data that a component can hold over time , necessary for information that it needs to remember throughout the app's lifecycle.

- "Components Memory ".
- "State variable"/"piece of State" : A single variable in a component (component state).

- Updating component state triggers React to re-render the component.

- State helps to keep data and ui in sync.

----- State Allows Developers to:

1. Update the Components view (by re-rendering it)
2. Persist Local variable between renders

# State is a tool. Mastering state will unlock the power of React Developement.

- [3] Creating a State Variable with useState :

# steps to add state :

- 1. Defining variable Using useState function.

useState function --> takes default argument (1)

// useState function --> returns an Array
// Passed Default value as argument
// array contains : 1) default value 2) function (we can use to update state var).
const [step, setStep] = useState(1);
// console.log(arr);

- 2. Use State variable in JSX.

- 3. Update the state in Event Handler

<!--- More about creation of state variable ------>

- useState function is called hook in react.
- all the React function that starts with use keyword are React hooks.
- useEffect , useReducer.
- we can only call hooks in top level of function.

==============================================================================

- [4] Dont set State Manually.

  const [test, setTest] = useState({ name: "jonas" });
  function handleNext() {
  if (step < 3) {
  setStep(step + 1);
  }
  // bad practice
  // test.name = "fred"; // Mutating directly
  // setTest({ name: "fred" }); // using function
  }
  function handlePrevious() {
  if (step > 1) {
  setStep(step - 1);
  } // here we are updating use state function -> react is about immutability.
  // step = step - 1; --> here we are mutating step
  }

  ==============================================================================

- [5] The Mechanics of State.

- 1. We dont do direct DOM manipulations ---> Because React is Declarative.
- 2. How is a Component view updated then? ---> Answer : State.
- 3. In React, a view is updated by re-rendering the component --> Imp React Principle.

  - React calls the component function again.
  - Render/ Re-render --> Updated view
  - State is preserved throughtout re-render --> will not be reset.

- 4. A component is Re-rendered when its state is updated.
  - In View (there Event Handler)
  - Event Handler (task : update state).--> onClick
  - Event Updated State
  - On the Change of State ,i.e on Updated State --> Re-Render Occurs
  - We get Update View
- 5. So To Update a View We update state.

=============================================================================

# React is Called React Because..., React Reacts to State Changes by Re-Rendering The UI.

- [6] Adding Another Piece of State :
  - we added useState for close and opening the steps main container
  - we created useState with default true
  - Then we used function of use state to change state true to false
  - with onClick Event on Button and change isOpen = true to !isOpen
  - State is maintained Event when isOpen is Updated and Re-rendering occurs.

===================================================================================

- [7] React Developer Tools .

======================================================================================

- [8] Updating State Based on Current State

export default function App() {
// useState function --> returns an Array
// Passed Default value as argument
// array contains : 1) default value 2) function (we can use to update state var).
const [step, setStep] = useState(1);
// const [test, setTest] = useState({ name: "jonas" });
const [isOpen, setIsOpen] = useState(true);
function handleNext() {
// if (step < 3) {
// //We Should not update state based on Current state
// setStep(step + 1);
// setStep(step + 1);
// }
// Rather we Do : (use Call back)

    if (step < 3) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }

======================================================================================

- [9] Thoughts About State + State Guidelines :

- # One Component ,One State :

- 1. Each Component has and manages its own state, No matter how many times we render the same Component.

- 2. With State , we view UI as reflection of data changing over time.
- 3. We Describe that Reflection of data using state, event Handler and JSX.
- 4. UI As a Function of State.

=====================================================================================

# Practical Guidelines About State :

1. Use a state variable for any data that the component should keep track of
   ("remember") over time. This is data that will change at some point. In Vanilla
   JS thats a let variable or an [] or {}.
2. When Ever you want something in the component to be dynamic ,create a piece of state
   related to that "thing" ,and update the state when the "thing" should change.
   Example : A modal window can be open or close. So we create a state variable
   isOpen that tracks whether the modal is Open or not.
   On isOpen = true we display the window,
   On isOpen = false we hide it.
3. If you want to change the way a component looks, or the data it displays ,Update its state. This Usually happens in a event Handler function.
4. When Building a component ,Imagine its view as a reflection of state changing
   over time.
5. For data that should not trigger component re-renders,Dont use state.Use a regular variable instead. This is a common Beginner mistake.

=====================================================================================
