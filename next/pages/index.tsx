import {
  Flex,
  Heading,
  ScaleFade,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Navbar from '@/components/Layout/Navbar/Navbar'
import PageHead from '@/components/Common/PageHead'
import Me from '@/components/Sectors/Me'

export default function Home() {
  const { isOpen, onToggle } = useDisclosure()
  const [closed, setClosed] = useState(true)
  useEffect(() => {
    isOpen && setClosed(false)
  }, [isOpen])

  const handleClose = () => {
    !isOpen && setClosed(true)
  }

  return (
    <>
      <PageHead title={'Andrey Gruzdev'} />
      <Stack
        direction={'row'}
        w={'100vw'}
        h={'100vh'}
        align={'center'}
        justify={'center'}
        spacing={'0'}
      >
        <Navbar onToggle={onToggle} />
        <Flex
          h={'100vh'}
          w={'100vw'}
          display={closed ? 'none' : 'flex'}
          py={20}
          pr={20}
        >
          <ScaleFade
            in={isOpen}
            initialScale={0.1}
            onAnimationComplete={handleClose}
          >
            <Stack
              borderWidth={'1px'}
              borderColor={'white'}
              borderStyle={'dotted'}
              rounded={'md'}
              overflowY={'auto'}
              h={'100%'}
              w={'100%'}
            >
              <Me />
            </Stack>
          </ScaleFade>
        </Flex>
      </Stack>
    </>
  )
}
