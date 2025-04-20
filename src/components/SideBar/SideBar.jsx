import "./SideBar.css";
import { assets } from "../../assets/assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const { onSend, prevPrompt, recentPrompt, newChat } = useContext(Context);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="side-bar-menu"
          className="menu"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {expanded && <p onClick={() => newChat()}>New Chat</p>}
        </div>
        {expanded && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item) => {
              return (
                <>
                  <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {expanded && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {expanded && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {expanded && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
