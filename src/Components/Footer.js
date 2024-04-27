import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import logo from "./../Resources/MeasureUP Logo final white.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-scroll";

const ContainerBox = styled(Box)({
  backgroundColor: "#1578FF",
  height: "20vh",
  display: "flex",
  flexDirection: "row",
  color: "white",
});

const LeftBox = styled(Box)({
  width: "33%",
});

const MidBox = styled(Box)({
  width: "55%",
  display: "flex",
  alignItems: "center",
});

const RightBox = styled(Box)({
  width: "12%",
  display: "flex",
  justifyContent: "center",
});

const LogoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "5%",
});


const LogoImage = styled("img")({
  width: "230px",
});

const LogoText = styled(Typography)({
    fontFamily: "Poppins",
    fontSize: "30px",
    fontStyle: "italic",
    marginLeft: "2%",
    marginTop: "-2%"
});

const NavButtonBox= styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginTop: "2%"
    
});

const NavButton = styled(Button)({
    width: "20%",
    "&:hover": {
        background: "none",
    },
    "&:active": {
        background: "none",
    },
    color: "white",
    maxHeight: "20px",
    minWidth: "150px"
});

const SocialMediaButton = styled(Button)({
    color: "white",
});

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
                <NavButton  variant="text" disableRipple>HOW IT WORKS</NavButton>
                <NavButton  variant="text" disableRipple>ABOUT</NavButton>
                <NavButton  variant="text" disableRipple>INTRESTED</NavButton>
            </NavButtonBox>
        </MidBox>
        <RightBox>
            <SocialMediaButton size="small">
                <FacebookIcon fontSize="large"/>
            </SocialMediaButton>
            <SocialMediaButton size="small">
                <LinkedInIcon fontSize="large"/>
            </SocialMediaButton>
        </RightBox>
      </ContainerBox>
    </>
  );
}

export default Footer;
