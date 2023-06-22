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
import Projects from '@/components/Sectors/Projects'

export default function Home() {
  const { isOpen, onToggle } = useDisclosure()
  const [closed, setClosed] = useState(true)
  useEffect(() => {
    isOpen && setClosed(false)
  }, [isOpen])

  const handleClose = () => {
    !isOpen && setClosed(true)
  }

  const [sections, setSections] = useState({ me: false, projects: false })
  const handleVisibilityChanged = (section: string, visible: boolean) => {
    console.log(section, visible)
    if (section === 'me') {
      setSections((sections) => ({ ...sections, me: visible }))
    }
    if (section === 'projects') {
      setSections((sections) => ({ ...sections, projects: visible }))
    }
  }

  const [selected, setSelected] = useState<string | null>(null)
  useEffect(() => {
    setSelected(sections.me ? 'me' : sections.projects ? 'projects' : null)
  }, [sections])

  return (
    <>
      <PageHead title={'Andrey Gruzdev'} />
      <Stack
        direction={{ md: 'row', base: 'column' }}
        w={'100vw'}
        h={'100vh'}
        align={'center'}
        justify={'center'}
        spacing={'0'}
      >
        <Navbar onToggle={onToggle} selected={selected} />
        <Flex
          h={{ md: '100vh', base: '80vh' }}
          w={'100vw'}
          display={closed ? 'none' : 'flex'}
          py={20}
          pr={{ md: '5%' }}
          px={{ base: '5%' }}
        >
          <ScaleFade
            in={isOpen}
            initialScale={0.1}
            onAnimationComplete={handleClose}
          >
            <Stack
              borderWidth={'1px'}
              borderColor={'white'}
              borderStyle={'none'}
              rounded={'lg'}
              overflowY={'auto'}
              h={'100%'}
              w={'100%'}
              spacing={10}
              p={4}
            >
              <Me onVisibilityChanged={handleVisibilityChanged} />
              <Projects onVisibilityChanged={handleVisibilityChanged} />
            </Stack>
          </ScaleFade>
        </Flex>
      </Stack>
    </>
  )
}
