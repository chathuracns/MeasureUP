import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import background1 from "./../Resources/Picture7.png";
import background2 from "./../Resources/Picture4.png";
import background3 from "./../Resources/Picture5.png";
import b1 from "./../Resources/7.png";
import b2 from "./../Resources/4.png";
import b3 from "./../Resources/5.png";

function mapImages(id) {
  switch (id) {
    case 1:
      return b1;
    case 2:
      return b2;
    case 3:
      return b3;
  }
}

function mapWidth(id) {
  switch (id) {
    case 1:
      return "65%";
    case 2:
      return "90%";
    case 3:
      return "120%";
  }
}

function mapMarginLeft(id) {
  switch (id) {
    case 1:
      return "-8%";
    case 2:
      return "0.5%";
    case 3:
      return "0.5%";
  }
}

function mapHeight(id) {
  switch (id) {
    case 1:
      return "450px";
    case 2:
      return "400px";
    case 3:
      return "100%";
  }
}

const MainContainer = styled(Box)({
  backgroundColor: "#d2e3fc",
  width: "100%",
  height: "82vh",
  display: "flex",
  flexDirection: "row",
});

const RightContainer = styled(Box)(({ theme }) => ({
  width: "45%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "5%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "10%",
  },
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  width: "55%",
  display: "flex",
  justifyContent: "left",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  width: "70%",
  marginLeft: "15%",
  
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: "00%",
  },
}));

const ButtonBox = styled(Box)({
  marginTop: "10%",
  display: "flex",
});

const HeadingText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "650",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0%",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0%",
  },
}));

const ContentText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "14px",
  width: "80%",
  
  [theme.breakpoints.down("md")]: {
    marginLeft: "0%",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0%",
  },
}));

const ContainerImage = styled("img")(({theme}) => ({
  marginTop: "3%",
  marginLeft: "18%",
  [theme.breakpoints.down('lg')]: {
    marginLeft: "-15%", 
    
},
  [theme.breakpoints.down('md')]: {
    marginTop: "10%",
    width: "95%",
    marginLeft: "7%",
    
},
}));

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
            sx={{ height: "auto", width: "auto", marginLeft: mapMarginLeft(props.item.id) }}
          />
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <HeadingText variant="h3" gutterBottom>
              {props.item.title}
            </HeadingText>
            {props.item.id === 2 ? (
              <ContentText variant="body1" gutterBottom>
                any where as its truly portable with its small size.{" "}
                <br /> Height measuring Unit&emsp;&ensp;19cm X 3.5cm X 7cm <br />
                Weight measuring Unit&emsp;&nbsp;28cm X 28cm X 1cm
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
        </RightContainer>
      </MainContainer>
    </>
  );
}

export default CarouselItem2;
