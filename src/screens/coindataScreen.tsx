import { Box, Divider, Heading, HStack, Image, Text, View } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import LoadingComponent from "../components/loading";
import { getCoinDataQuery } from "../utils/query";

export default function CoinDataScreen(){
    const queryfn = getCoinDataQuery()
    const {data, isLoading} = useQuery('coinData', queryfn)

    return(
        <Box m={4}>
            <Heading textAlign={'center'} color="amber.700">Latest CryptoCurrency Coin Data</Heading>
            {
                isLoading ?
                    <LoadingComponent/>
                :
                <Box>
                <HStack ml={6} mt={6} mb={3} space={40}>
                    <Heading fontSize={'xl'} fontStyle="italic">Coin</Heading>
                    <Heading fontSize={'xl'} fontStyle="italic">Price</Heading>

                </HStack>
                <ScrollView>
                {
                    data.data.map((coin:any, index: number)=>{
                        return(
                            <Pressable key={index}>
                                <HStack m={2}>
                                    <HStack space={1} w={'180px'}>
                                        <Image mt={1} source={{uri: coin.image_url}} alt="Alternate Text" size="20.5" />
                                        <Text fontSize={'lg'}>{coin.name}</Text>
                                    </HStack>

                                    <Box>
                                        <Text fontWeight={'bold'} fontSize={'md'}>Rs. {parseFloat(coin.latest).toFixed(3)}</Text>
                                    </Box>
                                    
                                </HStack>
                                <Divider/>
                            </Pressable>
                            
                        )
                    })
                }
                </ScrollView>
                </Box>

                
            }
        </Box>
    )

}