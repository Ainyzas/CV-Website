import React from 'react';
import { StyledContactArticle } from './Contact.styled';

export default function ContactOption({ icon, name, address, link }) {
  return (
    <StyledContactArticle>
      <span>{icon}</span>
      <h4>{name}</h4>
      <h5>{address}</h5>
      <a href={link} target="_blank" rel="noreferrer">
        Send Me A Message
      </a>
    </StyledContactArticle>
  );
}
