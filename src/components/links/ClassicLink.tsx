import styled from 'styled-components';

export type ClassicLinkProps = {
  label: string;
  to: string;
};

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background: ${props => props.theme.colors.background};
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colors.text};
  transition: filter 0.25s ease-in;
  &:hover {
    filter: invert(1);
  }
`;

const ClassicLink = (props: ClassicLinkProps) => {
  return <Link href={props.to}>{props.label}</Link>;
};

export default ClassicLink;
