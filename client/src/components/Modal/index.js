import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import noImage from "../../image/question-mark.png";
import { Wrapper, Content, Image, Text } from "./Modal.styles";

const Modal = ({ setModalOpen, chosenItem }) => {
  return (
    <Wrapper
      onClick={() => {
        setModalOpen(false);
      }}
    >
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image
          src={chosenItem.Poster === "N/A" ? noImage : chosenItem.Poster}
        />

        <Text>
          <h1>{chosenItem.Title} </h1>
          <h2>{chosenItem.Year}</h2>
          <h3>
            {chosenItem.Type[0].toUpperCase() + chosenItem.Type.substring(1)}
          </h3>
        </Text>
        <CloseIcon
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          data-cy='modal-close'
          onClick={() => {
            setModalOpen(false);
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Modal;
