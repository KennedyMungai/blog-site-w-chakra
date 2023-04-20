import ToggleMode from '@/components/ToggleMode'
import { Button, Heading, Text, useTheme } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div>
			<Link href='about'>About</Link>
			<Heading
				as={'h1'}
				textAlign={'center'}
				textDecoration={'underline'}
				mb={'2rem'}
			>
				This page is the shit
			</Heading>
			<ToggleMode />
		</div>
	)
}
