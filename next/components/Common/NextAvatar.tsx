import { Flex } from '@chakra-ui/react'

import Image from 'next/image'

export default function NextAvatar(props: {
  src: string
  alt: string
  size: number
  display?: string
}) {
  return (
    <Flex display={props.display}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.size}
        height={props.size}
        style={{ borderRadius: '50%' }}
      />
    </Flex>
  )
}
