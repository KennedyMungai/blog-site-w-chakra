import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

type Props = {}

const ToggleMode = (props: Props) => {
	return <IconButton icon={<MoonIcon />} aria-label='Mode Icon' />
}

export default ToggleMode
