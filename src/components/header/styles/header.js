import styled from 'styled-components';

export const Background = styled.div `
  background-image:url(${({img})=> img});
  display:flex;
  flex-direction:column;
  padding-bottom:70px;
  border-bottom: 8px solid #222;
  background-size:cover;
`;

export const Container = styled.div `
  background-color: transparent;
  color:#fff;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  z-index: 10;
`;

export const Button = styled.button `
  background-color: #e50914;
  line-height: normal;
  margin-right:3.5rem;
  padding: 6px 17px;
  font-weight: 400;
  font-size: 1rem;
  float: right;
  color:#fff;
  border:0px;
  border-radius: 3px;
  margin-top: .5rem;
`;
export const Logo = styled.img `
  height: 36px;
  width: 134px;
  margin-left:3.5rem;
  padding-top: .5rem;
  background-color: initial;
  filter: saturate(1.3);
`;
export const Text = styled.div `
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  font-size: 1.50rem;
  font-weight: 400;
  h1 {
    padding-top:55px;
    margin:0 auto;
    max-width:60%
  }
  p {
    margin: 1rem auto 0px;
  }
`;