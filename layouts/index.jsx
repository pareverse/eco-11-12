import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { chakra, Flex, Spinner, useDisclosure } from '@chakra-ui/react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

const AppLayout = (props) => {
	const router = useRouter()
	const { data: session, status } = useSession()
	const isAdmin = session ? (session.user.role === 'Admin' ? true : false) : false
	const isCustomer = session ? (session.user.role === 'Customer' ? true : false) : true
	const { isOpen: isSidebarOpen, onOpen: onSidebarOpen, onClose: onSidebarClose } = useDisclosure()

	if (status === 'loading') {
		return (
			<Flex justify="center" align="center" h="100vh" w="full">
				<Spinner size="xl" thickness={2} speed="0.8s" emptyColor="canvas-1" color="brand.default" />
			</Flex>
		)
	} else {
		if (!session && router.pathname === '/login') {
			return props.children
		}

		if (session && router.pathname === '/login') {
			router.push('/')
			return
		}

		if (!session && router.pathname.includes('admin')) {
			router.push('/')
			return
		}

		if (!isAdmin && router.pathname.includes('admin')) {
			router.push('/')
			return
		}

		if (isAdmin && !router.pathname.includes('admin')) {
			router.push('/admin/dashboard')
			return
		}

		return (
			<>
				<Header session={session} isAdmin={isAdmin} isCustomer={isCustomer} onSidebarOpen={onSidebarOpen} />
				<Sidebar session={session} isAdmin={isAdmin} isCustomer={isCustomer} isSidebarOpen={isSidebarOpen} onSidebarClose={onSidebarClose} />
				<chakra.main ml={{ base: 0, lg: isAdmin ? 256 : 0 }} w={{ base: 'full', lg: isAdmin ? 'calc(100% - 256px)' : 'full' }} {...props} />
			</>
		)
	}
}

export default AppLayout
