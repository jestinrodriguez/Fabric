import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 125px;
  }

  :hover {
    opacity: 0.8;
  }
`;
