import React, { useState } from "react";
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
const ChatContent = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  const download = (e) => {
    console.log(e.target);
    fetch(e.target, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="chatbox-area">
        <div className="chatbox-right-bar">
          <div className="chatbox-inner chat_live" id="gtf_inner">
            <div className="chatbox-header">
              <div
                className="user-name-bar openright-bar"
                data-apply_class="open_profile_sidebar"
              >
                <figure>
                  <img src={Weblogo} alt="logo" />
                </figure>
                <div className="name-content">
                  <strong>GTF Options 2.0 Extended</strong>
                  <p>645 Subsribers</p>
                </div>
              </div>
              <div className="chatbox-menubar">
                <ul>
                  <li>
                    <Link to="#" className="thumbtack-notifiction">
                      <i className="fa-solid fa-thumbtack" />
                      <span>22</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="setting-toggle-open">
                      <i className="fa-solid fa-gear" />
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-bell" />
                    </Link>
                    <div className="dropdown-menu">
                      <div className="notification-list">
                        <strong>Notification</strong>
                        <div className="notification-check">
                          <div className="check-noification-box">
                            <input
                              type="checkbox"
                              name
                              className="checknotification"
                              id="not1"
                            />
                            <label htmlFor="not1">
                              <span />
                              Forever
                            </label>
                          </div>
                          <div className="check-noification-box">
                            <input
                              type="checkbox"
                              name
                              className="checknotification"
                              id="not2"
                            />
                            <label htmlFor="not2">
                              <span />
                              For 3 Hour
                            </label>
                          </div>
                          <div className="check-noification-box">
                            <input
                              type="checkbox"
                              name
                              className="checknotification"
                              id="not3"
                            />
                            <label htmlFor="not3">
                              <span />
                              For 6 Hour
                            </label>
                          </div>
                          <div className="check-noification-box">
                            <input
                              type="checkbox"
                              name
                              className="checknotification"
                              id="not4"
                            />
                            <label htmlFor="not4">
                              <span />
                              For 1 Day
                            </label>
                          </div>
                          <div className="check-noification-box">
                            <input
                              type="checkbox"
                              name
                              className="checknotification"
                              id="not5"
                            />
                            <label htmlFor="not5">
                              <span />
                              For 3 Day
                            </label>
                          </div>
                          <div className="check-noification-box">
                            <input
                              type="checkbox"
                              name
                              className="checknotification"
                              id="not5-6"
                            />
                            <label htmlFor="not6">
                              <span />
                              For 1 Week
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="cancel-mute-tab">
                        <div className="links">
                          <Link to="#">Cancel</Link>
                          <Link to="#">Mute</Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown setting-drop">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="#" className="block">
                        Leave Channel
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chatbox-body">
              <ul className="active">
                <li className="messageReceived">
                  <div className="chatbox-type" id="bubble_1">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={images1} alt="images1" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Leslie Alexander,
                            <small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="type_user_name">
                          <strong>Johan Harper</strong>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link
                              to="#"
                              className="enable-descussion-toggle"
                              data-current_bubble_id="bubble_1"
                            >
                              Enable Descussion
                            </Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat ">
                        <p>
                          half join and then pay full
                          <br />
                          Regarding Primium Membership in Lowest price,
                          <br />
                          more then 1000 top most trading courses+ daily or
                          weekly upload new Courses.
                          <br />
                          After learn these Courses u will definitely earn more
                          profits <br />f trust issue u can pay half join and
                          then pay full ..
                          <span className="send-icon">🙏</span>
                        </p>
                        <div className="comments-bar comments-show">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="messageSent">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={images2} alt="images2" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Jerome Bell,<small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link
                              to="#"
                              className="enable-descussion-toggle"
                              data-current_bubble_id="bubble_2"
                            >
                              Enable Descussion
                            </Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <div className="quote-massage">
                          <span className="quote-name">
                            <img src={quoteimg} alt="quoteimg" /> Quote
                          </span>
                          <div className="quote-content-received">
                            <p>
                              Half Join and play full Membership in Lowest
                              price, more then 1000 top most trading courses+
                              daily or{" "}
                            </p>
                            <small className="time-text">
                              lisa Harper, Today at 11am
                            </small>
                          </div>
                          <div className="quote-replay-sent">
                            <div className="quote-replay-text">
                              <p>
                                Half Join and play full Membership in Lowest
                                price, more then 1000 top most trading courses+
                                daily or{" "}
                              </p>
                              <span>
                                <img src={checkUn} alt="check-un" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="comments-bar ">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageReceived">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={images3} alt="images3" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Jane Cooper,<small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="type_user_name">
                          <strong />
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link to="#">Enable Descussion</Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <p>
                          half join and then pay full Regarding Primium
                          Membership in Lowest price, more then 1000 top most
                          trading courses+ daily or weekly upload new Courses.
                          After learn these Courses u will definitely earn more
                          profits f trust issue u can pay half join and then pay
                          full ..
                          <span className="send-icon">🙏</span>
                        </p>
                        <div className="comments-bar comments-show">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageReceived">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={images2} alt="images2" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Jerome Bell, <small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="type_user_name">
                          <strong />
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link to="#">Enable Descussion</Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <p>
                          After learn these Courses u will definitely earn more
                          profits <br />f trust issue u can pay half join and
                          then pay full
                        </p>
                        <div className="imgcontent-group">
                          <div className="goup-row row">
                            <div className="col">
                              <div className="same-img-group">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#imagesmodalimg"
                                >
                                  <img src={sss} alt="img" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="comments-bar comments-show">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageReceived">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={Weblogo} alt="logo" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Live Market Session, <small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="type_user_name">
                          <strong>Johan Harper</strong>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link to="#">Enable Descussion</Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <p>
                          After learn these Courses u will definitely earn more
                          profits <br />f trust issue u can pay half join and
                          then pay full
                        </p>
                        <div className="imgcontent-group">
                          <div className="goup-row row">
                            <div className="col">
                              <div className="same-img-group">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#imagesmodalimg"
                                >
                                  <img src={sss} alt="img" />
                                </button>
                              </div>
                            </div>
                            <div className="col">
                              <div className="same-img-group">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#imagesmodalimg"
                                >
                                  <img src={sss} alt="img" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="comments-bar comments-show">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageReceived">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={Weblogo} alt="logo" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Live Market Session, <small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="type_user_name">
                          <strong>Johan Harper</strong>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link to="#">Enable Descussion</Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <div className="quote-massage">
                          <span className="quote-name">
                            <img src={quoteimgGreen} alt="quoteimg" /> Quote
                          </span>
                          <div className="quote-content-received">
                            <p>
                              Half Join and play full Membership in Lowest
                              price, more then 1000 top most trading courses+
                              daily or{" "}
                            </p>
                            <small className="time-text">
                              lisa Harper, Today at 11am
                            </small>
                          </div>
                          <div className="quote-replay-sent">
                            <div className="quote-replay-text">
                              <div className="personal-tag">
                                <mark>@Johan</mark>Thanks for Join us{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="comments-bar">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageReceived">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={Weblogo} alt="logo" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Live Market Session, <small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="type_user_name">
                          <strong>Johan Harper</strong>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link to="#">Enable Descussion</Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <div className="chat-file-zip">
                          <span>
                            <img src={zipIcon} alt="zip-icon" />
                          </span>
                          <div className="zip_content">
                            <strong>ranze.trader.zip</strong>
                            <small>40 kb</small>
                          </div>
                        </div>
                        <div className="comments-bar comments-show">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageReceived">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={Weblogo} alt="logo" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Live Market Session, <small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="type_user_name">
                          <strong>Johan Harper</strong>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link to="#">Enable Descussion</Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <div className="chat-file-zip">
                          <span>
                            <img src={zipIcon} alt="zip-icon" />
                          </span>
                          <div className="zip_content">
                            <strong>ranze.trader.zip</strong>
                            <small>40 kb</small>
                          </div>
                        </div>
                        <div className="comments-bar">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageSent">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={images2} alt="images2" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Jerome Bell,<small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link
                              to="#"
                              className="enable-descussion-toggle"
                              data-current_bubble_id="bubble_2"
                            >
                              Enable Descussion
                            </Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <div className="quote-massage">
                          <span className="quote-name">
                            <img src={quoteimg} alt="quoteimg" /> Quote
                          </span>
                          <div className="quote-content-received">
                            <p>
                              Half Join and play full Membership in Lowest
                              price, more then 1000 top most trading courses+
                              daily or{" "}
                            </p>
                            <small className="time-text">
                              lisa Harper, Today at 11am
                            </small>
                          </div>
                          <div className="quote-replay-sent">
                            <div className="quote-replay-text">
                              <p>
                                Half Join and play full Membership in Lowest
                                price, more then 1000 top most trading courses+
                                daily or{" "}
                              </p>
                              <span>
                                <img src={checkUn} alt="check-un" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="comments-bar comments-show">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="messageSent">
                  <div className="chatbox-type">
                    <div className="type_content">
                      <figure
                        className="dropdown"
                        alt="web-logo"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={images2} alt="images2" />
                        <ul className="dropdown-menu user_drop_menu">
                          <Link to="#">Block</Link>
                          <Link to="#">Message</Link>
                          <Link to="#" className="view_side_bar">
                            View Profile
                          </Link>
                        </ul>
                      </figure>
                      <div className="type_top">
                        <div className="session-name">
                          <p>
                            Jerome Bell, <small>Today 10:20 am</small>
                          </p>
                        </div>
                        <div className="edit_type dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Forward"
                            >
                              Forward
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Copy"
                            >
                              Copy
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#Pin"
                            >
                              Pin Message
                            </Link>
                            <Link
                              to="#"
                              className="enable-descussion-toggle"
                              data-current_bubble_id="bubble_2"
                            >
                              Enable Descussion
                            </Link>
                            <Link to="#">Select</Link>
                          </div>
                        </div>
                      </div>
                      <div className="body_content-chat">
                        <p>
                          half join and then pay full Regarding Primium
                          Membership in Lowest price, more then 1000 top most
                          trading courses+ daily or weekly upload new Courses.
                          After learn these Courses u will definitely earn more
                          profits f trust issue u can pay half join and then pay
                          full ..half join and then pay full Regarding Primium
                          Membership in Lowest price, more then 1000 top most
                          trading courses+ daily or weekly upload new Courses.
                          After learn these Courses u will definitely earn more
                          profits f trust issue u can pay half join and then pay
                          full .. <span className="send-icon">🙏</span>
                        </p>
                        <div className="comments-bar comments-show">
                          <div className="comment-check">
                            <div className="comment-hover">
                              <span>20k comments</span>
                              <div className="hover_comment_content">
                                <div className="hover_comment_inner">
                                  <div className="hover_header">
                                    <strong>Comments(22)</strong>
                                  </div>
                                  <div className="hover_body">
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Marvin McKinney
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Savannah Nguyen
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Courtney Henry
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Eleanor Pena
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Wade Warren
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Brooklyn Simmons
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cameron Williamson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Leslie Alexander
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kristin Watson
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Floyd Miles
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Kathryn Murphy
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Devon Lane
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Esther Howard
                                    </div>
                                    <div className="hover_list_blog">
                                      <figure>
                                        <img src={user1} alt="img" />
                                      </figure>
                                      Cody Fisher
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                45 <i className="fa-solid fa-thumbs-up" />
                              </span>
                              <div className="like_comment_hover">
                                <div className="like_comment_inner">
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group2} alt="group" />
                                    </span>
                                    <strong>5</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group3} alt="group" />
                                    </span>
                                    <strong>6</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group4} alt="group" />
                                    </span>
                                    <strong>4</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group5} alt="group" />
                                    </span>
                                    <strong>20</strong>
                                  </div>
                                  <div className="like_blod_list">
                                    <span>
                                      <img src={group6} alt="group" />
                                    </span>
                                    <strong>44</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="comment-hover">
                              <span>
                                4.1k <i className="fa-solid fa-eye" />
                              </span>
                              <div className="view_comment_hover">
                                <div className="view_comment_inner">
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Origianl View - <mark>2000</mark>
                                    </strong>
                                  </div>
                                  <div className="view_blog_list">
                                    <span>
                                      <i className="fa-solid fa-eye" />
                                    </span>
                                    <strong>
                                      Manipulated View - <mark>2100</mark>
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="commentsright ">
                            <div className="dropdown">
                              <Link
                                href
                                className="dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-thumbs-up" />
                              </Link>
                              <div className="dropdown-menu">
                                <div className="like_icon">
                                  <Link to="#">
                                    <img src={group6} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group2} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group3} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group4} alt="images" />
                                  </Link>
                                  <Link to="#">
                                    <img src={group5} alt="images" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link to="#" className="comment-toggle-bar">
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="chatbox-footer">
              <div className="footer-type">
                <div className="type-group">
                  {/* <div
                    className="iconchat-bar"
                    onClick={() => setShowEmoji(!showEmoji)}
                  >
                    <Link to="#">
                      <i className="fa-regular fa-face-smile" />
                    </Link>
                  </div> */}
                  {/* <input
                    type="text"
                    name
                    className="form-control"
                    placeholder="Message"
                    value={inputEmoji}
                    onChange={(e) => setInputEmoji(e.target.value)}
                  /> */}
                  <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Type a message"
                  />
                  <div className="type-attach">
                    <Link to="#">
                      <i className="fa-solid fa-paperclip" />
                    </Link>
                  </div>
                  <button className="send" type="button">
                    <i className="fa-solid fa-paper-plane" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-side-bar">
            <div className="toggle-side-inner">
              <div className="toggle-profile ">
                <div className="toggle-profile-inner">
                  <span className="profile-close same-close-bar">
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
                                name
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
                    <span className="toggle-setting-close same-close-bar">
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
                                  name
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
                                  name
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
                                  name
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
                                  name
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
                      <span className="toggle-comment-close same-close-bar">
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
                            name
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
                      name
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
                onClick={(e) => download(e)}
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
