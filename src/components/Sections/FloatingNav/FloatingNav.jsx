import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineCode, AiOutlineMessage } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { StyledNav } from './FloatingNav.styled.js';

export default function FloatingNav() {
  const [active, setActive] = useState('#home');

  return (
    <StyledNav>
      <a
        href="#home"
        onClick={() => setActive('#home')}
        className={active === '#home' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActive('#skills')}
        className={active === '#skills' ? 'active' : ''}>
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive('#portfolio')}
        className={active === '#portfolio' ? 'active' : ''}>
        <AiOutlineCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}>
        <AiOutlineMessage />
      </a>
    </StyledNav>
  );
}
