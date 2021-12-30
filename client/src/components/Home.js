import React from "react";
import Grid from "./Grid";
import Header from "./Header";
import Thumbnail from "./Thumbnail";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import noImage from "../image/question-mark.png";
import Modal from "./Modal";

const Home = () => {
  const [records, setRecords] = useState([]);
  const [dataLoaded, setDataIsLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState();

  // handling API call to get data and then insert to database
  const handleApiCall = async (key) => {
    await axios
      .get("http://localhost:3500/getData", {
        params: {
          num: key,
        },
      })
      .then((response) => {
        if (!response.data) {
          console.error("No data FOUND");
          return;
        }
        setRecords(response.data);
        setDataIsLoaded(true);
        insertToDB(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // calls addRecords function to insert data to database
  const insertToDB = (data) => {
    data.Search.map((item) =>
      addRecords(item.imdbID, item.Title, item.Year, item.Type, item.Poster)
    );
  };
  //adding records to database
  const addRecords = async (id, title, year, type, poster) => {
    if (poster === "N/A") {
      poster = null;
    }
    await axios.post("http://localhost:3500/create", {
      imdbID: id,
      Title: title,
      Year: year,
      Type: type,
      Poster: poster,
    });
  };

  return (
    <div>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          chosenItem={chosenItem}
          modalOpen={modalOpen}
        />
      )}
      <Header>
        <ButtonGroup
          color='inherit'
          variant='text'
          size='large'
          style={{ color: "black", fontFamily: "Arial", FontSize: "12px" }}
        >
          <Button data-cy='btn-1' onClick={() => handleApiCall(1)}>
            One
          </Button>
          <Button data-cy='btn-2' onClick={() => handleApiCall(2)}>
            Two
          </Button>
          <Button data-cy='btn-3' onClick={() => handleApiCall(3)}>
            Three
          </Button>
        </ButtonGroup>
      </Header>
      <Grid>
        {!dataLoaded
          ? "Please load some data...."
          : records.Search.map((item, idx) => (
              <Thumbnail
                key={idx}
                image={item.Poster === "N/A" ? noImage : item.Poster}
                title={item.Title}
                setChosenItem={setChosenItem}
                item={item}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
              ></Thumbnail>
            ))}
      </Grid>
    </div>
  );
};

export default Home;
