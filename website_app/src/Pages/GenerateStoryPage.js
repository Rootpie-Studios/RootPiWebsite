import React, { useState, useEffect } from "react";
import StoryTimeHeader from "../Components/StoryTimeHeader";
import Footer from "../Components/Footer";
import CreateYourOwnStory from "../images/CreateYourOwnStory.png";
import Button from "../Components/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import privacy_policy from "./privacy_policy.md";
import ReactMarkdown from "react-markdown";

function GenerateStoryPage() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState([]);
  const [error, setError] = useState("");
  const [showStory, setShowStory] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [value, setValue] = useState(3);
  const [review, setReview] = useState("");
  const [buySaga, setBuySaga] = useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [consent, setConsent] = useState(false);
  const [email, setEmail] = useState("");
  const [prompt, setPromt] = useState("");

  let [privacyPolicy, setPrivacyPolicy] = useState({ md: "" });
  useEffect(() => {
    fetch(privacy_policy)
      .then((res) => res.text())
      .then((md) => {
        setPrivacyPolicy({ md });
      });
  }, []);

  const handleDialogOpen = () => {
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    console.log("Purchase");
    var data = {
      email: email,
      story: story,
      prompt: prompt,
    };

    fetch(process.env.REACT_APP_BACKEND_URL + "/spara-saga", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((_) => console.log("thank you"));
  };

  const handleReview = (e) => {
    e.preventDefault();
    console.log("Review");
    var data = {
      review: review,
      rating: value,
    };

    console.log(data);

    fetch(process.env.REACT_APP_BACKEND_URL + "/leave-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((_) => setReviewed(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setLoading(true);
    setProgress(0);

    var name = e.target[0].value;
    var story = e.target[1].value;

    setPromt(
      "Skriv f??rsta kapitlet av en barnbok, huvudkarakt??ren heter " +
        name +
        " och ber??ttelsen handlar om " +
        story
    );

    var data = {
      prompt:
        "Skriv f??rsta kapitlet av en barnbok, huvudkarakt??ren heter " +
        name +
        " och ber??ttelsen handlar om " +
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
        } else {
          setLoading(false);
          if (responseJson["finish_reason"] === "content_filter") {
            setError(
              "V??r AI har inte kunnat skapa en saga som f??ljer v??r policy."
            );
          } else {
            setError("N??got gick fel, f??rs??k igen senare.");
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
              Genom n??gra enkla fr??gor kan vi med hj??lp av den senaste AI
              tekniken skapa din personliga saga
            </h3>
            <br />
            <form onSubmit={handleSubmit}>
              <h3 style={{ color: "white" }}>Vad heter huvudkarakt??ren?</h3>
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
                Exempel: En ung prinsessa som ger sig ut p?? ett farligt ??ventyr
                f??r att r??dda sin kungad??me fr??n en ond h??xa.
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
          {!buySaga ? (
            <div>
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
                  onClick={() => setBuySaga(true)}
                  color="rgba(0, 255, 0, 0.2)"
                  label="F??r endast 99kr f??r du hela sagan med bilder och ljud"
                />
              </div>
              <br />
              {!reviewed ? (
                <div>
                  <div className="center-content">
                    <p style={{ color: "white" }}>
                      Vi skulle uppskatta dina kommentarer p?? sagan som vi
                      genererat ??t dig
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
                      <Button
                        color="rgba(0, 255, 0, 0.2)"
                        label="L??mna omd??me"
                      />
                    </div>
                  </form>
                </div>
              ) : (
                <div className="center-content">
                  <h1 style={{ color: "white" }}>Tack f??r din feedback!</h1>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 style={{ color: "white" }}>
                Vi skriver genererar klart din saga och skickar den till dig
                direkt den ??r klar.
              </h2>
              <h3 style={{ color: "white" }}>
                Vi levererar den som en PDF och ljudfil, i PDF:en f??r du din
                saga tillsammans med fina unika bilder till din saga. I
                ljudfilen s?? f??r du en ber??ttarr??st och unika r??ster f??r alla
                karakt??rer i sagan.
              </h3>
              <br />
              <p style={{ color: "white" }}>
                Ange email, anv??nds f??r att leverera din saga
              </p>
              <br />
              <input
                style={{
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  color: "rgba(255,255,255, 1)",
                  fontFamily: "QuickSand",
                }}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                maxLength={30}
              />
              <br />
              <br />
              <br />
              <input
                onChange={(e) => setConsent(e.target.checked)}
                type="checkbox"
                id="privacy_policy"
                name="privacy_policy"
              />
              <label
                for="privacy_policy"
                style={{ color: "white", marginLeft: "10px" }}
              >
                L??s igenom och acceptera v??r{" "}
                <Button
                  onClick={handleDialogOpen}
                  color="rgba(0, 255, 0, 0.2)"
                  label="Integritetspolicy"
                />
              </label>
              <br />
              <br />
              <div>
                <Button
                  onClick={handlePurchase}
                  color={
                    !consent || email === ""
                      ? "rgba(0, 255, 0, 0.1)"
                      : "rgba(0, 255, 0, 0.2)"
                  }
                  textColor={
                    !consent || email === ""
                      ? "rgba(255,255,255, 0.5)"
                      : "white"
                  }
                  label="Slutf??r k??p - 99kr"
                />
              </div>
            </div>
          )}
        </div>
      )}
      <Footer textColor="white" />
      <Dialog
        open={dialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Integritetspolicy"}</DialogTitle>
        <DialogContent>
          <ReactMarkdown children={privacyPolicy.md} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GenerateStoryPage;
