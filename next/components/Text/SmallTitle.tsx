import { Heading } from '@chakra-ui/react'

export default function SmallTitle(props: { children: React.ReactNode }) {
  return (
    <Heading fontSize={'2xl'} textTransform={'uppercase'} textIndent={'20px'}>
      {props.children}
    </Heading>
  )
}
