import { extendTheme } from '@chakra-ui/react'

const customFonts = {
	custom1: '10rem',
	sm: '1.3rem'
}

const config = {
	initialColorMode: 'light',
	useSystemColorMode: 'false'
}

const theme = extendTheme({ customFonts, config })

export default theme
