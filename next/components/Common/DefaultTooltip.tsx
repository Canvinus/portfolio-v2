import { ReactNode } from 'react'
import { Tooltip } from '@chakra-ui/react'

export default function DefaultTooltip(props: {
  label: string
  children: ReactNode
}) {
  return (
    <Tooltip label={props.label} rounded={'lg'} userSelect={'none'}>
      {props.children}
    </Tooltip>
  )
}
