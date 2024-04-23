import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import imageAbout from "./../Resources/MeasureUP png_4.jpg";

const ContainerBox = styled(Box)({
  display: "flex",
  height: "85vh",
});

const LeftBox = styled(Box)({
  width: "43%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const RightBox = styled(Box)({
  width: "57%",
});

const TextBox = styled(Box)({
    width: "75%",
    display: "flex",
    flexDirection: "column",
});

const HeadingText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "27px",
  fontWeight: "650",
  marginBottom: "10%",
});

const DescriptionText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "18px",
  width: "60%"
});

const ImageAbout = styled('img')({
    height: "90vh",
});

function AboutUnique() {
  return (
    <>
      <ContainerBox>
        <LeftBox>
          <TextBox>
            <HeadingText>What makes MeasureUP so unique ?</HeadingText>
            <DescriptionText>
              <Box display="inline" fontWeight="600">"MeasureUP</Box> is highly portable, fitting easily into your backpack
              thanks to its wireless technology. Moreover, it can be
              manufactured at a lower cost compared to other available options
              in the market."
            </DescriptionText>
          </TextBox>
        </LeftBox>
        <RightBox>
            <ImageAbout 
                src= {imageAbout}
            />
        </RightBox>
      </ContainerBox>
    </>
  );
}

export default AboutUnique;
