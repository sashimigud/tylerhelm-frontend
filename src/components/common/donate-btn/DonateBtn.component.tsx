import React, { FC, useState } from 'react';
import './donateBtn.styles.scss';

import { WALLET_ADDRESS } from '../../../_constants/walletAddresses';

import CopyToClipboard from '../utils/CopyToClipBoard.component';

const DonateBtb: FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="donate-btn-container">
      <div className="hitbox" onClick={() => setShow(!show)}></div>
      {show ? (
        <div className="show-addresses">
          <p className="click-tooltip">click to copy address</p>
          <div className="chain-container">
            <span>Etherium</span>
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.ETH}
              isWalletAddress={true}
            />
          </div>
          <div className="chain-container">
            <span>Tezos</span>
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.TEZOS}
              isWalletAddress={true}
            />
          </div>
          <div className="chain-container">
            <span>Algorand</span>
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.ALGO}
              isWalletAddress={true}
            />
          </div>
          <div className="chain-container">
            <span>Polygon/Matic</span>
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.MATIC}
              isWalletAddress={true}
            />
          </div>
          <div className="chain-container">
            <span>Harmony One</span>
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.HARMONY}
              isWalletAddress={true}
            />
          </div>
        </div>
      ) : null}
      <img src="/assets/tossacoin.png" alt="" />
    </div>
  );
};

export default DonateBtb;
