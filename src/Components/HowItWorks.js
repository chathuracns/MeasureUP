import { Box, Typography, styled } from "@mui/material";
import React from "react";
import image1 from "./../Resources/image 1.png";
import image2 from "./../Resources/image 2.png";
import image3 from "./../Resources/image 3.png";

const ContainerBox = styled(Box)({
  display: "flex",
  flexFirection: "row",
  height: "85vh",
  marginTop: "2%",
});

const LeftBox = styled(Box)({
  width: "35%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const RightBox = styled(Box)({
  width: "65%",
  display: "flex",
  flexDirection: "column",
  
});

const QuoteTextBox = styled(Box)({
  width: "38%",
});

const QuoteText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "20px",
});

const StackHowTo = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

const FirstStack = styled(StackHowTo)({
  height: "33%",
  marginTop: "8%", 
});

const SecondStack = styled(StackHowTo)({
  height: "33%",
});

const ThirdStack = styled(StackHowTo)({
  height: "33%",
  marginTop: "3%",
});

const ImageBox = styled(Box)({
  width: "50%",
  zIndex: "2",
  display: "flex",
  justifyContent: "center",
});

const TextBox = styled(Box)({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const ImageSetup = styled("img")({
  height: "220px",
});

const HowToTopic = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "20px",
  fontWeight: "600",
});

const HowToDescription = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "14px",
});

function HowItWorks() {
  return (
    <>
      <ContainerBox id="learn">
        <LeftBox>
          <QuoteTextBox>
            <QuoteText>
              <Box fontWeight="600" display="inline">
                “MeasureUP
              </Box>{" "}
              is a dual-unit device designed to{" "}
              <Box fontWeight="600" display="inline">
                accurately measure{" "}
              </Box>
              both{" "}
              <Box fontWeight="600" display="inline">
                body height
              </Box>{" "}
              and{" "}
              <Box fontWeight="600" display="inline">
                body weight,{" "}
              </Box>
              providing instant readings along with calculated{" "}
              <Box fontWeight="600" display="inline">
                BMI.”
              </Box>
            </QuoteText>
          </QuoteTextBox>
        </LeftBox>
        <RightBox>
          <FirstStack>
            <ImageBox >
              <ImageSetup src={image1} sx={{marginLeft: "20%"}}/>
            </ImageBox>
            <TextBox>
              <HowToTopic><Box color="#026CFF" display="inline">1.</Box> SetUP</HowToTopic>
              <HowToDescription>
                Simply setup the unit by hanging the Height device on a wall and
                keeping the Weight device underneath It
              </HowToDescription>
            </TextBox>
          </FirstStack>
          <SecondStack>
            <TextBox>
              <HowToTopic><Box color="#026CFF" display="inline">2.</Box> StepUP</HowToTopic>
              <HowToDescription>
                Step up on to the weight device and stand straight
              </HowToDescription>
            </TextBox>
            <ImageBox sx={{marginTop: "-2%"}}>
              <ImageSetup src={image2} />
            </ImageBox>
          </SecondStack>
          <ThirdStack>
            <ImageBox sx={{marginTop: "-6%"}}>
              <ImageSetup src={image3} />
            </ImageBox>
            <TextBox>
              <HowToTopic><Box color="#026CFF" display="inline">3.</Box> MeasureUP</HowToTopic>
              <HowToDescription>
                The device will measure up both weight and the body height and
                will show those with the calculated BMI
              </HowToDescription>
            </TextBox>
          </ThirdStack>
        </RightBox>
      </ContainerBox>
    </>
  );
}

export default HowItWorks;
