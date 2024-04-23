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

const MainContainer = styled(Box)({
    backgroundColor: "#9FC7FF",
    width: "100%",
    height: "80vh",
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
});

const TextContainer = styled(Box)({
    width: "80%",
    marginLeft: "7%",
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
    width: "700px",
    marginLeft: "10%",
    height: "70vh",
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
                />
            </RightContainer>    
        </MainContainer>
    </>
  )
}

export default CarouselItem