import React from 'react'
import { Flex, Accordion, IconButton, PhoneIcon, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel, Container, SkeletonCircle, Box, text, Heading } from '@chakra-ui/react'

function AboutPage() {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }}
        fontWeight="extrabold"
        marginTop={"20px"}
        textAlign="center"
        color="gray.900"
        letterSpacing={{ base: 'tight', md: 'tighter' }}
        lineHeight={{ base: '110%', md: '120%' }}
        mb={{ base: 10, md: 12 }}
      >SOBRE WEEKLY PLANNER</Heading>
      <Accordion allowToggle
        margin={"100px"}
      >
        <AccordionItem>
          <h2 >
            <AccordionButton>
              <Box as="span" flex='1'
                fontWeight="extrabold"
                textAlign="center"
                color="gray.900"
                letterSpacing={{ base: 'tight', md: 'tighter' }}
                lineHeight={{ base: '110%', md: '120%' }}
              >
                Quienes somos
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius blanditiis aspernatur magni aperiam, iure explicabo voluptates harum rerum, illo nihil unde quaerat laboriosam aliquid quam veritatis quas deserunt nostrum porro totam quia enim corporis suscipit quasi? Odit, vel! Blanditiis sunt aut iure dolor! Eligendi totam, aut eaque distinctio assumenda optio nisi ea ipsa. Incidunt vel, recusandae nulla ab mollitia laboriosam ipsam nostrum odit architecto animi, itaque cum sequi sit cupiditate fuga ducimus unde assumenda sapiente officiis, temporibus beatae alias vero neque? Consequatur, dolorem ex! Deleniti eum optio nisi voluptatum vitae dolorem obcaecati! Consequatur, quaerat sed, ullam iusto modi explicabo, quam culpa unde quibusdam voluptatibus neque dolore esse rem. A hic et provident sit consequatur deserunt velit dolorum cumque sapiente laboriosam.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1'
                fontWeight="extrabold"
                textAlign="center"
                color="gray.900"
                letterSpacing={{ base: 'tight', md: 'tighter' }}
                lineHeight={{ base: '110%', md: '120%' }}
              >
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </>
  )
}

export default AboutPage
