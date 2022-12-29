import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment"
];
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const newTransactionsForCategory = [
        ...state[action.payload.category].slice(),
        action.payload
      ];
      return {
        ...state,
        [action.payload.category]: newTransactionsForCategory
      };
    },
    deleteTransaction: (state, action) => {
      const newTransactionsForCategory = state[action.payload.category].filter(
        (trans) => trans.id !== action.payload.id
      );

      return {
        ...state,
        [action.payload.category]: newTransactionsForCategory
      };
    }
  }
});

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
