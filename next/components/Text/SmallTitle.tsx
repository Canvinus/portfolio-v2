import { Heading } from '@chakra-ui/react'

export default function SmallTitle(props: {
  titleSize?: string
  isUppercase?: boolean
  children: React.ReactNode
  hasPb?: boolean
  hasUnderline?: boolean
}) {
  return (
    <Heading
      textDecoration={props.hasUnderline ? 'underline' : 'none'}
      textUnderlineOffset={'5px'}
      fontSize={props.titleSize || '2xl'}
      textTransform={props.isUppercase ? 'uppercase' : 'initial'}
      pb={props.hasPb ? 3 : 0}
    >
      {props.children}
    </Heading>
  )
}
