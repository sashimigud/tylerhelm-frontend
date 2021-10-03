import React, { FC } from 'react';
import './nfts.styles.scss';

const Nfts: FC = () => {
  return (
    <div className="nfts-container">
      <h2>Chains:</h2>
      <h3>Etherium</h3>
      <h3>Algorand</h3>
      <h3>Polygon/Matic</h3>
      <h3>Tezos</h3>
      <h3>Harmoney One</h3>
    </div>
  );
};

export default Nfts;
