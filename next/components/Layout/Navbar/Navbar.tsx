import { useState } from 'react'
import { Heading, Stack, Flex, Container } from '@chakra-ui/react'
import { Links } from '@/utils/links'

import NextLink from 'next/link'

export default function Navbar(props: { onToggle: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (selected === e.currentTarget.href) {
      setSelected(null)
      props.onToggle()
      return
    }
    setSelected(e.currentTarget.href)

    !selected && props.onToggle()
  }

  return (
    <Stack
      textTransform={'uppercase'}
      textAlign={'center'}
      alignItems={'center'}
      zIndex={20}
      w={'100%'}
    >
      {Links.map((link: { label: string; href: string }, i: number) => (
        <Flex key={i}>
          <NextLink href={link.href} onClick={(e) => handleSelect(e)}>
            <Heading
              _hover={{ fontWeight: 'bold' }}
              fontWeight={'light'}
              textDecoration={
                selected?.endsWith(link.href) ? 'underline' : 'none'
              }
            >
              {link.label}
            </Heading>
          </NextLink>
        </Flex>
      ))}
    </Stack>
  )
}
