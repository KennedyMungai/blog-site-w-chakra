import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const about = (props: Props) => {
	return (
		<Flex
			align={'center'}
			justify={'center'}
			height={'100vh'}
			width={'100vw'}
			overflow={'hidden'}
		>
			<Text bg={'slateblue.500'} p='6rem' fontSize={'4rem'}>
				About
			</Text>
		</Flex>
	)
}

export default about
