import React, { useEffect } from "react";
import "./navbar.css";
import $ from "jquery";
import { useDispatch } from "react-redux";
import * as loginAction from "../../actions/login.action";
import { useSelector } from "react-redux";
import { Box, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function Navbar(props) {
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
  }, [loginReducer.isAuthenticated]);

  return (
    <div>
      <nav className="gg">
        <ul className="menu">
          <li className="logo">
            <a href="/stock">PPxEcom</a>
          </li>
          <li className="item">
            <a href="/stock">Stock</a>
          </li>
          {!loginReducer.isAuthenticated ? (
            <>
              <li className="item button">
              <Box color="white">
                  <Button variant="contained"
                    onClick={(e) => {
                      e.preventDefault();
                      props.history.push("/login")
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </li>
              <li className="item button secondary">
              <Box color="white">
                  <Button variant="contained"
                    onClick={(e) => {
                      e.preventDefault();
                      props.history.push("/register")
                    }}
                  >
                    Sign up
                  </Button>
                </Box>
              </li>
            </>
          ) : (
            <>
              <li className="item button secondary">
                <Box color="white">
                  <Button variant="contained"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(loginAction.logout({ ...props }));
                    }}
                  >
                    Logout
                  </Button>
                </Box>
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
export default withRouter(Navbar);
