import React, { FC } from 'react';
import './retroNft.styles.scss';

import Nfts from '../../common/nfts/Nfts.component';
import NftsRetroGifs from './nftsRetroGifs/NftsRetroGifs.component';

const RetroNft: FC = () => {
  return (
    <div className="retro-nfts-container">
      <NftsRetroGifs />
      <Nfts />
    </div>
  );
};

export default RetroNft;
