import React from "react";
import { user1 } from "../../Images/images";

const ChatLeft = ({ title }) => {
  return (
    <div
      className="tab-pane fade show active"
      style={{ display: "block" }}
      //   id="mentors-pane"
      //   role="tabpanel"
      //   aria-labelledby="mentors-tab"
      //   tabIndex={0}
    >
      <div className="user-chat-area">
        <div className="user_chatlist">
          <div className="chatlist-bar">
            <div className="chatlist-inner">
              <div className="chatlist-header">
                <div className="chatlist-title">
                  <h2>{title}</h2>
                  <span>104 Unread</span>
                </div>
                <div className="chatlist-searchbar">
                  <div className="group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
              <div className="chatlist-body">
                <ul>
                  <li
                    className="active"
                    // id="leftChat"
                    // onClick={
                    //     () => {
                    //     $("#gtf_inner").addClass("chat_live");
                    //     $(".user_chatlist_blog")
                    //       .parent("li:first-child")
                    //       .addClass("active");
                    //   }
                    // }
                  >
                    <div
                      className="user_chatlist_blog"
                      data-gc_name="mentor_mentor"
                    >
                      <figure>
                        <img src={user1} alt="img" />
                        <span />
                      </figure>
                      <div className="user_chatlist_content">
                        <strong>Mentor</strong>
                        <p className="typng">Typng...</p>
                        <div className="massage-time">
                          <span>04</span>
                          Sep 3 at 02:48 pm
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <li id="leftChat"
                    onClick={
                        () => {
                        $("#gtf_inner").addClass("chat_live");
                       
                      }
                    }
                  >
                    <div
                      className="user_chatlist_blog"
                      data-gc_name="mentor_individual"
                    >
                      <figure>
                        <img src={user2} alt="img" />
                        <span className="live" />
                      </figure>
                      <div className="user_chatlist_content">
                        <strong>Individual User</strong>
                        <p className="draft">
                          <span>Draft</span> - User logged in
                        </p>
                        <div className="massage-time">10:25 Am</div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLeft;
