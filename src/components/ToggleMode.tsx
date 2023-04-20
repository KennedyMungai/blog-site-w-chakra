import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

type Props = {}

const ToggleMode = (props: Props) => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton
			icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
			aria-label='Color Toggle Button'
		/>
	)
}

export default ToggleMode
