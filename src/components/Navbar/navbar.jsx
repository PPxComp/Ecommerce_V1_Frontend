import React, { useEffect } from "react";
import "./navbar.css";
import $ from "jquery";
import { useDispatch } from "react-redux";
import * as loginAction from "../../actions/login.action";
import { useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  window.$ = $;
  useEffect(() => {
    $(function () {
      $(".toggle").on("click", function () {
        console.log("ASd");
        if ($(".item").hasClass("active")) {
          $(".item").removeClass("active");
        } else {
          $(".item").addClass("active");
        }
      });
    });
  }, []);
  useEffect(() => {
    $(".item").removeClass("active");
    console.log("do");
  }, [loginReducer.isAuthenticated]);

  return (
    <div>
      <nav>
        <ul className="menu">
          <li className="logo">
            <a href="/">PPxEcom</a>
          </li>
          <li className="item">
            <a href="/">Stock</a>
          </li>
          {!loginReducer.isAuthenticated ? (
            <>
              <li className="item button">
                <a href="/">Log In</a>
              </li>
              <li className="item button secondary">
                <a href="/">Sign Up</a>
              </li>
            </>
          ) : (
            <>
              <li className="item button secondary">
                <a
                  href="/"
                  onClick={(e) => {
                    dispatch(loginAction.logout());
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}
          <li className="item button">
            <a href="/">ตระกร้า</a>
          </li>
          <li className="toggle">
            <span className="bars"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
