import { HStack, Box, Center, Link } from '@chakra-ui/react'
import { socials } from '@/utils/info'
import Image from 'next/image'

import SocialLogo from '../Common/SocialLogo'
import DefaultTooltip from '../Common/DefaultTooltip'

export default function Header() {
  return (
    <Box
      position={'fixed'}
      top={'0'}
      p={2}
      zIndex={20}
      w={'full'}
      userSelect={'none'}
    >
      <HStack align={'center'} justify={'center'} spacing={1}>
        {socials.map((social, i) =>
          social.label === '2bb' ? (
            <DefaultTooltip key={i} label={social.label}>
              <Center zIndex={20}>
                <Link href={social.href} target={'_blank'}>
                  <Box
                    bg={'white'}
                    borderRadius={'50%'}
                    w={'26px'}
                    h={'26px'}
                    overflow={'hidden'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Image
                      src={
                        'https://avatars.githubusercontent.com/u/205407010?s=400&v=4'
                      }
                      alt={'2bb'}
                      width={26}
                      height={26}
                      style={{
                        filter: 'grayscale(1) contrast(3) invert(1)',
                      }}
                    />
                  </Box>
                </Link>
              </Center>
            </DefaultTooltip>
          ) : (
            <SocialLogo key={i} label={social.label} url={social.href} />
          ),
        )}
      </HStack>
    </Box>
  )
}

