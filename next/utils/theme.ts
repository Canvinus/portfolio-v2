import { extendTheme } from '@chakra-ui/react'
import { GlobalStyleProps } from '@chakra-ui/theme-tools'

const color = '#ffffff'
const bg = '#000000'

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: color,
      bg: bg,
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

export { bg, color, theme }
