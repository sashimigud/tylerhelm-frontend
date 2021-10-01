import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();

const initialState = {
  darkMode: false,
  retroMode: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleDarkMode':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case 'toggleRetro':
      return {
        ...state,
        retroMode: !state.retroMode,
      };
    case 'setRetro':
      return {
        ...state,
        retroMode: true,
      };
    case 'setBoring':
      return {
        ...state,
        retroMode: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
