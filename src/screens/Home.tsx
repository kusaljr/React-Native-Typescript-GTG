import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Box, Button, Center, Heading, HStack, Text } from 'native-base'
import React from 'react'
import { Pressable, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import FormTemplate from '../components/form'
import { decrement, increment } from '../redux/reducers/counterSlice'
import { RootState } from '../redux/store'
import { RootStackParamList } from '../types/types'

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export default function HomeScreen(){
    const selector = useSelector((state: RootState)=>state.counter)
    const dispatch = useDispatch()
    const navigation = useNavigation<homeScreenProp>();
    return(
        <ScrollView>
            <Box mt={5}>
                <Center>
                    <Heading>Hello from Home Screen</Heading>
                </Center>
            </Box>
            <Pressable onPress={()=>navigation.navigate('About')}>
                <Box p={3} w={40} m={6} bg={'amber.100'}>
                    <Text color={'blue.700'}>
                        Go to About Page
                    </Text>
                </Box>
            </Pressable>
            <Center>
                <Heading m={5}>Counter: {selector.value}</Heading>
                <HStack space={3} alignItems={'center'}>
                    <Button onPress={() => dispatch(increment())}>Increase</Button>
                    <Button onPress={() => dispatch(decrement())}>Decrease</Button>
                </HStack>
            </Center>
            <FormTemplate/>
            
        </ScrollView>
    )
}