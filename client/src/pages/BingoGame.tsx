import React, {useState} from 'react';
import { 
    Box, 
    Text, 
    Grid, 
    GridItem,
    Button,
    Heading,
    Image,
    Container
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export type Tiles = {
    id: number;
    value: string;
};

function shuffle(array : number[]) {
    array.sort(() => Math.random() - 0.5);
    // const newArr = array.map(String);
    // newArr.splice(12, 0, 'FREE')
    // return(newArr);
}

const numberSet = Array.from(Array(100), (_, i) => i+1);
// const numbertileSet = shuffle(numberSet).slice(0, 25);
// console.log(tileSet);

const Tile = (children: any, tileClick: any, handleClick: any ) => {
    return (
        <GridItem 
        h='70px' 
        bg={tileClick ? 'red.400' : 'cyan.700'} 
        display="flex"
        alignItems="center"
        justifyContent='center'
        onClick={handleClick}
        >
            {children}
        </GridItem>
    );
}

const BingoGame = () => {    
    const [tileClick, setTileClick] = useState(false);
    const [tileSet, setTileSet] = useState([] as string[]);

    const handleClick = () => { 
        setTileClick(current => !current);
    };

    const onReset = () => {
        shuffle(numberSet);
        let numberTileSet = numberSet.map(String);
        numberTileSet.splice(12, 0, 'FREE');
        numberTileSet = numberTileSet.slice(0, 25);
        setTileSet(numberTileSet);
    };

    return (        
        <Box p='20px'>
            <Container maxW='container.md' bg='teal.700' mt='50px' p='20px'>
                <Grid
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    {tileSet?.map(item => (
                        <GridItem 
                            h='60px' 
                            bg={tileClick ? 'red.400' : 'cyan.700'} 
                            key={item}
                            display="flex"
                            alignItems="center"
                            justifyContent='center'
                            onClick={handleClick}
                        >
                            {item}
                        </GridItem>               
                    ))} 

                </Grid>
            </Container>

            <Button mt='20px' bg='orange.600' onClick={onReset}>Generate new Card</Button>
        </Box>  
    )
}

export default BingoGame;