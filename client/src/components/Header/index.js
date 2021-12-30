import React from "react";
import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <LogoImg
          onClick={() => window.location.reload()}
          src='/fabric.png'
          alt='fabric-logo'
        />
        {children}
      </Content>
    </Wrapper>
  );
};

export default Header;
