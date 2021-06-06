import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: ${props => props.theme.colors.background};
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: filter 0.25s ease-in;
  &:hover {
    filter: invert(1);
  }
`;

export default Link;
