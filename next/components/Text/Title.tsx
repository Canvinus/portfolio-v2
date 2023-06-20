import { Heading } from '@chakra-ui/react'

export default function Title(props: { children: React.ReactNode }) {
  return <Heading textAlign={'center'}>{props.children}</Heading>
}
