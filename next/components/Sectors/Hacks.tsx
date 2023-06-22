import { Stack, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import Title from '../Text/Title'
import TitledSection from '../Text/TitledSection'

export default function Hacks(props: {
  onVisibilityChanged: (section: string, visible: boolean) => void
}) {
  const { ref, inView } = useInView()

  useEffect(() => {
    props.onVisibilityChanged('hacks', inView)
  }, [inView])

  return (
    <Stack id={'hacks'} spacing={10} ref={ref}>
      <Title>Hacks</Title>
      <TitledSection title={'Scaling ETH'}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          quibusdam est neque quod et blanditiis fugit magnam? Magni quibusdam
          dolorum tempora voluptatum blanditiis non, molestias dolorem in ut
          ducimus alias?
        </Text>
      </TitledSection>
    </Stack>
  )
}
