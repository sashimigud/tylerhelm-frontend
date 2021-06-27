import React from 'react';

import { StoreProvider } from './utils/globalStore';
import Container from './components/common/container/Container.component';

function App() {
  return (
    <StoreProvider>
      <Container />
    </StoreProvider>
  );
}

export default App;
