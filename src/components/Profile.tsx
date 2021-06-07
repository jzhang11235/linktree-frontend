import styled from 'styled-components';

type ProfileProps = {
  username: string;
};

const Container = styled.div`
  display: inline-block;
`;

const ProfileImagePlaceholder = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border-radius: 50%;
  background: #dadee0;
`;

const Username = styled.h1`
  margin: 8px 0 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
`;

const Profile = (props: ProfileProps) => {
  return (
    <Container>
      <ProfileImagePlaceholder />
      <Username>{props.username}</Username>
    </Container>
  );
};

export default Profile;
