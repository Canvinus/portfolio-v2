import { SocialIcon } from 'react-social-icons'
import { Center } from '@chakra-ui/react'

import DefaultTooltip from './DefaultTooltip'

export default function SocialLogo(props: { url: string; label: string }) {
  return (
    <DefaultTooltip label={props.label}>
      <Center zIndex={20}>
        <SocialIcon
          url={props.url}
          bgColor={'white'}
          target={'_blank'}
          style={{ width: 26, height: 26 }}
        />
      </Center>
    </DefaultTooltip>
  )
}
