import React from "react";
import { useEffect, useState } from "react";
import logo from "../images/LogoTrans.png";
import RoundButton from "./RoundButton";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

function Header(props) {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    const path = location.pathname.substring(1);
    setSelected(path || "home");
  }, [location]);

  const linkClasses =
    "py-2.5 px-5 my-2.5 text-black no-underline ml-2.5 text-base hover:opacity-80";
  const selectedClasses =
    "py-2.5 px-5 my-2.5 text-black ml-2.5 text-base underline underline-offset-4";

  return (
    <div className="flex justify-between items-center text-black min-w-[90%]">
      <div className="flex items-center my-2.5 mx-8 md:mx-1.5">
        <Link
          className="flex justify-center items-center group"
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="transition-opacity duration-200 group-hover:opacity-70">
            <RoundButton
              color="black"
              label={<img className="w-[70px] md:w-[50px]" src={logo} alt="" />}
            />
          </div>
          <div className="transition-opacity duration-200 group-hover:opacity-70">
            {props.subtitle}
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex justify-end">
        <Link
          style={{ color: props.textColor }}
          className={
            selected === "home" || selected === ""
              ? selectedClasses
              : linkClasses
          }
          onClick={() => setSelected("home")}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{ color: props.textColor }}
          className={selected === "portfolio" ? selectedClasses : linkClasses}
          onClick={() => setSelected("portfolio")}
          to="/portfolio"
        >
          Projects
        </Link>
        <Link
          style={{ color: props.textColor }}
          className={selected === "students" ? selectedClasses : linkClasses}
          onClick={() => setSelected("students")}
          to="/students"
        >
          Students
        </Link>
        <Link
          style={{ color: props.textColor }}
          className={selected === "team" ? selectedClasses : linkClasses}
          onClick={() => setSelected("team")}
          to="/team"
        >
          Team
        </Link>
      </div>

      <div className="flex lg:hidden justify-end">
        <h1 onClick={toggleDrawer("right", true)} className="cursor-pointer">
          <RxHamburgerMenu style={{ color: "black" }} />
        </h1>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Box
            sx={{ width: 200 }}
            role="presentation"
            onClick={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ color: props.textColor }}
                    className={
                      selected === "home" || selected === ""
                        ? selectedClasses
                        : linkClasses
                    }
                    onClick={() => setSelected("home")}
                    to="/"
                  >
                    Home
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ color: props.textColor }}
                    className={
                      selected === "portfolio" ? selectedClasses : linkClasses
                    }
                    onClick={() => setSelected("portfolio")}
                    to="/portfolio"
                  >
                    Projects
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ color: props.textColor }}
                    className={
                      selected === "students" ? selectedClasses : linkClasses
                    }
                    onClick={() => setSelected("students")}
                    to="/students"
                  >
                    Students
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ color: props.textColor }}
                    className={
                      selected === "team" ? selectedClasses : linkClasses
                    }
                    onClick={() => setSelected("team")}
                    to="/team"
                  >
                    Team
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
