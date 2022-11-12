import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Avatar, Button, chakra, Flex, Grid, GridItem, Icon, Link, Text } from '@chakra-ui/react'
import { FiEdit2, FiGrid, FiMessageSquare, FiMoreVertical, FiPackage, FiPieChart, FiSettings, FiTrash2, FiUsers } from 'react-icons/fi'
import { Romadan } from 'components/_logos'

const Sidebar = ({ session, isAdmin, isCustomer, isSidebarOpen, onSidebarClose }) => {
	const router = useRouter()

	return (
		<>
			<chakra.div display={{ base: 'block', lg: 'none' }} bg="hsla(0, 0%, 0%, 0.6)" position="fixed" top={0} left={0} h="100vh" w="full" visibility={isSidebarOpen ? 'visible' : 'hidden'} opacity={isSidebarOpen ? 1 : 0} transition="0.4s ease-in-out" zIndex={99} onClick={onSidebarClose} />

			<chakra.aside bg="system" position="fixed" top={0} left={{ base: isSidebarOpen ? 0 : -256, lg: isAdmin ? 0 : -256 }} h="full" w={256} transition="0.4s ease-in-out" zIndex={100}>
				<Grid templateRows="auto 1fr auto" h="full">
					<GridItem p={6}>
						<Flex align="center" gap={3}>
							<Romadan h={32} w={24} />

							<Text fontSize="2xl" fontWeight="semibold" lineHeight={8} color="accent-1">
								Romadan
							</Text>
						</Flex>
					</GridItem>

					<GridItem p={6}>
						{isAdmin ? (
							<Flex direction="column" gap={2}>
								<NextLink href="/admin/dashboard" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('dashboard') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiPieChart} boxSize={4} />

											<Text>Dashboard</Text>
										</Flex>
									</Link>
								</NextLink>

								<NextLink href="/admin/chats" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('chats') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiMessageSquare} boxSize={4} />

											<Text>Chats</Text>
										</Flex>
									</Link>
								</NextLink>

								<NextLink href="/admin/blogs" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('blogs') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiEdit2} boxSize={4} />

											<Text>Blogs</Text>
										</Flex>
									</Link>
								</NextLink>

								<NextLink href="/admin/products" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('products') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiGrid} boxSize={4} />

											<Text>Products</Text>
										</Flex>
									</Link>
								</NextLink>

								<NextLink href="/admin/orders" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('orders') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiPackage} boxSize={4} />

											<Text>Orders</Text>
										</Flex>
									</Link>
								</NextLink>

								<NextLink href="/admin/customers" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('customers') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiUsers} boxSize={4} />

											<Text>Customers</Text>
										</Flex>
									</Link>
								</NextLink>

								<NextLink href="/admin/trash" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('trash') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiTrash2} boxSize={4} />

											<Text>Trash</Text>
										</Flex>
									</Link>
								</NextLink>

								<NextLink href="/admin/settings" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('settings') ? 1 : 0} onClick={onSidebarClose}>
										<Flex align="center" gap={3}>
											<Icon as={FiSettings} boxSize={4} />

											<Text>Settings</Text>
										</Flex>
									</Link>
								</NextLink>
							</Flex>
						) : (
							<Flex direction="column" gap={2}>
								<NextLink href="/products" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('products') ? 1 : 0} onClick={onSidebarClose}>
										Products
									</Link>
								</NextLink>

								<NextLink href="/services" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('services') ? 1 : 0} onClick={onSidebarClose}>
										Services
									</Link>
								</NextLink>

								<NextLink href="/blogs" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('blogs') ? 1 : 0} onClick={onSidebarClose}>
										Blogs
									</Link>
								</NextLink>

								<NextLink href="/company" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('company') ? 1 : 0} onClick={onSidebarClose}>
										Company
									</Link>
								</NextLink>

								<NextLink href="/contact" passHref>
									<Link as="span" display="block" py={2} lineHeight={6} active={router.pathname.includes('contact') ? 1 : 0} onClick={onSidebarClose}>
										Contact Us
									</Link>
								</NextLink>
							</Flex>
						)}
					</GridItem>

					<GridItem p={6}>
						{session ? (
							<Flex justify="space-between" align="center" gap={3}>
								<Flex align="center" gap={3}>
									<Avatar name={session.user.name} src={session.user.image} />

									<Flex direction="column">
										<Text fontSize="sm" fontWeight="medium" color="accent-1" noOfLines={1}>
											{session.user.name}
										</Text>

										<Text mt={-1} fontSize="xs" fontWeight="medium" lineHeight="15px">
											{session.user.role}
										</Text>
									</Flex>
								</Flex>

								<Icon as={FiMoreVertical} size={16} cursor="pointer" />
							</Flex>
						) : (
							<Button size="lg" colorScheme="brand" w="full" onClick={() => onSidebarClose() || router.push('/login')}>
								Sign in
							</Button>
						)}
					</GridItem>
				</Grid>
			</chakra.aside>
		</>
	)
}

export default Sidebar
