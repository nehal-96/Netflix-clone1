import React from "react";
import {HomeBox} from '../components';
import { Header } from '../components';

export function HeaderContainer() {
  return (
    <Header img='/images/misc/home-bg.jpg'>
      <Header.Container>
        <Header.Logo to={'./'}/>
        <Header.Button to={'./signIn'}>Sign In
        </Header.Button>
      </Header.Container>
      <Header.Text>
      <HomeBox />
      </Header.Text>
    </Header>
);
}