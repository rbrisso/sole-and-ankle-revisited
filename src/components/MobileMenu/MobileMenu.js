/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { BREAKPOINTS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label={'menu'}>
        <Filler />
        <Close onClick={onDismiss}>
          <Icon id='close'  />
        </Close>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  display: none;
  @media ( max-width: ${BREAKPOINTS.tabletMax / 16}rem ){
      display: flex;
      justify-content: flex-end;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: hsl(220, 5%, 40%, 0.8);
    }
`

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 75%;
  padding: 32px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-size: ${ 18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  color: var(--color-gray-700);
`

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${ 14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
`

const Close = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 24px;
  height: 24px;
`
const Filler = styled.div`
  flex: 1;
`;
export default MobileMenu;
