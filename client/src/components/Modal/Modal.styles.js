import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  align-items: center;
  z-index: 1;
`;

export const Image = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 350px;
  }

  @media screen and (max-width: 374px) {
    width: 120px;
    height: 160px;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  width: 960px;
  height: 450px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255, 0.9);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: row;
  padding: 25px;

  @media screen and (max-width: 768px) {
    width: 600px;
    height: 400px;
  }

  @media screen and (max-width: 374px) {
    width: 300px;
    height: 200px;
  }
`;

export const Text = styled.div`
  padding-left: 20px;
  h3 {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1rem;
    }

    @media only screen and (max-width: 374px) {
      h1 {
        font-size: 1rem;
      }
      h2 {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 0.7rem;
      }
    }
  }
`;
