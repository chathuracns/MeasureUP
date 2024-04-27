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
            return "700px";
        case 2:
            return "405px";
        case 3:
            return "550px";    
    }
}

const MainContainer = styled(Box)({
    backgroundColor: "#9FC7FF",
    width: "100%",
    height: "82vh",
    display:"flex",
    flexDirection: "row",
});

const LeftContainer = styled(Box)({
    width: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const RightContainer = styled(Box)({
    width: "70%",
    display: "flex",
    justifyContent: "center",
});

const TextContainer = styled(Box)({
    width: "80%",
    marginLeft: "33%",
});

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

const ContainerImage = styled('img')({
    width: "50%",
    marginLeft: "10%",
    marginTop: "2%"
});

const ContainedButton = styled(Button)({
    margin: "2%"
});

const OutlinedButton = styled(Button)({
    backgroundColor: "#ffffff",
    margin: "2%",
    color: "#1578FF",
    border: "1px solid #1578FF",
});

function CarouselItem(props) {
  return (
    <>
        <MainContainer>
            <LeftContainer>
                <TextContainer>
                    <HeadingText variant="h3" gutterBottom>
                    {props.item.title}
                    </HeadingText>
                    <ContentText variant="body1" gutterBottom>
                    {props.item.description}
                    </ContentText>
                    <ButtonBox>
                        <ContainedButton variant="contained" size="large">
                            Intrested
                        </ContainedButton>
                        <OutlinedButton variant="outlined" size="large">
                            Learn More
                        </OutlinedButton>
                    </ButtonBox>
                </TextContainer>
            
            </LeftContainer>
            <RightContainer>
                <ContainerImage
                    src= {mapImages(props.item.id)}
                    sx={{height: "auto", width: mapWidth(props.item.id)}}
                />
            </RightContainer>    
        </MainContainer>
    </>
  )
}

export default CarouselItem