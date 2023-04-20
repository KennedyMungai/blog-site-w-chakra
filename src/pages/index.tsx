import { Button, Text } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div>
			<Text as={'section'}>This is a text component</Text>
		</div>
	)
}
