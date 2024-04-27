import React from 'react'
import CarouselData from '../Data/CarouselData'
import CarouselItem from './CarouselItem'
import { Box, styled } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import CarouselData2 from '../Data/CarouselData2'
import CarouselItem2 from './CarouselItem2'

const CarouselContainer = styled(Box)({
    marginTop:"5%"
});

function CarouselSection(props) {
  return (
    <>
    <CarouselContainer>
        <Carousel indicatorIconButtonProps={{
            style: {
                color: "#9FC7FF",
                
            }
        }} activeIndicatorIconButtonProps={{
            style: {
                color: '#026CFF' // 2
            }
        }}
        navButtonsAlwaysVisible = {true}
        >
            {props.item === "item1"?
                CarouselData.map((item,i) => <CarouselItem key={i} item={item} />)
            : CarouselData2.map((item,i) => <CarouselItem2 key={i} item={item} />)}
            
        </Carousel>
    </CarouselContainer>
    </>
  )
}

export default CarouselSection