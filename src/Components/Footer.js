import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import logo from "./../Resources/MeasureUP Logo final white.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1578FF",
  height: "20vh",
  display: "flex",
  flexDirection: "row",
  color: "white",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "33vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  width: "33%",
  [theme.breakpoints.down("sm")]: {
    width: "73%",
    marginLeft: "5%",
  },
}));

const MidBox = styled(Box)(({ theme }) => ({
  width: "55%",
  display: "flex",
  alignItems: "center",
  marginLeft: "20%",
  [theme.breakpoints.down("lg")]: {
    width: "38%",
    marginLeft: "15%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "center",
    marginLeft: "0%",
    marginBottom: "0%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: "12%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    width: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const LogoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "5%",
});

const LogoImage = styled("img")(({ theme }) => ({
  width: "70%",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "30px",
  fontStyle: "italic",
  marginLeft: "2%",
  marginTop: "-2%",
  [theme.breakpoints.down("lg")]: {
    marginTop: "-5%",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "-5%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    marginLeft: "0%",
    marginTop: "-7%",
  },
}));

const NavButtonBox = styled(Box)(({ theme} ) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "2%",
  [theme.breakpoints.down("sm")]: {
    marginTop: "0%",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  width: "20%",
  "&:hover": {
    background: "none",
  },
  "&:active": {
    background: "none",
  },
  color: "white",
  maxHeight: "20px",
  minWidth: "150px",
  display: "flex",
  justifyContent: "left",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "center",
  },
}));

const SocialMediaButton = styled(Button)({
  color: "white",
});

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Footer() {
  return (
    <>
      <ContainerBox>
        <LeftBox>
          <LogoBox>
            <LogoImage src={logo} />
            <LogoText>#MadeInSriLanka</LogoText>
          </LogoBox>
        </LeftBox>
        <MidBox>
          <NavButtonBox>
            <NavButton
              variant="text"
              disableRipple
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </NavButton>
            <NavButton
              variant="text"
              disableRipple
              onClick={() => scrollToSection("learn")}
            >
              HOW IT WORKS
            </NavButton>
            <NavButton
              variant="text"
              disableRipple
              onClick={() => scrollToSection("support")}
            >
              INTRESTED
            </NavButton>
          </NavButtonBox>
        </MidBox>
        <RightBox>
          <SocialMediaButton size="medium">
            <a target="_blank" href="https://www.youtube.com/@ChathuraNirmalWeerasinghe">
              <YouTubeIcon fontSize="large" />
            </a>
          </SocialMediaButton>
        </RightBox>
      </ContainerBox>
    </>
  );
}

export default Footer;
