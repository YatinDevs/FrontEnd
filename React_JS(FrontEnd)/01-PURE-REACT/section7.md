# State Management.

- [78] - Thinking in React .

  - To Build Professional React Apps . Necessary Things :

    - [1] - How to Work with React API.
    - [2] - Thinking in React .

  - Thinking about Components, State, Data Flow, Effects, etc.

  - Thinking in State Transitions, not Element mutations.

  - The Thinking In React Process :

    [1] Break the Desired UI into Components and Establish the Component tree.

    [2] Build a static version in React (without state).

---

          -- State Management --

    [3] Think about state :


    - when to use state
    - types of state : local vs global.
    - where to place each piece of state.

    - [4] Establish data flow :
      - One-way data flow.
      - Child - to Parent Communication
      - Accessing global state.

---

---

-- When you Know how to "Think in React",You will be able to Answer : --

- How to Break up a UI Design into Components?
- How to make Some components reusable?
- How to Assemble UI from Reusable Components?
- What pieces of State do i need for Interactivity?
- Where to Place State? (What component should "own" Each piece of state?).
- What types of state can or should i USe?
- How to make data flow through app?

---

======================================================================================================================================================

# State Management .

-- Deciding When to Create pieces of State, WHat types of state are necessary,Where to place each piece of state, And how data flows throught the app.

-- Giving Each Piece of State a Home.

[] Types of State : Local Vs Global State

[1] Local State :

- State needed only by one or few Components.
- State that is defined in a component and only that component and child
  child Components have access to it(By Passing Via props.)

[2] Global State :

- State that many components might need
- Shared state that is accessible to Every Component in the entire Application.
- Can be Defined using Reacts, Context API , and Redux.

======================================================================================================================================================

# When and where to create state?

-- When To Create State :

- [1] Consider You Need to store Data --> Will Data change at Some point ?

  [a] No Data Wont Change :

  - So,Regular Const Variable.

  [b] Yes Data Change And Can be Computed from Existing State/Props?

  - Then , We Derive State.

  - If Not Computed Should it Re-render Component ?

    - If No Ref(useRef,More on this Later.)
    - If Yes Place a new piece of State in Component.

-- Where To Place State :

- Place a new piece of State in Component.
  [1] - Only Used by this Component --Yes--> Leave in this Component.
  [2] - Also Used by a Child Component --Yes--> Pass to Child via Props.
  [3] - Used by one or a few Sibling Components?
  --Yes--> Lift State Up to First Common Parent.
  --No --> Probably Global State . Global State Management Later in the Course .

=================================================================================================================================================================

# - Continuing Far Away Project -- Travel List ---

Lifting up State

- If Two Siblings need Common state We Lift State Up.
- By Lifting State up, We have Sucessfully Shared one piece of state with multiple Components in different Positions in the Component tree.

Parent Component :
Checkout --> coupons ,setCoupons

Child Components :
Total ------ > Coupons
Promotions ----> Coupons

- If Data Flows From parent to childern , how can Promotions (child)
  update state in Checkout (parents)?

- Solution is Simple we pass coupons as props from checkout (parent):
- To Both Child Components
  Total ------ > Coupons
  Promotions ----> Coupons
- here we also pass setCoupons in Case of Promotions
  Total ------ > Coupons
  Promotions ----> Coupons,setCoupons
- setCoupons Updates coupons in Parent
- Inverse Data Flow is Done here :
- Child to Parent Communication : Child Updating Parent State(Data"Flowing" Up).

=================================================================================================================================================================

- Derived State.

=================================================================================================================================================================

- Lifting up State

- If
