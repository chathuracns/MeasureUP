import { Box, styled } from '@mui/material';
import React from 'react'
import Group from "./../Resources/group Photo.png";
import Group1 from "./../Resources/group photo 1.png";


const ContainerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "70vh",
    [theme.breakpoints.down("md")]: {
        height: "80vh",
        
    },
    [theme.breakpoints.down("sm")]: {
        height: "45vh",
    },
    
}));

const ImageBox = styled(Box)(({theme}) => ({
}));

const GroupImage = styled("img") (({theme}) => ({
    width: "45%",
    marginLeft: "27.5%",
    marginTop: "1%",
    [theme.breakpoints.down("lg")]: {
        width: "50%",
        marginLeft: "25%",
        marginTop: "2%",
    },
    [theme.breakpoints.down("md")]: {
        marginTop: "10%",
        width: "65%",
        marginLeft: "17.5%",
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: "2%",
        marginLeft: "5%",
        width: "90%",
    },
}));

function TeamSection() {
  return (
    <>
        <ContainerBox id="team">
            <ImageBox>
                <GroupImage src={Group1} alt='Group Photo' />
            </ImageBox>
        </ContainerBox>
    </>
  )
}

export default TeamSection