import { Heading } from '@chakra-ui/react'

export default function SmallTitle(props: {
  titleSize?: string
  children: React.ReactNode
}) {
  return (
    <Heading fontSize={props.titleSize || '2xl'} textTransform={'uppercase'}>
      {props.children}
    </Heading>
  )
}
