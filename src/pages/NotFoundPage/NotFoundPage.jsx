import { Flex, Text } from "@chakra-ui/react"
import React from "react"

const NotFoundPage = () => {
    return (
        <Flex
            height={"calc(100vh - 322px)"}
            flexDir={"column"}
            gap={"12px"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Text fontWeight={"bold"} fontSize={"52px"}>
                404!!
            </Text>
            <Text fontWeight={"bold"} fontSize={"52px"}>
                Sorry, page not found:(
            </Text>
        </Flex>
    )
}

export default NotFoundPage