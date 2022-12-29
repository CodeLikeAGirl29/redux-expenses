# Expense Tracker

A budgeting tool that demonstrates use of [Redux-toolkit](https://redux-toolkit.js.org/)

> Link to the demo site can be found [here](https://expenses-redux.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d54540d6-9c7b-48fb-93f7-d73a76741e0f/deploy-status)](https://app.netlify.com/sites/expenses-redux/deploys)

## Tech Stack

![redux](https://camo.githubusercontent.com/3a2650b6854cb790e3af41a1cefa87df32efc07aad12d0c0f128a7fbc5998ac3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526564757826636f6c6f723d373634414243266c6f676f3d5265647578266c6f676f436f6c6f723d464646464646266c6162656c3d)

![react](https://camo.githubusercontent.com/67a01fa7cf337616274f39c070a11638f2e65720e414ef55b8dd3f9c2a803b2a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d)

## Installation

_Implement use of redux-toolkit._

- Install ```@reduxjs/redux-toolkit```
```npm install @reduxjs/redux-toolkit```
Some of the resources imported from ```@reduxjs/redux-toolkit``` are:

- ```createSlice```
- ```configureStore```

### createSlice() Options Object
```
/*
The action.type strings created will be
'budgets/editBudget' and 'budgets/newBudgets'
*/
const options = {
  name: 'budgets',
  initialState: [],
  reducers: {
    editBudget: state => [],
    newBudgets: (state, action) 
      => [...state, action.payload]
  }
}
const todosSlice = createSlice(options);
```

The ```createSlice()``` function is used to simplify and reduce the code needed when creating application slices. It takes an object of options as an argument. The options are:

- ***name***: the slice name used as the prefix of the generated action.type strings
- ***initialState***: the initial value for the state to be used by the reducer
- ***reducers***: an object of action names and their corresponding case reducers


### Slices with createSlice()

```createSlice()``` returns an object containing a slice reducer (```budgetsSlice.reducer```) and corresponding auto-generated action creators (```transactionsSlice.actions```).

The slice reducer is generated from the case reducers provided by options.reducers.
The action creators are automatically generated and named for each case reducer. The ```action.type``` values they return are a combination of the slice name ('```budgets```') and the action name ('newBudgets') separated by a forward slash (```budgets/newBudgets```).
When creating slices in separate files it is recommended to export the action creators as named exports and the reducer as a default export.

## Screenshot:

![screenshot](https://res.cloudinary.com/codelikeagirl29/image/upload/v1672305439/projects/expenses-redux_v334y5.png)

Based on a Codecademy [project](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-redux/modules/wdcp-22-refactoring-with-redux-toolkit-0c4bcc8a-00fd-46da-b307-24609df68b34/projects/redux-expense-tracker)