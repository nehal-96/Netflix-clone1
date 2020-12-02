import React from 'react';
import { Link as RouteLink} from 'react-router-dom';
import { Container, Logo, Button, Background, Text } from './styles/header';


export default function Header({img, children, ...restProps}){
  return (
    <Background img={img} {...restProps}>{children}</Background >
  );
}
Header.Container = function HeaderContainer({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
}
Header.Button = function HeaderBiutton({to, children}) {
  return (
    <RouteLink to={to}>
      <Button>{children}</Button>
    </RouteLink>
  );
}

Header.Logo = function HeaderLogo({to}) {
  return (
    <RouteLink to={to}>
      <Logo src='images/Netflix_2015_logo.svg' alt='logo' />
    </RouteLink>
  );
}
Header.Text = function HeaderText({children, ...restProps}) {
  return (
    <Text {...restProps}>
    <h1>Unlimited movies, TV shows, and more.</h1>
    <p>Watch anywhere. Cancel anytime.</p>
    {children}</Text>
  );
}
