import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: '#ffffff',
      bg: '#000000',
    },
  }),
}

const theme = extendTheme({
  fonts: {
    heading:
      'Courier,Courier New,Lucida Sans Typewriter,Lucida Typewriter,monospace',
    body: 'Courier,Courier New,Lucida Sans Typewriter,Lucida Typewriter,monospace',
  },
  styles,
  initialColorMode: 'system',
  useSystemColorMode: true,
})

export { theme }
