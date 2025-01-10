import React from 'react';
import './NavBar.css';

export default function NavBar({ openLoginModal }: { openLoginModal: () => void }) {

  return (
    <nav>
      <span onClick={openLoginModal}>Login</span>

    </nav>
  );
};
