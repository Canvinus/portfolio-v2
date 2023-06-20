import { ReactNode } from 'react'
import { Stack } from '@chakra-ui/react'

import SmallTitle from '@/components/Text/SmallTitle'

export default function TitledSection(props: {
  title: string
  titleSize?: string
  children: ReactNode
  spacing?: string
}) {
  return (
    <Stack>
      <SmallTitle titleSize={props.titleSize}>{props.title}</SmallTitle>
      <Stack spacing={props.spacing}>{props.children}</Stack>
    </Stack>
  )
}
