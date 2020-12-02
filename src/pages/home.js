import React from "react";
import { JumbotronContainer } from '../containers/jumbotron';
import { FAQsContainer } from '../containers/FAQs';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
        <HeaderContainer />
        <JumbotronContainer />
        <FAQsContainer />
    </>
  );
}