import React from 'react'
import CarouselData from '../Data/CarouselData'
import CarouselItem from './CarouselItem'
import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

function CarouselSection() {
  return (
    <>
    <Box>
        <Carousel>
            {
                CarouselData.map((item,i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    </Box>
    </>
  )
}

export default CarouselSection