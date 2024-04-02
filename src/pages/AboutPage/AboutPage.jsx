import React from 'react';
import { Flex, Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel, Box, Heading, Image } from '@chakra-ui/react';
import AboutImage from '../../assets/AboutImage.jpeg';

function AboutPage() {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
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

      <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" align="center" marginBottom="50px">
        <Box width={{ base: '90%', md: '50%' }} marginBottom={{ base: '20px', md: '0' }}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontWeight="extrabold" textAlign="center" color="gray.900">
                    Quiénes somos
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                WeeklyPlanner es una aplicación web diseñada para ayudarte a organizar tu semana de manera eficiente. Nuestro objetivo es proporcionarte una herramienta fácil de usar que te permita planificar tus tareas, eventos y metas de manera efectiva, para que puedas alcanzar tus objetivos con éxito.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontWeight="extrabold" textAlign="center" color="gray.900">
                    Misión y visión
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Nuestra misión es proporcionarte una experiencia de planificación semanal intuitiva y personalizable que se adapte a tus necesidades individuales. Nos esforzamos por ser tu compañero confiable en el camino hacia la productividad y el éxito. Nuestra visión es convertirnos en la herramienta de planificación líder en el mercado, ayudando a personas de todo el mundo a alcanzar sus objetivos de manera efectiva y eficiente.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontWeight="extrabold" textAlign="center" color="gray.900">
                    Nuestro Equipo
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Conoce al equipo detrás de Weekly Planner. Estamos formados por profesionales apasionados y dedicados que trabajan juntos para brindarte la mejor experiencia de planificación posible.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontWeight="extrabold" textAlign="center" color="gray.900">
                    Valores de la Empresa
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                En Weekly Planner, nos regimos por un conjunto de valores fundamentales que guían nuestra forma de trabajar y nuestra interacción con nuestros usuarios. Estos valores incluyen la integridad, la innovación, el compromiso con la excelencia y el enfoque en el cliente.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' fontWeight="extrabold" textAlign="center" color="gray.900">
                    Historia de la Empresa
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Descubre cómo comenzó Weekly Planner y cómo hemos crecido y evolucionado a lo largo del tiempo. Desde nuestros humildes comienzos hasta convertirnos en una herramienta de planificación líder en el mercado, te contamos nuestra historia.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

        </Box>

        <Box width={{ base: '90%', md: '40%' }} marginBottom={{ base: '20px', md: '0' }}>
          <Image src={AboutImage} alt="About Us Image" borderRadius="md" boxShadow="lg" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default AboutPage;
