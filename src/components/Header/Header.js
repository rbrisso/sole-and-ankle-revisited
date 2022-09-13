import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <NavIcons>
          <Icon id={'shopping-bag'} />
          <Icon id={'search'} />
          <Icon id={'menu'} onClick={() => setShowMobileMenu(true)} />
        </NavIcons>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ( max-width: ${BREAKPOINTS.tabletMax / 16}rem ){
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
    padding-left: clamp(1rem, calc(4.5vw - 0.25rem),2rem);
    padding-right: clamp(1rem, calc(4.5vw - 0.25rem),2rem);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp( 1rem, calc(7vw - 3rem), 3rem );
  margin: 0px 48px;
  @media ( max-width: ${BREAKPOINTS.tabletMax / 16}rem ){
    display: none;
  }
`;

const NavIcons = styled.div`
  display: none;

  @media ( max-width: ${BREAKPOINTS.tabletMax / 16}rem ){
    display: flex;
    gap: clamp(1.5rem , calc(4.5vw - 0.25rem) , 2.5rem);
  }

`

const Side = styled.div`
  flex: 1;

  &:first-child {
    @media ( max-width: ${BREAKPOINTS.tabletMax / 16}rem ){
      flex: revert;
    }
  }
  &:last-child {
    @media ( max-width: ${BREAKPOINTS.tabletMax / 16}rem ){
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
