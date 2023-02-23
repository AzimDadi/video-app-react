import { Button, Container, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
    return (
        <Container maxWidth={"container.xl"} height={"100vh"} padding={"16"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} width={["full", "96"]} margin={"auto"} marginY={"16"}>
                    <Heading textColor={"purple.500"}>Welcome Back</Heading>
                    <Input placeholder={"Email"} type={"email"} required focusBorderColor={"black"} />
                    <Input placeholder={"Password"} type={"password"} required focusBorderColor={"black"} />
                    <Button variant={"link"} alignSelf={"flex-end"} >
                        <Link to={"/forgetpassword"} >Forget Password?</Link>
                    </Button>

                    <Button colorScheme={"purple"} type={"submit"}>Log In</Button>
                    <HStack>
                        <Text textAlign={"right"}>New User?</Text>
                        <Button variant={"link"} colorScheme={"purple"} >
                            <Link to={"/signup"} >Sign Up</Link >
                        </Button>
                    </HStack>
                </VStack>
            </form>
        </Container>
    )
}

export default login
