import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();

const initialState = {
  darkMode: false,
  isRetroMode: null,
  isFlyoutOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleDarkMode':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case 'toggleShowFlyout':
      return {
        ...state,
        isFlyoutOpen: !state.isFlyoutOpen,
      };
    case 'toggleRetro':
      return {
        ...state,
        isRetroMode: !state.isRetroMode,
      };
    case 'setRetro':
      return {
        ...state,
        isRetroMode: true,
      };
    case 'setBoring':
      return {
        ...state,
        isRetroMode: false,
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
