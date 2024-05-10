import { Box, Typography, styled } from "@mui/material";
import React from "react";
import sriLankanImage from "./../Resources/Sri_Lanka_Flag_Lion.png";

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "70vh",
  marginTop: "3%",
  [theme.breakpoints.down("md")]: {
    height: "110vh",
    flexDirection: "column-reverse",
    marginTop: "0%",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  width: "60%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: "40%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "90%",
  marginLeft: "0%",
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
  justifyContent: "center",
  alignitems: "center",
  marginTop: "10%",
  [theme.breakpoints.down("lg")]: {
    marginTop: "5%",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "0%",
    width: "90%",
    justifyContent: "center",
    alignitems: "center",
    marginBottom: "2%",
  },
}));

const HeadingText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "650",
  fontStyle: "italic",
});

const DescriptionText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "18px",
});

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
        </RightBox>
      </ContainerBox>
    </>
  );
}

export default MadeInSriLanka;
