import { HStack, Box } from '@chakra-ui/react'
import { socials } from '@/utils/info'

import SocialLogo from '../Common/SocialLogo'

export default function Header() {
  return (
    <Box position={'fixed'} top={'0'} p={2} zIndex={20} w={'full'}>
      <HStack align={'center'} justify={'center'} spacing={1}>
        {socials.map((social, i) => (
          <SocialLogo key={i} label={social.label} url={social.href} />
        ))}
      </HStack>
    </Box>
  )
}
