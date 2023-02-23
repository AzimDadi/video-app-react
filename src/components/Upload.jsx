import { Button, Container, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
    return (
        <Container maxWidth={"container.xl"} height={"100vh"} padding={"16"}>
            <VStack color={"purple.500"} height={"full"} justifyContent={"center"}>
            <Heading textAlign={"center"}>Upload Video</Heading>
                <AiOutlineCloudUpload size={"10vmax"} />
                <form>
                    <HStack>
                        <Input required type={"file"} css={{ "&::file-selector-button": { border: "none", width: "clac(100%+36px)", height: "100%", marginLeft: "-18px", color: "purple", backgroundColor: "white", cursor: "pointer" } }} />
                        <Button colorScheme={"purple"} type={"submit"}>Upload</Button>
                    </HStack>
                </form>

            </VStack>

        </Container>
    )
}

export default Upload
