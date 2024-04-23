import React from 'react'
import CarouselData from '../Data/CarouselData'
import CarouselItem from './CarouselItem'
import { Box, styled } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

const CarouselContainer = styled(Box)({
    marginTop:"6.5%"
});

function CarouselSection() {
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
        }}>

            {
                CarouselData.map((item,i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    </CarouselContainer>
    </>
  )
}

export default CarouselSection