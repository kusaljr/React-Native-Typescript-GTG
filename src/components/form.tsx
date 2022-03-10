import { Button, Center, FormControl, Input, Text, VStack } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../redux/reducers/counterSlice";
export default function FormTemplate() {
    const [formData, setData] = React.useState<any>({});
    const [errors, setErrors] = React.useState<any>({});
    
    const dispatch = useDispatch()
    
    const validate = () => {
      if (formData.value === undefined) {
        setErrors({ ...errors,
          value: 'Value is required'
        });
        return false;
      }
      setErrors({})
      return true;
    };
  
    const onSubmit = () => {
      if(validate()){
        dispatch(incrementByAmount(parseInt(formData.value)))
        setData({})

      }
      else{
          console.log('Validation Failed')
          // do your stuff
      }
    };
  
    return (
        <Center mt={5}>
            <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label _text={{
                bold: true
                }}>Value</FormControl.Label>
                <Input placeholder="2103" onChangeText={value => setData({ ...formData,
                value: value
                })} />
                {errors.value != undefined ? 
                <Text color={'red.500'} fontStyle="italic">{errors.value}</Text>  : <FormControl.HelperText>
                     Enter the value to increment
                    </FormControl.HelperText>}
                </FormControl>
                <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                Submit
                </Button>
            </VStack>
        </Center>
      )
  }
  