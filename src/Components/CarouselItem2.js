import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import background1 from "./../Resources/MeasureUP png_5.jpg";
import background2 from "./../Resources/MeasureUP png_6.jpg";
import background3 from "./../Resources/MeasureUP png_7.jpg";

function mapImages(id) {
  switch (id) {
    case 1:
      return background1;
    case 2:
      return background2;
    case 3:
      return background3;
  }
}

function mapWidth(id) {
  switch (id) {
    case 1:
      return "65%";
    case 2:
      return "70%";
    case 3:
      return "65%";
  }
}

function mapHeight(id) {
  switch (id) {
    case 1:
      return "450px";
    case 2:
      return "400px";
    case 3:
      return "400px";
  }
}

const MainContainer = styled(Box)({
  backgroundColor: "#9FC7FF",
  width: "100%",
  height: "82vh",
  display: "flex",
  flexDirection: "row",
});

const RightContainer = styled(Box)({
  width: "45%",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
});

const LeftContainer = styled(Box)({
  width: "55%",
  display: "flex",
  justifyContent: "left",
});

const TextContainer = styled(Box)({
  width: "70%",
  marginLeft: "15%",
});

const ButtonBox = styled(Box)({
  marginTop: "10%",
  display: "flex",
});

const HeadingText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "650",
});

const ContentText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "14px",
  width: "80%",
});

const ContainerImage = styled("img")({
  width: "50%",
  marginTop: "3%",
  marginLeft: "18%",
});

const br = styled("br")({
  display: "none",
});

const ContainedButton = styled(Button)({
  margin: "2%",
});

const OutlinedButton = styled(Button)({
  backgroundColor: "#ffffff",
  margin: "2%",
  color: "#1578FF",
  border: "1px solid #1578FF",
});

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

function CarouselItem2(props) {
  return (
    <>
      <MainContainer id="carousel2">
        <LeftContainer>
          <ContainerImage
            src={mapImages(props.item.id)}
            sx={{ width: mapWidth(props.item.id), height: "auto" }}
          />
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <HeadingText variant="h3" gutterBottom>
              {props.item.title}
            </HeadingText>
            {props.item.id === 2 ? (
              <ContentText variant="body1" gutterBottom>
                to your backpack as its truly portable with its small sizee{" "}
                <br /> Height device L X B X H <br /> Weight device L X B X H
              </ContentText>
            ) : (
              <ContentText variant="body1" gutterBottom>
                {props.item.description}
              </ContentText>
            )}

            <ButtonBox>
              <ContainedButton variant="contained" size="large" onClick={() => scrollToSection("support")}>
                Intrested
              </ContainedButton>
              <OutlinedButton variant="outlined" size="large" onClick={() => scrollToSection("learn")}>
                Learn More
              </OutlinedButton>
            </ButtonBox>
          </TextContainer>
        </RightContainer>
      </MainContainer>
    </>
  );
}

export default CarouselItem2;
