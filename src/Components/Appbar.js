import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "./../Resources/MeasureUP Logo final.png";
import "./styles.css";
import { Link } from "react-scroll";
import { WidthFull } from "@mui/icons-material";
import { styled } from "@mui/material";

const pages = ["Contact Us", "Team", "Support"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const LogoBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {},
    
  }));

  const ButtonGroup = styled(Box)(({ theme }) => ({
    display: { xs: "none", md: "flex" },
    flexDirection: "row",
    marginLeft: "-32%",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-50%",
    }
  }));

  const RightButtonBox = styled(Box)({
    margin: "0 1% 0 10%"
  });

  const ResposiveLogoBox = styled(Box)(({ theme }) => ({
    marginLeft: "8%",
  }));

  const ResposiveMenuBox = styled(Box)({});

  const ButtonMiddle = styled(Button)({
    fontFamily: "Poppins",
    color: "#000000",
    width: "15vw",
    margin: "1%",
  });

  const IntrestedButton = styled(Button)({
    borderRadius: "10%",
  });

  const ButtonItalic = styled(ButtonMiddle)({
    fontFamily: "Poppins",
    fontStyle: "italic",
    textTransform: "none",
  });

  const LogoImage = styled("img")(({ theme }) => ({
    width: "45%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  }));

  const MainAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#ffff",
    height: "12vh",
    [theme.breakpoints.down("lg")]: {
      height: "12vh",
      
    },
    [theme.breakpoints.down("md")]: {
      height: "12vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "8vh",
    },
  }));

  return (
    <MainAppBar
      position="fixed"
      id="appbar"
    >
      <Toolbar disableGutters sx={{ width: "100%" }}>
        <LogoBox sx={{ display: { xs: "none", md: "flex" } }}>
          <LogoImage
            src={logo}
            alt="Logo"
            className="logo_front"
            style={{
              marginRight: "0%",
            }}
          />
        </LogoBox>

        <ResposiveMenuBox sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="#000000"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={() => scrollToSection("about")}>ABOUT</MenuItem>
            <MenuItem onClick={() => scrollToSection("learn")}>
              HOW IT WORKS
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("srilanka")}>
              #MadeInSriLanka
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("support")}>
              INTRESTED
            </MenuItem>
          </Menu>
        </ResposiveMenuBox>
        <ResposiveLogoBox sx={{ display: { xs: "flex", md: "none" } }}>
          <LogoImage src={logo} alt="Logo" className="logo_middle" />
        </ResposiveLogoBox>
        <ButtonGroup sx={{ display: { xs: "none", md: "flex" } }}>
          <ButtonMiddle
            variant="text"
            size="large"
            sx={{ml: "10%"}}
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </ButtonMiddle>
          <ButtonMiddle
            variant="text"
            size="large"
            onClick={() => scrollToSection("learn")}
          >
            HOW IT WORKS
          </ButtonMiddle>
          <ButtonItalic
            variant="text"
            size="large"
            onClick={() => scrollToSection("srilanka")}
          >
            #MadeInSriLanka
          </ButtonItalic>
        </ButtonGroup>
        <RightButtonBox
          sx={{
            display: { xs: "none", md: "flex" },  
          }}
        >
          <IntrestedButton
            variant="contained"
            size="large"
            onClick={() => scrollToSection("support")}
          >
            Intrested
          </IntrestedButton>
        </RightButtonBox>
      </Toolbar>
    </MainAppBar>
  );
}
export default Appbar;
