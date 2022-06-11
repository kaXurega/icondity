import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useToggleTheme } from './theme';
import '../layout/Header.scss';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const Buttons = () => {
  const toggleTheme = useToggleTheme();
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    toggleTheme();
    setDarkMode(!darkMode);
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // eslint-disable-next-line
  const { i18n } = useTranslation();
  const changeLang = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    i18n.changeLanguage(event.currentTarget.value);
    setIsOpen(false);
  };

  return (
    <div className="buttons">
      <button className="icon" aria-label="changeTheme" onClick={changeTheme}>
        {!darkMode ? <BsMoon size={22} /> : <BsSun size={22} />}
      </button>
      <button className="icon" aria-label="changeLanguage" onClick={() => setIsOpen(true)}>
        <FaGlobeAmericas size={22} />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName={{
          base: 'overlay-base',
          afterOpen: 'overlay-after',
          beforeClose: 'overlay-before'
        }}
        className={{
          base: 'content-base',
          afterOpen: 'content-after',
          beforeClose: 'content-before'
        }}
        closeTimeoutMS={200}
      >
        <h2 className="modal-title">Language</h2>
        <div className="modal-lang">
          <button className="lang" value="en" onClick={changeLang}>English</button>
          <button className="lang" value="ja" onClick={changeLang}>日本語</button>
          <button className="lang" value="ko" onClick={changeLang}>한국어</button>
        </div>
      </Modal>
      <button type="submit" className="connectWallet">Connect Wallet</button>
    </div>
  );
}

export default Buttons;