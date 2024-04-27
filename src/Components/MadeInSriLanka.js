import { Box, Typography, styled } from "@mui/material";
import React from "react";
import sriLankanImage from "./../Resources/Sri_Lanka_Flag_Lion.png";

const ContainerBox = styled(Box)({
  display: "flex",
  height: "70vh",
  marginTop: "3%",
});

const LeftBox = styled(Box)({
  width: "65%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const RightBox = styled(Box)({
  width: "35%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  
});

const ImageBox = styled(Box)({
  width: "70%",
  marginLeft: "0%"
});

const SriLankaImage = styled("img")({
  width: "400px",
  height: "auto",
});

const TextBox = styled(Box)({
  width: "70%",
  
});

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
