import { gql, useQuery } from '@apollo/client';
import logo from '@assets/logo.svg';
import { styled } from 'styled-components';

// 로컬 쿼리
const IS_LOGGED_IN = gql`
  query {
    isLoggedIn @client
  }
`;

const Header = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  console.log(data);

  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

export default Header;
