import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const Header = styled.header`
  font-size: 1em;
  color: white;
  padding: 15px 30px;
  text-align: right;
  width: 100vw;
  border-bottom: 1px solid #dc5f53;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AvatarImg = styled.img`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  border: 2px solid #dc5f53;
`;

const DivRight = styled.div`
  float: right;
  display: flex;
  justify-content: space-between;
`;

const SpanHighlight = styled.span`
  margin-left: 0.2em;
  margin-right: 1em;
  text-shadow: 2px 2px 0px #000000;
`;

const TwitterAvatar = ({ src, handle }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <AvatarImg src={src} />
    <SpanHighlight>{handle}</SpanHighlight>
  </div>
);

const Layout = ({ children }) => (
  <Fragment>
    <Header>
      <span>#TheRailsCampProject</span>
      <DivRight>
        <TwitterAvatar
          handle="@selenasmall88"
          src="./images/selena_small_twitter.jpg"
        />
        <TwitterAvatar
          handle="@saramic"
          src="./images/michael_milewski_twitter.jpg"
        />
      </DivRight>
    </Header>
    <Wrapper>{children}</Wrapper>
  </Fragment>
);

export default Layout;
