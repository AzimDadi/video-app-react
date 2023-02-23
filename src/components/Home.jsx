import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  position: "absolute",
  left: "50%",
  top: ["35%","20%"],
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  padding: "4",
  size: ["20px", "3xl"]
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxWidth={'container.xl'} minHeight={"100vh"} padding={"16"}>
        <Heading textTransform={"uppercase"} py={"2"} width={"fit-content"} borderBottom={"2px solid"} margin={"auto"} >
          Services
        </Heading>

        <Stack height={"full"} padding={"4"} alignItems={"center"} direction={["column", "row"]}>
          <Img src={img5} height={["40", "400"]} filter={"hue-rotate(-130deg)"} />


          <Text letterSpacing={"widest"} lineHeight={"190%"} padding={["4", "10"]} textalign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam ipsam!
            Alias veniam cumque eveniet aperiam nihil praesentium aspernatur reiciendis excepturi optio ea animi perspiciatis quia nemo vel numquam,
            quae debitis rem tempora? Saepe perspiciatis vitae nostrum distinctio eveniet voluptate quibusdam sunt.
            Ducimus adipisci alias quas odio sit quos maxime odit ipsam expedita vero illum, hic praesentium iure et est similique voluptates esse neque,
            perferendis vitae molestiae tempora rerum aliquam non.
            Incidunt temporibus deleniti nobis, minima tenetur dolor! Asperiores recusandae iusto a quo alias, expedita odio consectetur sapiente harum id?
          </Text>
        </Stack>


      </Container>
    </Box>
  )
}

const MyCarousel = () => (
  <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box width={"full"} height={"100vh"}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>

    <Box width={"full"} height={"100vh"}>
      <Image src={img2} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
      </Heading>
    </Box>

    <Box width={"full"} height={"100vh"}>
      <Image src={img3} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
      </Heading>
    </Box>

    <Box width={"full"} height={"100vh"}>
      <Image src={img4} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
      </Heading>
    </Box>

  </Carousel>
)


export default Home;
