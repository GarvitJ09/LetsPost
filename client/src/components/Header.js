import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();

  return (
    <AppBar position="sticky" sx={{ background: "black", color: "white" }}>
      <Toolbar>
        <Typography variant="h4" sx={{ fontFamily: "Oleo Script Swash Caps" }}>
          Lets Post
        </Typography>

        <Box display="flex" marginLeft={"auto"}>
          <Tabs value={value} onChange={(e, val) => setValue(val)}>
            <Tab
              LinkComponent={Link}
              to="/blogs"
              label="All Blogs"
              sx={{ color: "white" }}
            ></Tab>
            {isLoggedIn && (
              <Tab
                LinkComponent={Link}
                to="/myblogs"
                label="My Blogs"
                sx={{ color: "white" }}
              ></Tab>
            )}
            {isLoggedIn && (
              <Tab
                LinkComponent={Link}
                to="/blogs/add"
                label="Add blog"
                sx={{ color: "white" }}
              ></Tab>
            )}
          </Tabs>
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login | Signup
              </Button>
              {/* <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button> */}
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>

        {/* <Box disply="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
