import NextLink from 'next/link'
import { ReactNode } from 'react'
import { Link } from '@chakra-ui/react'

type Props = {
	href: string
	children: ReactNode
}

const Link = ({ href, children }: Props) => {
	return <NextLink href={href}>{/* <Link href={href}></Link> */}</NextLink>
}

export default Link
