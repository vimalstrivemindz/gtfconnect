import React from 'react'
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
import { useState } from 'react';
const ChatboxInner = ({ShowComment,ShowSetting,ShowProfile,handleOnEnter}) => {
  const [text, setText] = useState("");

  return (
    <>
     <div className="chatbox-inner chat_live " id="gtf_inner">
            <div className="chatbox-header">
              <div
                className="user-name-bar openright-bar"
                data-apply_class="open_profile_sidebar"
              >
                <figure>
                  <img src={Weblogo} alt="logo" />
                </figure>
                <div className="name-content" onClick={ShowProfile}>
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
                    <Link to="#" className="setting-toggle-open" onClick={ShowSetting}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment} >
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
                            <Link to="#" className="comment-toggle-bar" onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
                            <Link to="#" className="comment-toggle-bar"  onClick={ShowComment}>
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
    </>
  )
}

export default ChatboxInner