import React from "react";
import "./navbar.css";
import $ from "jquery";
import { useSelector } from "react-redux";

export default function Navbar() {
  const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  window.$ = $;
  $(function () {
    $(".toggle").on("click", function () {
      if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
      } else {
        $(".item").addClass("active");
      }
    });
  });
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
          {!loginReducer.result && (
            <>
              <li className="item button">
                <a href="/">Log In</a>
              </li>
              <li className="item button secondary">
                <a href="/">Sign Up</a>
              </li>
            </>
          )}
          {loginReducer.result && (
            <>
              <li className="item button secondary">
                <a href="/">Logout</a>
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
