import { Box ,Text ,Flex ,Image, Center} from '@chakra-ui/react'
import React from 'react'

const Built_App = () => {
  return (
    <Box>
        <Box  w = '95%' m = 'auto' mt = '2%' bgColor={'#fafafa'} h = "900px" p = '40px' pb = "15%">
            <Box w = "70%" m = 'auto'   pb = '50px'>
                <Text textAlign={'center'} fontSize={'50px'} fontWeight={'600'}>Built-in Apps</Text>
                <Text textAlign={'center'} fontSize={'18px'}>Powerful creativity and productivity tools live inside every Mac — apps that help you explore,</Text>
                <Text textAlign={'center'} fontSize={'18px'}>connect and work more efficiently.</Text>

                <Box w = '100%' mt = "4%"  pb = '3%' >
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Box >
                            <Image src = 'https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/nav_icon_safari__b4hes9xilhjm_large.jpg'></Image>
                            <Text textAlign={'center'}>Safari</Text>
                        </Box>
                        <Box >
                        <Image src = 'https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/nav_icon_photos__f2izri0oyzee_large.jpg'></Image>
                        <Text textAlign={'center'}>Photos</Text>

                        </Box>
                        <Box >
                        <Image src = 'https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/nav_icon_imovie__b0pjfv6j5w9y_large.jpg'></Image>
                            <Text textAlign={'center'}>iMovie</Text>

                        </Box>
                        <Box >
                            <Center>
                            <Image src = 'https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/nav_icon_garageband__cxmciudp6k02_large.jpg'
                            margin={"center"}
                            ></Image>
                            </Center>
                            <Text  >GarageBand</Text>

                        </Box>
                        <Box >
                        <Image src = 'https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/nav_icon_pages__ci5gjd3xa5si_large.jpg'></Image>
                            <Text textAlign={'center'}>Pages</Text>


                        </Box>
                        <Box >
                            <Center>
                        <Image src = 'https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/nav_icon_numbers__e9eog351v3iy_large.jpg'></Image></Center>
                            <Text textAlign={'center'}>Numbers</Text>

                        </Box>
                         <Box >
                        <Center>
                         <Image src = 'https://www.apple.com/v/mac/home/bs/images/overview/macos/built-in-apps/nav_icon_keynote__e5b6yp23dx2e_large.jpg'></Image></Center>
                            <Text textAlign={'center'}>Keynotes</Text>
                         </Box>

                    </Flex>
                </Box>
                <hr></hr>

                <Text textAlign={'center'} mt = '30px'>Keep your growing library organised and accessible. Perfect your images and create</Text>

                <Text textAlign={'center'}> beautiful gifts for sharing. And with iCloud Photos, you can store a lifetime’s worth of photos </Text>
                <Text textAlign={'center'}> and videos in the cloud.</Text>
                <Text textAlign={'center'} mt = '10px' color = 'blue' cursor={'pointer'} fontSize={'18px'} _hover={{textDecoration:"underline"}}>Learn more about Photos</Text>

                <Box w = "70%" m = 'auto' mt = '5%' >
                    <Image src = 'https://www.apple.com/in/mac/home/images/overview/macos/built-in-apps/bia_photos__cz11vic5lncm_large.jpg'>

                    </Image>
                </Box>
            </Box>
           

        </Box>
    </Box>
  )
}

export default Built_App