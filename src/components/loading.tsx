import { Center, Heading, HStack, Spinner } from "native-base";

export default function LoadingComponent(){
    return(
        
    <HStack space={2} justifyContent="center" mt={20}>
        <Center>
            <Spinner accessibilityLabel="Loading posts" size={'lg'} />
            <Heading color="primary.500" fontSize="2xl">Loading</Heading>
        </Center>
    </HStack>
    )
}