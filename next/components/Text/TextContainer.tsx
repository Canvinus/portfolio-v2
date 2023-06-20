import { Stack } from '@chakra-ui/react'

export default function TextContainer(props: { children: React.ReactNode }) {
  return (
    <Stack spacing={2} textIndent={'20px'}>
      {props.children}
    </Stack>
  )
}
