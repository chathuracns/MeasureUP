import React from 'react'
import CarouselData from '../Data/CarouselData'
import CarouselItem from './CarouselItem'
import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

function CarouselSection() {
  return (
    <>
    <Box>
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
    </Box>
    </>
  )
}

export default CarouselSection