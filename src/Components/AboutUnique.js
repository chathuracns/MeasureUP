import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import imageAbout from "./../Resources/MeasureUP png_4.jpg";

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "85vh",
  marginTop: "5%",
  scrollMarginTop: "35px",
  [theme.breakpoints.down("md")]: {
    height: "130vh",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    height: "108vh",
    justifyContent: "space-around",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  width: "43%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]:{
    height: "100%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: "57%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  width: "75%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: "5%",
    height: "100%",
    justifyContent: "center",
  },
}));

const VideoBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    paddingTop: "5%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0%",
  },
}));

const HeadingText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "650",
  marginBottom: "10%",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0%",
  },

}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "18px",
  width: "90%",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const ImageAbout = styled("img")(({ theme }) => ({
  height: "auto",
  width: "75%",
  marginTop: "10%",
  [theme.breakpoints.down("md")]: {
    width: "75%",
    marginTop: "3%",
  },
}));

function AboutUnique() {
  return (
    <>
      <ContainerBox id="about">
        <LeftBox>
          <TextBox>
            <HeadingText>What makes MeasureUP so unique ?</HeadingText>
            <DescriptionText>
              {/* <Box display="inline" fontWeight="600">
                "MeasureUP
              </Box>{" "} */}
              MeasureUp is unique due to its scalability for extensive data
              collection, affordability for wide accessibility, and local
              manufacturing in Sri Lanka, promoting economic growth. It supports
              sustainable development goals, is portable for easy transport, and
              empowers users with independent health monitoring without needing
              assistance.
            </DescriptionText>
          </TextBox>
        </LeftBox>
        <RightBox>
          <VideoBox>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hVW7rcDppKE?si=lIdi99zk9qAZXMkn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </VideoBox>
        </RightBox>
      </ContainerBox>
    </>
  );
}

export default AboutUnique;
