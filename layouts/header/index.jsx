import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import { Avatar, Button, chakra, Flex, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiLogOut, FiMenu, FiMoon, FiSettings, FiSun, FiThumbsUp } from 'react-icons/fi'
import { Romadan } from 'components/_logos'
import Cart from './cart'
import Notifications from './notifications'

const Header = ({ session, isAdmin, isCustomer, onSidebarOpen }) => {
	const router = useRouter()
	const { toggleColorMode } = useColorMode()
	const colorModeIcon = useColorModeValue(<FiMoon size={16} fill="currentColor" />, <FiSun size={16} fill="currentColor" />)

	return (
		<chakra.header bg="#FFFFFFBF" backdropFilter="blur(12px)" position="sticky" top={0} transition=".4s" zIndex={99} _dark={{ bg: '#14161FBF' }}>
			<Flex align="center" gap={6} mx={isCustomer ? 'auto' : 0} ml={{ base: 'auto', lg: isAdmin ? 256 : 'auto' }} px={6} h={20} w="full" maxW={{ base: 'full', lg: isAdmin ? 'calc(100% - 256px)' : 1280 }}>
				<Flex display={{ base: 'flex', lg: isAdmin ? 'none' : 'flex' }} flex={1} justify="start" align="center">
					<Flex align="center" gap={6}>
						{session && <IconButton display={{ base: 'flex', lg: 'none' }} icon={<FiMenu size={16} />} onClick={onSidebarOpen} />}

						{isCustomer && (
							<NextLink href="/" passHref>
								<Flex display={{ base: session ? 'none' : 'flex', lg: 'flex' }} align="center" gap={3}>
									<Romadan h={32} w={24} />

									<Text display={{ base: 'none', md: 'block' }} fontSize="2xl" fontWeight="semibold" lineHeight={8} color="accent-1">
										Romadan
									</Text>
								</Flex>
							</NextLink>
						)}
					</Flex>
				</Flex>

				{isCustomer && (
					<Flex display={{ base: 'none', lg: 'flex' }} flex={3} justify="center" align="center">
						<Flex display={{ base: 'none', lg: 'flex' }} align="center" gap={8}>
							<NextLink href="/products" passHref>
								<Link as="span" size="lg" active={router.pathname.includes('products') ? 1 : 0}>
									Products
								</Link>
							</NextLink>

							<NextLink href="/services" passHref>
								<Link as="span" size="lg" active={router.pathname.includes('services') ? 1 : 0}>
									Services
								</Link>
							</NextLink>

							<NextLink href="/blogs" passHref>
								<Link as="span" size="lg" active={router.pathname.includes('blogs') ? 1 : 0}>
									Blogs
								</Link>
							</NextLink>

							<NextLink href="/company" passHref>
								<Link as="span" size="lg" active={router.pathname.includes('company') ? 1 : 0}>
									Company
								</Link>
							</NextLink>

							<NextLink href="/contact" passHref>
								<Link as="span" size="lg" active={router.pathname.includes('contact') ? 1 : 0}>
									Contact Us
								</Link>
							</NextLink>
						</Flex>
					</Flex>
				)}

				<Flex flex={1} justify="end" align="center">
					<Flex align="center" gap={3}>
						<Flex align="center">
							{isCustomer && <Cart />}
							{session ? <Notifications /> : null}
							<IconButton variant="ghost" colorScheme="brand" icon={colorModeIcon} onClick={toggleColorMode} />
						</Flex>

						{session ? (
							<Menu>
								<MenuButton>
									<Avatar name={session.user.name} src={session.user.image} />
								</MenuButton>

								<MenuList w={256}>
									<NextLink href="/profile" passHref>
										<MenuItem>
											<Flex align="center" gap={3} w="calc(240px - 16px)">
												<Avatar name={session.user.name} src={session.user.image} />

												<Flex direction="column" w={180}>
													<Text color="accent-1" noOfLines={1}>
														{session.user.name}
													</Text>

													<Text mt={-1} fontSize="xs" noOfLines={1}>
														{session.user.email}
													</Text>
												</Flex>
											</Flex>
										</MenuItem>
									</NextLink>

									<MenuDivider />

									<MenuItem icon={<FiSettings size={16} />}>Settings</MenuItem>
									<MenuItem icon={<FiThumbsUp size={16} />}>Feedback</MenuItem>

									<MenuDivider />

									<MenuItem icon={<FiLogOut size={16} />} onClick={() => signOut()}>
										Sign out
									</MenuItem>
								</MenuList>
							</Menu>
						) : (
							<>
								<Button display={{ base: 'none', lg: 'flex' }} colorScheme="brand" onClick={() => router.push('/login')}>
									Sign in
								</Button>

								<IconButton display={{ base: 'flex', lg: 'none' }} icon={<FiMenu size={16} />} onClick={onSidebarOpen} />
							</>
						)}
					</Flex>
				</Flex>
			</Flex>
		</chakra.header>
	)
}

export default Header
