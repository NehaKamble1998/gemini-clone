import { useContext } from "react";
import { assets } from "../../assets/assets/assets";
import "./MainComponent.css";
import { Context } from "../../context/Context";

const MainComponent = () => {
  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      onSend();
    }
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src="src\assets\assets\user-iconn.jpg"
          alt=""
          className="user-icon"
        />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Neha</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to visit on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize the Indian Politics system</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Who are the most successful sportsman in India</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest games to play for team building activities</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="src\assets\assets\user-iconn.jpg" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box" onKeyDown={handleEnterPress}>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input && (
                <img src={assets.send_icon} onClick={() => onSend()} alt="" />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
