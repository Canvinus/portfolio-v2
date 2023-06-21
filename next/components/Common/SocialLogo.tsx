import { SocialIcon } from 'react-social-icons'
import { Center, Tooltip } from '@chakra-ui/react'

export default function SocialLogo(props: { url: string; label?: string }) {
  return (
    <Tooltip label={props.label} rounded={'lg'}>
      <Center zIndex={20}>
        <SocialIcon
          url={props.url}
          bgColor={'white'}
          target={'_blank'}
          style={{ width: 26, height: 26 }}
        />
      </Center>
    </Tooltip>
  )
}
