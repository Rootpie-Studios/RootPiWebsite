import React, { useState, useEffect } from "react";
import StoryTimeHeader from "../Components/StoryTimeHeader";
import Footer from "../Components/Footer";
import CreateYourOwnStory from "../images/CreateYourOwnStory.png";
import Button from "../Components/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function GenerateStoryPage() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState([]);
  const [error, setError] = useState("");
  const [showStory, setShowStory] = useState(false);
  const [value, setValue] = useState(3);
  const [review, setReview] = useState("");

  const handleReview = (e) => {
    e.preventDefault();
    console.log("Review");
    var data = {
      review: review,
      rating: value,
    };
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setLoading(true);
    setProgress(0);

    var name = e.target[0].value;
    var story = e.target[1].value;

    var data = {
      prompt:
        "Skriv en berättelse, huvudkaraktären heter " +
        name +
        " och berättelsen handlar om " +
        story,
    };

    console.log(
      "Requesting from: " + process.env.REACT_APP_BACKEND_URL + "/generera-saga"
    );
    fetch(process.env.REACT_APP_BACKEND_URL + "/generera-saga", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        setLoading(false);
      })
      .then((responseJson) => {
        console.log(responseJson);
        var newstory = responseJson["story"].split(/\r?\n/);
        if (responseJson["finish_reason"] === "stop") {
          setLoading(false);
          setStory(newstory);
          setShowStory(true);
        } else if (responseJson["finish_reason"] == null) {
          setLoading(false);
          setStory(newstory);
          setShowStory(true);
          setError("Vår AI kunde inte skriva hela din saga.");
        } else {
          setLoading(false);
          if (responseJson["finish_reason"] === "content_filter") {
            setError(
              "Vår AI har inte kunnat skapa en saga som följer vår policy."
            );
          } else {
            setError("Något gick fel, försök igen senare.");
          }
        }
      });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 4;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App-storytime">
      <StoryTimeHeader subtitle={<h1>Sagor</h1>} textColor="white" />
      {error !== "" && <h3 style={{ color: "white" }}>{error}</h3>}
      {!showStory ? (
        <div className="grid-container2">
          <div>
            <h1 style={{ color: "white" }}>Skapa din egen saga</h1>
            <h3 style={{ color: "white" }}>
              Genom några enkla frågor kan vi med hjälp av den senaste AI
              tekniken skapa din personliga saga
            </h3>
            <br />
            <form onSubmit={handleSubmit}>
              <h3 style={{ color: "white" }}>Vad heter huvudkaraktären?</h3>
              <input
                style={{
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  color: "rgba(255,255,255, 1)",
                  fontFamily: "QuickSand",
                }}
                type="text"
                maxLength={30}
              />
              <br />
              <br />
              <br />
              <h3 style={{ color: "white" }}>
                Skriv vad du vill att din saga ska handla om.
              </h3>
              <p style={{ color: "white" }}>
                Exempel: En ung prinsessa som ger sig ut på ett farligt äventyr
                för att rädda sin kungadöme från en ond häxa.
              </p>
              <br />
              <textarea
                style={{
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  color: "rgba(255,255,255, 1)",
                  fontFamily: "QuickSand",
                }}
                maxLength={400}
              />
              <br />
              <br />
              <br />
              {loading && (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
              )}
              <div className="center-content">
                <Button
                  color="rgba(0, 255, 0, 0.2)"
                  label="Generera din saga"
                />
              </div>
            </form>
          </div>
          <img
            className="home-title-image-container home-rounded-image"
            style={{ marginLeft: "20%", marginTop: "10%" }}
            src={CreateYourOwnStory}
            alt=""
          />
        </div>
      ) : (
        <div style={{ padding: "0px 300px" }}>
          <h1 style={{ color: "white" }}>Din saga</h1>
          <br />
          {story.map(function (object, i) {
            return (
              <h3 style={{ color: "white" }} key={i}>
                {object}
              </h3>
            );
          })}
          <br />
          <div className="center-content">
            <Button
              color="rgba(0, 255, 0, 0.2)"
              label="Få bilder och ljud till din saga för endast 35kr"
            />
          </div>
          <br />
          <div className="center-content">
            <p style={{ color: "white" }}>
              Vi skulle uppskatta dina kommentarer på sagan som vi genererat åt
              dig
            </p>
          </div>
          <form onSubmit={handleReview}>
            <div className="center-content">
              <Rating
                size="large"
                precision={0.5}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="center-content">
              <textarea
                style={{
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  color: "rgba(255,255,255, 1)",
                  fontFamily: "QuickSand",
                }}
                onChange={(event) => {
                  setReview(event.target.value);
                }}
                maxLength={400}
              />
            </div>
            <div className="center-content">
              <Button color="rgba(0, 255, 0, 0.2)" label="Lämna omdöme" />
            </div>
          </form>
        </div>
      )}
      <Footer textColor="white" />
    </div>
  );
}

export default GenerateStoryPage;
