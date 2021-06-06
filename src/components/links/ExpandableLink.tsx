import { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Link from './Link';

type ExpandableLinkProps = {
  label: string;
  height: number;
  children: React.ReactNode;
};

const ExpandableLinkContainer = styled.div`
  border-radius: 4px;
  background: #f5f7f8;
  color: ${props => props.theme.colors.text};
`;

const Content = styled(animated.div)`
  overflow: hidden;
`;

const ExpandableLink = (props: ExpandableLinkProps) => {
  const [showContent, setShowContent] = useState(false);

  const styles = useSpring(
    showContent
      ? { opacity: 1, height: `${props.height}px` }
      : { opacity: 0, height: '0px' }
  );

  return (
    <ExpandableLinkContainer>
      <Link as="button" onClick={() => setShowContent(!showContent)}>
        {props.label}
      </Link>
      <Content style={styles} aria-hidden={!showContent}>
        {props.children}
      </Content>
    </ExpandableLinkContainer>
  );
};

export default ExpandableLink;
