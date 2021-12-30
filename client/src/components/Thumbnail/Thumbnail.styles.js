import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;

  h3 {
    cursor: pointer;
    :hover {
      opacity: 0.75;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 335px;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
