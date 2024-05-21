import { Box, styled } from '@mui/material';
import React from 'react'
import Group from "./../Resources/group Photo.png";

const ContainerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "70vh",
    [theme.breakpoints.down("md")]: {
        height: "80vh",
        
    },
    [theme.breakpoints.down("sm")]: {
        height: "40vh",
    },
    
}));

const ImageBox = styled(Box)(({theme}) => ({
}));

const GroupImage = styled("img") (({theme}) => ({
    width: "50%",
    marginLeft: "25%",
    marginTop: "1%",
    [theme.breakpoints.down("lg")]: {
        width: "63%",
        marginLeft: "20%",
    },
    [theme.breakpoints.down("md")]: {
        marginTop: "7%",
        width: "83%",
        marginLeft: "10%",
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: "0%",
        marginLeft: "0%",
        width: "100%",
    },
}));

function TeamSection() {
  return (
    <>
        <ContainerBox id="team">
            <ImageBox>
                <GroupImage src={Group} alt='Group Photo' />
            </ImageBox>
        </ContainerBox>
    </>
  )
}

export default TeamSection