import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            aria-label="app-icon"
            src={process.env.PUBLIC_URL + "/assets/app.png"}
            width="100px"
            height="100px"
            alt="app-icon"
          />
          <h3 style={{ marginLeft: "1rem" }}>minimylist</h3>
        </div>
      </header>
      <hr />
      <div
        id="description"
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          marginTop: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <h4>Your minimal productivity assistant!</h4>
        </div>
        <div>
          <h4>
            It's a Web Extension that you can use for keeping a tab on
            quick-notes and tasks at hand, <br />
            so yeah - a productivity assistant!
          </h4>
        </div>
        <div>
          <ul>
            <li>
              <h5>
                Notes
                <span role="img" aria-label="note">
                  📝
                </span>
              </h5>
            </li>
            <li>
              <h5>
                Tasks
                <span role="img" aria-label="tick">
                  ✅
                </span>
              </h5>
            </li>
            <li>
              <h5>
                Inspirational Quote of the Day
                <span role="img" aria-label="blessed">
                  😇
                </span>
              </h5>
            </li>
            <li>
              <h5>
                Dark mode{" "}
                <span role="img" aria-label="moon">
                  🌚{" "}
                </span>
                / Light mode{" "}
                <span role="img" aria-label="sun">
                  🌞
                </span>
              </h5>
            </li>
          </ul>
        </div>
        <img
          width="100%"
          style={{ padding: "0.5rem" }}
          src={process.env.PUBLIC_URL + "/assets/screenshots/AppSS.png"}
          alt="Light Mode Screenshot"
          app-icon="Light Mode Screenshot"
        />
      </div>

      <div style={{ margin: "1rem" }}>
        <h3>Download now</h3>
      </div>

      {/** Download section **/}
      <div
        style={{
          margin: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/waves.svg)`,
        }}
      >
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/minimylist/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/firefox.png"}
              alt="Firefox icon"
              app-icon="Firefox icon"
              style={{ height: "50px" }}
            />
            <h6 style={{ marginLeft: "0.5rem", fontSize: "16px" }}>
              Available as a <br />
              Firefox addon
            </h6>
          </div>
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/minimylist/kjopgffinilifnhhjflchcgcbfdjjpea"
          target="_blank"
          rel="noreferrer noopener"
          style={{ alignItems: "center", display: "flex" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/chrome.png"}
            style={{ marginLeft: "1rem", height: "70px" }}
            app-icon="Chrome icon"
            alt="Chrome icon"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
