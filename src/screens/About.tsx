import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Box, Center, Heading, Text } from 'native-base'
import React from 'react'
import { Pressable, View } from 'react-native'
import { RootStackParamList } from '../types/types'

type aboutScreenProp = StackNavigationProp<RootStackParamList, 'About'>
export default function AboutScreen(){
    const navigation = useNavigation<aboutScreenProp>();
    return(
        <View>
            <Box mt={5}>
                <Center>
                    <Heading>Hello from About Screen</Heading>
                </Center>
            </Box>
            <Pressable onPress={()=>navigation.navigate('Home')}>
                <Box p={3} w={40} m={6} bg={'amber.100'}>
                    <Text color={'blue.700'}>
                        Go to Home Page
                    </Text>
                </Box>

            </Pressable>
        </View>
    )
}