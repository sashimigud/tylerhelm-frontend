import React from 'react';

import { StoreProvider } from './utils/globalStore';
import Home from './components/home/Home.component';

function App() {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}

export default App;
