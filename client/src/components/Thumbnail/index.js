import React from "react";

// Styles
import { Image, Wrapper } from "./Thumbnail.styles";

const Thumbnail = ({ image, title, item, setChosenItem, setModalOpen }) => {
  const handleClick = () => {
    setChosenItem(item);
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <div onClick={() => handleClick(item)}>
        <Image src={image} alt='movie-thumb' data-cy={title} />
        <h3>{title}</h3>
      </div>
    </Wrapper>
  );
};

export default Thumbnail;
