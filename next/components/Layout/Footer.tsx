import { Box, Text, Flex } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box position={'fixed'} bottom={'0'} p={2} zIndex={20} w={'full'}>
      <Flex align={'center'} justify={'center'}>
        <Text textTransform={'uppercase'}>COPYRIGHT © 2023 AGRUZ.DEV</Text>
      </Flex>
    </Box>
  )
}
