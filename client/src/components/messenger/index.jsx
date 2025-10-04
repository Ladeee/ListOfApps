import { IoSettingsOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import './messenger.css';

export default function Messenger() {
  return (
    <div className='messenger-container'>
      <div className="settings-friends">
        <div className="settings-wrapper">
          <div className="messages">
            <MdMessage className="icon" />
          </div>
          <div className="new-chat">
            <BsChatText className="icon" />
          </div>
          <div className="settings">
            <IoSettingsOutline className="icon" />
          </div>

          <div className="foot-icon">
            <div className="log-out">
              <MdLogout className="icon" />
            </div>
          </div>
        </div>

        <div className="friends-wrapper">
          <h1>Trusty Messenger</h1>
          <div className="search">
            <div className="search-icon">
              <IoSearch className="search-icon" />
            </div>
            <input type="text" className="search-input" />
          </div>
        </div>
      </div>
      <div className="chats-wrapper">

      </div>
    </div>
  )
}
