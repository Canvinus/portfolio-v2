import { Box, Text, Flex } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      position={'fixed'}
      bottom={'0'}
      p={2}
      zIndex={20}
      w={'full'}
      userSelect={'none'}
    >
      <Flex align={'center'} justify={'center'}>
        <Text textTransform={'uppercase'}>COPYRIGHT © 2026 AGRUZ.DEV</Text>
      </Flex>
    </Box>
  )
}
