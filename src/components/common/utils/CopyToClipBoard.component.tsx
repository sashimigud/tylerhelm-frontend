import React, { FC, useEffect, useState } from 'react';
import './copyToClipboard.styles.scss';

interface ICopyToClipboardProps {
  textToCopy: string;
  isWalletAddress?: boolean;
}

const CopyToClipboard: FC<ICopyToClipboardProps> = ({
  textToCopy,
  isWalletAddress,
}: ICopyToClipboardProps) => {
  const [showCopied, setShowCopied] = useState<boolean>(false);

  let timer: null | ReturnType<typeof setTimeout> = null;

  useEffect(() => {
    if (showCopied) {
      setTimer(600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCopied]);

  function setTimer(delay) {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setShowCopied(false);
      timer = null;
    }, delay);
  }

  function copyToClipboard(textToCopy: string): void {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy);
      setShowCopied(true);
    } else return;
  }

  function truncateWalletAddress(address: string): string {
    if (address.length > 12) {
      return (
        address.substring(0, 7) +
        '...' +
        address.substring(address.length - 4, address.length)
      );
    } else {
      return address;
    }
  }

  return (
    <div
      className="copy-to-clipboard-container"
      onClick={() => copyToClipboard(textToCopy)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 24 24"
        width="18">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
      <p className="copy-text">
        {isWalletAddress ? truncateWalletAddress(textToCopy) : textToCopy}
      </p>
      {showCopied && <span className="copiedChip">Copied!</span>}
    </div>
  );
};

export default CopyToClipboard;
