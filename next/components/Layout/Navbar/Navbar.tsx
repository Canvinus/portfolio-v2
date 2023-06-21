import { useEffect, useState } from 'react'
import { Heading, Stack, Flex, Container } from '@chakra-ui/react'
import { Links } from '@/utils/links'

import NextLink from 'next/link'

export default function Navbar(props: {
  onToggle: () => void
  selected: string | null
}) {
  const [selected, setSelected] = useState<string | null>(props.selected)
  useEffect(() => {
    setSelected(props.selected)
  }, [props.selected])

  const handleSelect = (e: any) => {
    if (selected?.toUpperCase() === e.target.innerText?.toUpperCase()) {
      setSelected(null)
      props.onToggle()
      return
    }
    setSelected(e.target.innerText)

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
          <NextLink href={link.href}>
            <Heading
              onClick={(e) => handleSelect(e)}
              _hover={{ fontWeight: 'bold' }}
              fontWeight={'light'}
              textDecoration={
                selected?.toUpperCase() === link.label?.toUpperCase()
                  ? 'underline'
                  : 'none'
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
