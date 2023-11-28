import { bg, color } from '@/utils/theme'
import { Tooltip } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function DefaultTooltip(props: {
  label: string
  children: ReactNode
}) {
  return (
    <Tooltip
      label={props.label}
      rounded={'lg'}
      userSelect={'none'}
      bg={color}
      color={bg}
    >
      {props.children}
    </Tooltip>
  )
}
