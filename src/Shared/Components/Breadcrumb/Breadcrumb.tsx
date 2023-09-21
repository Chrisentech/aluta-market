import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

interface BreadcrumbProps {
  items: Array<{ label: string; link?: string }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Container>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )} 
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Breadcrumb;

const Container = styled.nav`
  margin: 30px 0;
  color: #8b96a5;
  font-family: inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.2px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
  }
  ul li {
    &:not(:last-child) {
      &::after {
        content: '>';
        margin-left: 10px;
      }
      &:hover {
        color: #505050;
      }
    }
  }
`;