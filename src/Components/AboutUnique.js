import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import imageAbout from "./../Resources/MeasureUP png_4.jpg";

const ContainerBox = styled(Box)(({theme})=> ({
  display: "flex",
  height: "85vh",
  marginTop: "5%",
 [theme.breakpoints.down('md')]: {
  height: "130vh",
  flexDirection: "column",
  
},
[theme.breakpoints.down('sm')]: {
  height: "85vh",
  
},
}));

const LeftBox = styled(Box)(({theme})=> ({
  width: "43%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },
}));

const RightBox = styled(Box)(({theme})=> ({
  width: "57%",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },
}));

const TextBox = styled(Box)(({theme})=> ({
    width: "75%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('md')]: {
      width: "100%",
      marginLeft: "5%",
      justifyContent: "center",
    },
}));

const HeadingText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "650",
  marginBottom: "10%",
});

const DescriptionText = styled(Typography)(({theme})=> ({
  fontFamily: "Poppins",
  fontSize: "18px",
  width: "60%",
  [theme.breakpoints.down('md')]: {
    width: "90%",
  },
}));

const ImageAbout = styled('img')(({theme})=> ({
    height: "auto",
    width: "75%",
    marginTop: "10%",
    [theme.breakpoints.down('md')]: {
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
