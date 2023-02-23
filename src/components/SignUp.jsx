import { Avatar, Button, Container, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <Container maxWidth={"container.xl"} height={"130vh"} padding={"16"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} width={["full", "96"]} margin={"auto"} marginY={"16"}>
                    <Heading textAlign={"center"} textColor={"purple.500"}>VIDEO</Heading>
                    <Avatar alignSelf={"center"} boxSize={"32"} />
                    <Input placeholder={"Nme"} type={"text"} required focusBorderColor={"black"} />
                    <Input placeholder={"Email"} type={"email"} required focusBorderColor={"black"} />
                    <Input placeholder={"Password"} type={"password"} required focusBorderColor={"black"} />
                    

                    <Button colorScheme={"purple"} type={"submit"}>Sign In</Button>
                    <HStack>
                        <Text textAlign={"right"}>Already Signed Up?</Text>
                        <Button variant={"link"} colorScheme={"purple"} >
                            <Link to={"/login"} >Login Now</Link>
                        </Button>
                    </HStack>
                </VStack>
            </form>
        </Container>
    )
}



export default SignUp
