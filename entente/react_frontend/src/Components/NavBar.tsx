import React from 'react';
import './NavBar.css';

type UserObject = {
  username: string;
  user_id: number;
  display_name: string;
}

type NavBarProps = {
  isAuthenticated: boolean;
  user: UserObject;
  logout: () => void;
  openLoginModal: () => void;
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav>
      {
        props.isAuthenticated ?
        (<span onClick={props.logout}>Logout</span>) :
        (<span onClick={props.openLoginModal}>Login</span>)
      }
        {props.user.username ? (<span> | </span>) : '' }
        {props.user.username ? (<span>{props.user.username}</span>) : '' }

    </nav>
  );
};
