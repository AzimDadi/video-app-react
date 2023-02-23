import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
    return (
        <Box backgroundColor={"blackAlpha.900"} minHeight={"40"} padding={"16"} color={"white"} marginBottom={["40", "0"]}>
            <Stack direction={["column", "row"]}>
                {/* 1 */}
                <VStack alignItems={"stretch"} width={"full"} px={"4"}>
                    <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                        Subscribe to get updates
                    </Heading>
                    <HStack borderBottom={"2px solid white"} paddingTop={"2"}>
                        <Input placeholder={"Enter Email Here..."} border={"none"} borderRadius={"none"} outline={"none"}
                            focusBorderColor={"white"} />
                        <Button padding={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                            <AiOutlineSend size={"20"} />
                        </Button>
                    </HStack>
                </VStack>
                {/* 2 */}
                <VStack width={"full"} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]}>
                    <Heading textTransform={"uppercase"} textAlign={"center"}>
                        Video
                    </Heading>
                    <Text>All rights received</Text>

                </VStack>
                {/* 3 */}
                <VStack width={"full"} >
                    <Heading size={"md"} textTransform={"uppercase"}>
                        Social Media
                    </Heading>
                    <Button variant={"link"} colorScheme={"white"}>
                        <a target={"blank"} href="https://youtube.com">
                            Youtube
                        </a>
                    </Button>
                    <Button variant={"link"} colorScheme={"white"}>
                        <a target={"blank"} href="https://instagram.com">
                            Instagram
                        </a>
                    </Button>
                    <Button variant={"link"} colorScheme={"white"}>
                        <a target={"blank"} href="https://github.com">
                            GitHub
                        </a>
                    </Button>
                </VStack>


            </Stack>
        </Box>
    )
}

export default Footer
