import React from 'react';
import './NavBar.css';

type UserObject = {
  username: string;
  user_id: number;
  display_name: string;
}
const logout = (): void => console.log('logout')
export default function NavBar({ isAuthenticated, user, openLoginModal }: { isAuthenticated: boolean, user: UserObject, openLoginModal: () => void }) {

  return (
    <nav>
      {isAuthenticated ? (<span onClick={logout}>Logout</span>)
        : (<span onClick={openLoginModal}>Login</span>)}
        {user ? (<span> | </span>): '' }
        {user ? (<span>{user.username}</span>) : '' }

    </nav>
  );
};
