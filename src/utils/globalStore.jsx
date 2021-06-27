import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();

const initialState = {
  darkMode: false,
  retroMode: true
};

const reducer = (state, action) => {
  switch(action.type) {
    case "toggleDarkMode":
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case "toggleRetro":
      return {
        ...state,
        retroMode: !state.retroMode
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);