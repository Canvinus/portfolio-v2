import {
  Flex,
  Skeleton,
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
import Hacks from '@/components/Sectors/Hacks'

export default function Home() {
  const { isOpen, onToggle } = useDisclosure()
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    isOpen && setClosed(false)
  }, [isOpen])

  const [isAnimating, setIsAnimating] = useState(false)
  const handleAnimationStart = () => {
    setIsAnimating(true)
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false)
    !isOpen && setClosed(true)
  }

  const [sections, setSections] = useState({
    me: false,
    projects: false,
    hacks: false,
  })
  const handleVisibilityChanged = (section: string, visible: boolean) => {
    if (section === 'me') {
      setSections((sections) => ({ ...sections, me: visible }))
    }
    if (section === 'projects') {
      setSections((sections) => ({ ...sections, projects: visible }))
    }
    if (section === 'hacks') {
      setSections((sections) => ({ ...sections, hacks: visible }))
    }
  }

  const [selected, setSelected] = useState<string | null>(null)
  useEffect(() => {
    const lastVisible = Object.keys(sections).reduce(
      (acc: string | null, key: string) => {
        if (sections[key as keyof typeof sections]) {
          return key
        }
        return acc
      },
      null
    )
    setSelected(lastVisible)
  }, [sections])

  return (
    <>
      <PageHead title={'Andrey Gruzdev'} />
      <Stack
        direction={{ md: 'row', base: 'column' }}
        w={'100vw'}
        h={{ md: '100vh', base: '90vh' }}
        align={'center'}
        justify={'center'}
        spacing={'0'}
      >
        <Navbar onToggle={onToggle} selected={selected} />
        <Flex
          h={'100vh'}
          w={'100vw'}
          display={closed ? 'none' : 'flex'}
          py={20}
          pr={{ md: '5%' }}
          px={{ base: '5%' }}
        >
          <ScaleFade
            in={isOpen}
            initialScale={0.1}
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationEnd}
          >
            <Stack
              mt={{ base: '10', md: '0' }}
              borderWidth={'1px'}
              borderColor={'white'}
              borderStyle={'none'}
              rounded={'lg'}
              overflowY={'auto'}
              h={'100%'}
              w={'100%'}
              spacing={10}
            >
              <Me
                onVisibilityChanged={handleVisibilityChanged}
                opacity={isAnimating ? '0' : '1'}
              />
              <Projects
                onVisibilityChanged={handleVisibilityChanged}
                opacity={isAnimating ? '0' : '1'}
              />
              <Hacks
                onVisibilityChanged={handleVisibilityChanged}
                opacity={isAnimating ? '0' : '1'}
              />
            </Stack>
          </ScaleFade>
        </Flex>
      </Stack>
    </>
  )
}
