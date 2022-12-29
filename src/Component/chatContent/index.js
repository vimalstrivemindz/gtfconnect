import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputEmoji from "react-input-emoji";
import {
  administrator,
  blocklist,
  channel,
  checkUn,
  deletes,
  discussion,
  group2,
  group3,
  group4,
  group5,
  group6,
  images1,
  images2,
  images3,
  manipulate,
  permission,
  quoteimg,
  quoteimgGreen,
  reactions,
  sign,
  sss,
  subscribers,
  user1,
  Weblogo,
  zipIcon,
  closeGreen,
  closeModel,
  downloading,
  images5,
  pinImg,
  user2,
} from "../../Images/images";
import ChatboxInner from "./ChatboxInner";
// import { socket } from "../../store/SocketIo";
const ChatContent = () => {
  // console.log("socket",socket)
  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const ShowProfile = () => {
    let getSettingId = document.getElementById("gtf_inner");
    let showProfile = document.getElementById("showProfile");
    getSettingId.classList.add("width_calc");
    showProfile.classList.add("open-profile");
  };

  const CloseProfile = () => {
    let closeSettingId = document.getElementById("gtf_inner");
    let CloseshowProfile = document.getElementById("showProfile");
    closeSettingId.classList.remove("width_calc");
    CloseshowProfile.classList.remove("open-profile");
  };

  const ShowSetting = () => {
    let closeSettingId = document.getElementById("gtf_inner");
    let CloseshowProfile = document.getElementById("showProfile");
    closeSettingId.classList.add("width_calc");
    CloseshowProfile.classList.add("open-setting");
  };

  const CloseSetting = () => {
    let closeSettingId = document.getElementById("gtf_inner");
    let CloseshowProfile = document.getElementById("showProfile");
    closeSettingId.classList.remove("width_calc");
    CloseshowProfile.classList.remove("open-setting");
  };
  const ShowComment = () => {
    let closeSettingId = document.getElementById("gtf_inner");
    let CloseshowProfile = document.getElementById("showProfile");
    closeSettingId.classList.add("width_calc");
    CloseshowProfile.classList.add("open-comment");
  };

  const CloseComment = () => {
    let closeSettingId = document.getElementById("gtf_inner");
    let CloseshowProfile = document.getElementById("showProfile");
    closeSettingId.classList.remove("width_calc");
    CloseshowProfile.classList.remove("open-comment");
  };

  return (
    <>
      <div className="chatbox-area">
        <div className="chatbox-right-bar">
          <ChatboxInner
            ShowComment={ShowComment}
            ShowSetting={ShowSetting}
            ShowProfile={ShowProfile}
            handleOnEnter={handleOnEnter}
          />
          <div className="toggle-side-bar " id="showProfile">
            <div className="toggle-side-inner">
              <div className="toggle-profile ">
                <div className="toggle-profile-inner">
                  <span
                    className="profile-close same-close-bar"
                    onClick={CloseProfile}
                  >
                    <i className="fa-solid fa-xmark" />
                  </span>
                  <div className="profile-header-toggle">
                    <div className="user-img-profile">
                      <figure>
                        <img src={Weblogo} alt="img" />
                      </figure>
                      <Link
                        to="#"
                        className="edit-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#EditModal"
                      >
                        Edit
                      </Link>
                      <div className="user-content-profile">
                        <h3>Live Market Session</h3>
                        <span>645 Subscribers</span>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <div className="copy-url-profile">
                      <span>
                        <i className="fa-regular fa-copy" />
                      </span>
                      https://web.telegram.org/k/#@Filmy4 webOfficial
                    </div>
                  </div>
                  <div className="profile-body-toggle">
                    <div className="profile-body-inner">
                      <div className="profile-body-menu">
                        <ul
                          className="nav nav-pills mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="mediatab-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#mediatab-home"
                              type="button"
                              role="tab"
                              aria-controls="mediatab-home"
                              aria-selected="true"
                            >
                              Media
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="linkstab-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#linkstab-profile"
                              type="button"
                              role="tab"
                              aria-controls="linkstab-profile"
                              aria-selected="false"
                            >
                              Links
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="docstab-contact-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#docstab-contact"
                              type="button"
                              role="tab"
                              aria-controls="docstab-contact"
                              aria-selected="false"
                            >
                              Docs
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="profile-body-content">
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="mediatab-home"
                            role="tabpanel"
                            aria-labelledby="mediatab-home-tab"
                            tabIndex={0}
                          >
                            <div className="media_upload_img">
                              <ul>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                                <li>
                                  <figure>
                                    <img src={Weblogo} alt="img" />
                                  </figure>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="linkstab-profile"
                            role="tabpanel"
                            aria-labelledby="linkstab-profile-tab"
                            tabIndex={0}
                          >
                            <div className="link_list-inner">
                              <div className="link_list_blog">
                                <div className="link-name">
                                  <span>
                                    <i className="fa-solid fa-link" />
                                  </span>
                                  Gettogetherfinance.com
                                  <small>10:22 Am</small>
                                </div>
                                <p>
                                  https://play.google.com/store/apps/details?id=com.mxtech.live
                                </p>
                              </div>
                              <div className="link_list_blog">
                                <div className="link-name">
                                  <span>
                                    <i className="fa-solid fa-link" />
                                  </span>
                                  Gettogetherfinance.com
                                  <small>10:22 Am</small>
                                </div>
                                <p>
                                  https://play.google.com/store/apps/details?id=com.mxtech.live
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="docstab-contact"
                            role="tabpanel"
                            aria-labelledby="docstab-contact-tab"
                            tabIndex={0}
                          >
                            <div className="docs_file">
                              <ul>
                                <li>
                                  <div className="docs_content">
                                    <span>
                                      <i className="fa-regular fa-file" />
                                    </span>
                                    ranze.trader.zip
                                    <small>40 kb</small>
                                  </div>
                                </li>
                                <li>
                                  <div className="docs_content">
                                    <span>
                                      <i className="fa-regular fa-file" />
                                    </span>
                                    ranze.trader.zip
                                    <small>40 kb</small>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade edit-profile"
                    id="EditModal"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="EditModalLabel"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="upload_img">
                            <figure>
                              <i className="fa-regular fa-image" />
                            </figure>
                            <div className="upload-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Channel Name*"
                              />
                            </div>
                            <div className="upload-content">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s*
                              </p>
                              <button className="btn btn-inline" type="button">
                                Update Profile
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="toggle-setting">
                <div className="toggle-setting-inner">
                  <div className="setting-header-bar">
                    <h3>Channel Settings</h3>
                    <span
                      className="toggle-setting-close same-close-bar"
                      onClick={CloseSetting}
                    >
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </div>
                  <div className="toggle-setting-body">
                    <div className="setting-body-inner">
                      <ul className="channel-list">
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={channel} alt="channel" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Channel Type</Link>
                              </strong>
                              <small>Private</small>
                            </div>
                            <div className="check-setting">
                              <div className="setting-check-label">
                                <input
                                  type="checkbox"
                                  className="check-toggle-setting"
                                  id="channelcheck"
                                />
                                <label htmlFor="channelcheck">
                                  <span />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={permission} alt="permission" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Permission</Link>
                              </strong>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={discussion} alt="Discussion" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Discussion</Link>
                              </strong>
                              <small>On</small>
                            </div>
                            <div className="check-setting">
                              <div className="setting-check-label">
                                <input
                                  type="checkbox"
                                  className="check-toggle-setting"
                                  id="discussioncheck"
                                />
                                <label htmlFor="discussioncheck">
                                  <span />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={reactions} alt="reactions" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Reactions</Link>
                              </strong>
                              <small>4 Reactions</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="massage-list ul-border">
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={sign} alt="sign" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Sign Message</Link>
                              </strong>
                              <small>On</small>
                            </div>
                            <div className="check-setting">
                              <div className="setting-check-label">
                                <input
                                  type="checkbox"
                                  className="check-toggle-setting"
                                  id="signcheck"
                                />
                                <label htmlFor="signcheck">
                                  <span />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="administrator-list">
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={administrator} alt="administrator" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Administrator</Link>
                              </strong>
                              <small>2</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={subscribers} alt="subscribers" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Subscribers</Link>
                              </strong>
                              <small>6</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={blocklist} alt="blocklist" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Block List</Link>
                              </strong>
                              <small>16</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={manipulate} alt="manipulate" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Manipulate Views</Link>
                              </strong>
                              <small>On</small>
                            </div>
                            <div className="check-setting">
                              <div className="setting-check-label">
                                <input
                                  type="checkbox"
                                  className="check-toggle-setting"
                                  id="manipulatecheck"
                                />
                                <label htmlFor="manipulatecheck">
                                  <span />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="ul-border delete-list">
                        <li>
                          <div className="setting-list-blog">
                            <figure>
                              <img src={deletes} alt="delete" />
                            </figure>
                            <div className="setting-content">
                              <strong>
                                <Link to="#">Delete Channel</Link>
                              </strong>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="toggle_comment">
                <div className="toggle_body_inner">
                  <div className="toggle_comment_header">
                    <div className="toggle_header_title">
                      <figure>
                        <img src={user1} alt="img" />
                      </figure>
                      <h2>Brooklyn Simmons</h2>
                      <small>10:22 Am</small>
                      <span
                        className="toggle-comment-close same-close-bar"
                        onClick={CloseComment}
                      >
                        <i className="fa-solid fa-xmark" />
                      </span>
                    </div>
                    <p>
                      half join and then pay full Regarding Primium Membership
                      in Lowest price, more then 1000 top most trading courses
                      More...
                    </p>
                  </div>
                  <div className="comment_show_list">
                    <h3>Comments</h3>
                    <span>(30)</span>
                  </div>
                  <div className="toggle_comment_bodylist">
                    <ul>
                      <li>
                        <div className="toggle_comment_blog">
                          <figure>
                            <img src={user1} alt="img" />
                          </figure>
                          <div className="toggle_comment_content">
                            <h4>Savannah Nguyen</h4>
                            <small>10:22 Am</small>
                            <p>
                              Regarding Primium Membership in Lowest price, more
                              then 1000 top most tradingcourses+{" "}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="toggle_comment_blog">
                          <figure>
                            <img src={user1} alt="img" />
                          </figure>
                          <div className="toggle_comment_content">
                            <h4>Cody Fisher</h4>
                            <small>10:22 Am</small>
                            <p>
                              Regarding Primium Membership in Lowest price, more
                              then 1000 top most tradingcourses+{" "}
                            </p>
                            <div className="comment_edit_link">
                              <Link to="#">Edit</Link>
                              <Link to="#" className="delete-link">
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="toggle_comment_footer">
                    <div className="toggle_form_footer">
                      <form>
                        <div className="flex-inline">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Comment"
                          />
                          <button type="button" className="send-btn">
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="toggle_delete_popup">
                  <div className="toggle_delete_inner">
                    <div className="delete_modal">
                      <div className="delete_body">
                        <h2>Are you sure ?</h2>
                        <p>You want to delete this comment</p>
                        <div className="delete_cancel_btn">
                          <Link to="#" className="cancel-btn">
                            Cancel
                          </Link>
                          <Link to="#" className="delete-btn">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade forward-modal modal-backdrop-overlay"
        id="Forward"
        tabIndex={-1}
        aria-labelledby="ForwardLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Forward To
              </h1>
              <button
                type="button"
                className="btn-close-c"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="modal-body">
              <div className="forward-list">
                <div className="forward-search">
                  <div className="search-group">
                    <input
                      type="text"
                      placeholder="Search Mentor"
                      className="form-control"
                    />
                    <button type="button">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>
                </div>
                <div className="forward-inner">
                  <div className="forward-blog">
                    <figure>
                      <img src={user1} alt="img" />
                    </figure>
                    Save Message
                  </div>
                  <div className="forward-blog">
                    <figure>
                      <img src={user2} alt="img" />
                    </figure>
                    Brooklyn Simmons
                  </div>
                  <div className="forward-blog">
                    <figure>
                      <img src={user1} alt="img" />
                    </figure>
                    Guy Hawkins
                  </div>
                  <div className="forward-blog">
                    <figure>
                      <img src={user2} alt="img" />
                    </figure>
                    Jenny Wilson
                  </div>
                  <div className="forward-blog">
                    <figure>
                      <img src={user1} alt="img" />
                    </figure>
                    Robert Fox
                  </div>
                  <div className="forward-blog">
                    <figure>
                      <img src={user2} alt="img" />
                    </figure>
                    Jacob Jones
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------Copy ------------------------------------- */}
      <div
        className="modal fade copy-modal modal-backdrop-overlay"
        id="Copy"
        tabIndex={-1}
        aria-labelledby="CopyLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------- Pin Messsage-------------------------------- */}
      <div
        className="modal fade pin-modal modal-backdrop-overlay"
        id="Pin"
        tabIndex={-1}
        aria-labelledby="PinLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------- Image Chat ------------------------------ */}
      <div
        className="modal fade images-chat-modal modal-backdrop-overlay"
        id="imagesmodalimg"
        tabIndex={-1}
        aria-labelledby="imagesLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close-c"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src={closeModel} alt="close-modal" />
              </button>
              <button
                type="button"
                className="btn-close-c download-btn"
                // data-bs-dismiss="modal"
                // aria-label="Close"
                value="download"
                // download
              >
                <img src={downloading} alt="img" />
              </button>
            </div>
            <div className="modal-body">
              <figure>
                <img src={sss} alt="img" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- Block -------------------------------------- */}

      <div
        className="modal fade block-modal modal-backdrop-overlay"
        id="block-user"
        tabIndex={-1}
        aria-labelledby="blockLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <span>
                  <img src={pinImg} alt="pin" />
                </span>{" "}
                Pinned Messages <Link to="#">Unpin All</Link>
              </h1>
              <button
                type="button"
                className="btn-close-c"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src={closeGreen} alt="close-green" />
              </button>
            </div>
            <div className="modal-body">
              <div className="block_body_list">
                <ul>
                  <li>
                    <div className="block_body_blog">
                      <figure>
                        <img src={images5} alt="images5" />
                      </figure>
                      <div className="block_body_content">
                        <strong>Kathryn Murphy</strong>
                        <p>
                          Regarding Primium Membership in Lowest price, more
                          then 1000 top most trading courses+{" "}
                        </p>
                        <div className="go-massage">
                          <Link to="#" className="green">
                            Go to message
                          </Link>
                          <Link to="#" className="orange">
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="block_body_blog">
                      <figure>
                        <img src={images5} alt="images5" />
                      </figure>
                      <div className="block_body_content">
                        <strong>Kathryn Murphy</strong>
                        <p>
                          Regarding Primium Membership in Lowest price, more
                          then 1000 top most trading courses+{" "}
                        </p>
                        <div className="go-massage">
                          <Link to="#" className="green">
                            Go to message
                          </Link>
                          <Link to="#" className="orange">
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContent;
