import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import background1 from "./../Resources/Picture1.png";
import background2 from "./../Resources/MeasureUP png_2.jpg";
import background3 from "./../Resources/picture3.png";

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

function mapHeight(id) {
  switch (id) {
    case 1:
      return "438px";
    case 2:
      return "450px";
    case 3:
      return "500px";
  }
}

function mapWidth(id) {
  switch (id) {
    case 1:
      return "80%";
    case 2:
      return "45%";
    case 3:
      return "60%";
  }
}

function mapHeightSmall(id){
    switch (id) {
        case 1:
          return "278px";
        case 2:
          return "285px";
        case 3:
          return "386px";
      }
}

function mapMarginTop(id) {
  switch (id) {
    case 1:
      return "10%";
    case 2:
      return "2%";
    case 3:
      return "2%";
  }
}

function CarouselItem(props) {
  const MainContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#d2e3fc",
    width: "100%",
    height: "82vh",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      position: "relative",
    },
  }));

  const LeftContainer = styled(Box)(({ theme }) => ({
    width: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      zIndex: "2",
      position: "absolute",
      width: "100%",
      top: "10%",
    },
  }));

  const RightContainer = styled(Box)(({ theme }) => ({
    width: "80%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      opacity: "0.5",

      // display: "none",
    },
  }));

  const TextContainer = styled(Box)(({ theme }) => ({
    width: "80%",
    marginLeft: "33%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      // backgroundColor: "#d2e3fc",
      opacity: "1",
      display: "flex",
      flexDirection: "column",
      marginLeft: "0%",
      // border: "1px solid #000000",
    },
  }));

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
  });

  const ContainerImage = styled("img")(({ theme }) => ({
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      marginTop: "20%",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
        width: "400px",
        height: mapHeightSmall(props.item.id),
        marginTop: "30vh",
        marginLeft: "0%",
    },
  }));

  const ContainedButton = styled(Button)(({ theme }) => ({
    margin: "2%",
  }));

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

  return (
    <>
      <MainContainer id="carousel1">
        <LeftContainer>
          <TextContainer>
            <HeadingText variant="h3" gutterBottom>
              {props.item.title}
            </HeadingText>
            {props.item.id === 2 ? (
              <ContentText variant="body1" gutterBottom>
                beyond traditional height measurement methods that require
                assistance. With <strong> MeasureUP </strong>, the process is
                automated and hassle free, saving your time.
              </ContentText>
            ) : (
              <ContentText variant="body1" gutterBottom>
                {props.item.description}
              </ContentText>
            )}

            <ButtonBox>
              <ContainedButton
                variant="contained"
                size="large"
                onClick={() => scrollToSection("support")}
              >
                Intrested
              </ContainedButton>
              <OutlinedButton
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("learn")}
              >
                Learn More
              </OutlinedButton>
            </ButtonBox>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <ContainerImage
            src={mapImages(props.item.id)}
            sx={{
              height: "auto",
              width: "auto",
              marginTop: mapMarginTop(props.item.id),
            }}
          />
        </RightContainer>
      </MainContainer>
    </>
  );
}

export default CarouselItem;
