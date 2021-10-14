import React, { FC, useState } from 'react';
import { CRYPTO_HEADERS } from '../../../_constants/cryptoHeaders';
import { WALLET_ADDRESS } from '../../../_constants/walletAddresses';
import './nfts.styles.scss';

import CopyToClipboard from '../utils/CopyToClipBoard.component';

const Nfts: FC = () => {
  const [activeCryptoHeader, setActiveCryptoHeader] =
    useState<CRYPTO_HEADERS | null>(null);

  function setActiveHeader(cryptoHeader: CRYPTO_HEADERS) {
    if (cryptoHeader === activeCryptoHeader) {
      setActiveCryptoHeader(null);
    } else {
      setActiveCryptoHeader(cryptoHeader);
    }
  }

  return (
    <div className="nfts-container">
      <h2>Chains:</h2>
      <div className="crypto-instance">
        <div
          className={
            'crypto-header ' +
            (activeCryptoHeader === CRYPTO_HEADERS.ETH ? 'active-header' : '')
          }
          onClick={() => setActiveHeader(CRYPTO_HEADERS.ETH)}>
          <div className="crypto-logo etherium"></div>
          <h3>Etherium</h3>
        </div>
        {activeCryptoHeader === CRYPTO_HEADERS.ETH && (
          <div className="crypto-links-container">
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.ETH}
              isWalletAddress={true}
            />
            <ul>
              <li>
                <a
                  href="https://rarible.com/tylerhelm"
                  target="_blank"
                  rel="noopener noreferrer">
                  Rarible
                </a>
              </li>
              <li>
                <a
                  href="https://opensea.io/tylerhelm"
                  target="_blank"
                  rel="noopener noreferrer">
                  OpenSea
                </a>
                (none listed)
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="crypto-instance">
        <div
          className={
            'crypto-header ' +
            (activeCryptoHeader === CRYPTO_HEADERS.ALGO ? 'active-header' : '')
          }
          onClick={() => setActiveHeader(CRYPTO_HEADERS.ALGO)}>
          <div className="crypto-logo algo"></div>
          <h3>Algorand</h3>
        </div>
        {activeCryptoHeader === CRYPTO_HEADERS.ALGO && (
          <div className="crypto-links-container">
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.ALGO}
              isWalletAddress={true}
            />
            <ul>
              <li>
                <a
                  href="https://ab2.gallery/address/MYOVACPA5DZFAJIZH3IQV6GNRH7DSJBV7KYDDODPZHKH7L4VB756T6KI6A"
                  target="_blank"
                  rel="noopener noreferrer">
                  AB2 Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://www.algogems.io/gallery/tylerhelm"
                  target="_blank"
                  rel="noopener noreferrer">
                  Algogems
                </a>
                (sporadic auctions)
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="crypto-instance">
        <div
          className={
            'crypto-header ' +
            (activeCryptoHeader === CRYPTO_HEADERS.MATIC ? 'active-header' : '')
          }
          onClick={() => setActiveHeader(CRYPTO_HEADERS.MATIC)}>
          <div className="crypto-logo polygon"></div>
          <h3>Polygon/Matic</h3>
        </div>
        {activeCryptoHeader === CRYPTO_HEADERS.MATIC && (
          <div className="crypto-links-container">
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.MATIC}
              isWalletAddress={true}
            />
            <ul>
              <li>
                <a
                  href="https://opensea.io/tylerhelm"
                  target="_blank"
                  rel="noopener noreferrer">
                  opensea (matic)
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="crypto-instance">
        <div
          className={
            'crypto-header ' +
            (activeCryptoHeader === CRYPTO_HEADERS.TEZOS ? 'active-header' : '')
          }
          onClick={() => setActiveHeader(CRYPTO_HEADERS.TEZOS)}>
          <div className="crypto-logo tezos"></div>
          <h3>Tezos</h3>
        </div>
        {activeCryptoHeader === CRYPTO_HEADERS.TEZOS && (
          <div className="crypto-links-container">
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.TEZOS}
              isWalletAddress={true}
            />
            <ul>
              <li>
                <a
                  href="https://kalamint.io/user/tylerhelm"
                  target="_blank"
                  rel="noopener noreferrer">
                  Kalamint (!)
                </a>
              </li>
              <li>
                <a
                  href="https://www.hicetnunc.xyz/tylerhelm"
                  target="_blank"
                  rel="noopener noreferrer">
                  hic et nunc
                </a>
              </li>
              <li>
                <a
                  href="https://byteblock.art/collections/KT1CKycpL2MFX98kcisgrruYUvYqwQg3cmJx"
                  target="_blank"
                  rel="noopener noreferrer">
                  Byteblock collection
                </a>
              </li>
              <li>
                <a
                  href="https://objkt.com/profile/tz1W331jqP7ahn938oAcokknRUZiQhwtXQWM/creations"
                  target="_blank"
                  rel="noopener noreferrer">
                  objkt.com
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="crypto-instance">
        <div
          className={
            'crypto-header ' +
            (activeCryptoHeader === CRYPTO_HEADERS.HARMONY
              ? 'active-header'
              : '')
          }
          onClick={() => setActiveHeader(CRYPTO_HEADERS.HARMONY)}>
          <div className="crypto-logo harmoney"></div>
          <h3>Harmoney One</h3>
        </div>
        {activeCryptoHeader === CRYPTO_HEADERS.HARMONY && (
          <div className="crypto-links-container">
            <CopyToClipboard
              textToCopy={WALLET_ADDRESS.HARMONY}
              isWalletAddress={true}
            />
            <ul>
              <li>
                <a
                  href="https://davinci.gallery/profile/TylerHelm"
                  target="_blank"
                  rel="noopener noreferrer">
                  Davinci.Gallery
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nfts;
