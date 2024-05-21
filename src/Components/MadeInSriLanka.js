import { Avatar, Box, Typography, styled } from "@mui/material";
import React from "react";
import sriLankanImage from "./../Resources/Sri_Lanka_Flag_Lion.png";
import profilePic from "./../Resources/chathura.jpg";

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "90vh",
  marginTop: "3%",
  scrollMarginTop: "45px",
  [theme.breakpoints.down("lg")]: {
    height: "90vh",
  },
  [theme.breakpoints.down("md")]: {
    height: "115vh",
    flexDirection: "column-reverse",
    marginTop: "0%",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    height: "105vh",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  width: "65%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: "35%",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "120%",
  marginLeft: "5%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20%",
  },
}));

const SriLankaImage = styled("img")(({ theme }) => ({
  width: "65%",
  height: "auto",
  [theme.breakpoints.down("lg")]: {
    width: "75%",
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignitems: "center",
  marginTop: "3%",
  [theme.breakpoints.down("lg")]: {
    marginTop: "5%",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "0%",
    width: "95%",
    marginBottom: "2%",
  },
}));

const HeadingText = styled(Typography)(({ theme } ) => ({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "650",
  fontStyle: "italic",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "18px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    marginLeft: "5%",
  },
}));
const DescriptionTextName = styled(DescriptionText)(({ theme }) => ({
  fontSize: "20px",
}));

const LinkedInIconBox = styled(Box)(({ theme }) => ({
  marginTop: "2%",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    justifyContent:  "center",
    marginBottom: "5%",
  },
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
}));

function MadeInSriLanka() {
  return (
    <>
      <ContainerBox id="srilanka">
        <LeftBox>
          <ImageBox>
            <SriLankaImage src={sriLankanImage} alt="Sri Lankan Flag" />
          </ImageBox>
        </LeftBox>
        <RightBox>
          <TextBox>
            <HeadingText>#MadeInSriLanka</HeadingText>
            <DescriptionText>
              "MeasureUP is a project undertaken by a group of Sri Lankan
              undergraduate students studying biomedical engineering at the
              Department of Electronic and Telecommunication Engineering,
              University of Moratuwa. The project is funded by the World Bank
              and guided by the University Business Linkage Cell at the
              University of Moratuwa."
            </DescriptionText>
          </TextBox>
          <DescriptionText sx={{mt: "5%"}}>
            <b>Contact: </b>
          </DescriptionText>
          <LinkedInIconBox>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chathura-weerasinghe-9a08bb213/"
            >
              <ProfileAvatar alt="Chathura Weerasinghe" src={profilePic} />
            </a>
            <DescriptionTextName sx={{ mt: "4%", ml: "2%" }}>
              Chathura Weerasinghe
            </DescriptionTextName>
          </LinkedInIconBox>
        </RightBox>
      </ContainerBox>
    </>
  );
}

export default MadeInSriLanka;
