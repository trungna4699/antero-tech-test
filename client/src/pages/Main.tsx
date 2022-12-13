import React, {useState} from 'react';
import { 
    Box, 
    Text, 
    Grid, 
    GridItem,
    Button,
    Heading,
    Image,
    Input
} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        // console.log(book);
        // postAddBooks(book);
        navigate("/BingoGame");
    }

    return (        
        <Box p='20px'>
            <Text>Please enter your name:</Text>
            <Input  w='50%' placeholder='Enter your name here!' />
            <Button onClick={handleClick} colorScheme='green'>Enter</Button>
        </Box>  
    )
}

export default Main;