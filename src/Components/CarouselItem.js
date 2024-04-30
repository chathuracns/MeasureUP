import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react'
import background1 from "./../Resources/MeasureUP png_1.jpg";
import background2 from "./../Resources/MeasureUP png_2.jpg";
import background3 from "./../Resources/MeasureUP png_3.png";

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
            return "70%";
        case 2:
            return "45%";
        case 3:
            return "60%";    
    }
}

const MainContainer = styled(Box)({
    backgroundColor: "#9FC7FF",
    width: "100%",
    height: "82vh",
    display:"flex",
    flexDirection: "row",
});

const LeftContainer = styled(Box)(({theme}) => ({
    width: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
        width: "100%"
    },
}));

const RightContainer = styled(Box)(({ theme }) => ({
    width: "80%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
        display: "none",
    },
    [theme.breakpoints.down('md')]: {
        
    },
}));


const TextContainer = styled(Box)(({theme}) => ({
    width: "80%",
    marginLeft: "33%",
    [theme.breakpoints.down('sm')]: {
        marginLeft: "10%"
    },
    [theme.breakpoints.down('md')]: {
        width: "100%"
    },
}));

const ButtonBox = styled(Box)({
    marginTop: "10%",
    display: "flex",
});

const HeadingText = styled(Typography)({
    fontFamily: "Poppins",
    fontSize: "32px",
    fontWeight: "650"
});

const ContentText = styled(Typography)({
    fontFamily: "Poppins",
    fontSize: "14px"
});

const ContainerImage = styled('img')(({theme}) => ({
    marginLeft: "10%",
    marginTop: "2%",
    [theme.breakpoints.down('md')]: {
        marginTop: "5%",
        maxWidth: "105%",
    },
}));


const ContainedButton = styled(Button)(({theme})=> ({
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

function CarouselItem(props) {
  return (
    <>
        <MainContainer id="carousel1">
            <LeftContainer>
                <TextContainer>
                    <HeadingText variant="h3" gutterBottom>
                    {props.item.title}
                    </HeadingText>
                    <ContentText variant="body1" gutterBottom>
                    {props.item.description}
                    </ContentText>
                    <ButtonBox>
                        <ContainedButton variant="contained" size="large" onClick={() => scrollToSection("support")}>
                            Intrested
                        </ContainedButton>
                        <OutlinedButton variant="outlined" size="large" onClick={() => scrollToSection("learn")}>
                            Learn More
                        </OutlinedButton>
                    </ButtonBox>
                </TextContainer>
            
            </LeftContainer>
            <RightContainer>
                <ContainerImage
                    src= {mapImages(props.item.id)}
                    sx={{height: "auto", width: {md: "80%" ,lg: mapWidth(props.item.id)}}}
                />
            </RightContainer>    
        </MainContainer>
    </>
  )
}

export default CarouselItem