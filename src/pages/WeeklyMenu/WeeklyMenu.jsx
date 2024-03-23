import React from 'react'
import { Flex, List, ListItem, ListIcon, Heading, Checkbox, text } from '@chakra-ui/react'

function WeeklyMenu() {
    const probando = ["patata", "arroz", "pasta"]

    return (
        <>
            <Heading
                textAlign={"center"}
                padding={"22px 56px"}
            >TU LISTA DE LA COMPRA</Heading>
            <List spacing={3}
                textAlign={"center"}
            >
                <ListItem>
                    <Checkbox defaultChecked>Checkbox</Checkbox>
                </ListItem>
                <ListItem>
                    <List spacing={3}>
                        <ListItem>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </ListItem>
                        <ListItem>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </ListItem>
                        <ListItem>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </ListItem>
                        <ListItem>
                            <List spacing={3}>
                                <ListItem>
                                    <Checkbox defaultChecked>Checkbox</Checkbox>
                                </ListItem>
                                <ListItem>
                                    <Checkbox defaultChecked>Checkbox</Checkbox>
                                </ListItem>
                                <ListItem>
                                    <Checkbox defaultChecked>Checkbox</Checkbox>
                                </ListItem>

                                <ListItem>
                                    <Checkbox defaultChecked>Checkbox</Checkbox>
                                </ListItem>
                            </List>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Checkbox defaultChecked>Checkbox</Checkbox>
                </ListItem>

                <ListItem>
                    <List spacing={3}>
                        <ListItem>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </ListItem>
                        <ListItem>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </ListItem>
                        <ListItem>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </ListItem>

                        <ListItem>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
        </>
    )
}

export default WeeklyMenu