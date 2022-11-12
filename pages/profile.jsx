import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Avatar, Container, Flex, Grid, GridItem, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Card from 'components/_card'

const Profile = () => {
	const router = useRouter()
	const { data: session } = useSession()

	if (!session) {
		router.push('/')
		return null
	}

	return (
		<Container>
			<Grid alignItems="start" templateColumns="300px 1fr" gap={12}>
				<GridItem display="grid" gap={6}>
					<Card>
						<Flex align="center" direction="column" gap={6} p={6}>
							<Avatar boxSize={24} name={session.user.name} src={session.user.image} />

							<Flex align="center" direction="column" textAlign="center">
								<Text fontWeight="semibold" color="accent-1">
									{session.user.name}
								</Text>

								<Text fontSize="sm" color="accent-1">
									{session.user.email}
								</Text>
							</Flex>
						</Flex>
					</Card>

					<Card>
						<Flex justify="center" p={6}>
							<Spinner color="brand.default" />
						</Flex>
					</Card>
				</GridItem>

				<GridItem display="grid" gap={6}>
					<Card>
						<Text fontSize="xl" fontWeight="semibold" color="accent-1" mb={6}>
							My Profile
						</Text>

						<Flex justify="center" p={6}>
							<Spinner color="brand.default" />
						</Flex>
					</Card>

					<Card>
						<Text fontSize="xl" fontWeight="semibold" color="accent-1" mb={6}>
							My Orders
						</Text>

						<Tabs isFitted>
							<TabList>
								<Tab>To Pay</Tab>
								<Tab>To Ship</Tab>
								<Tab>To Receive</Tab>
								<Tab>Completed</Tab>
								<Tab>Cancelled</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<Flex justify="center" p={6}>
										<Spinner color="brand.default" />
									</Flex>
								</TabPanel>

								<TabPanel>
									<Flex justify="center" p={6}>
										<Spinner color="brand.default" />
									</Flex>
								</TabPanel>

								<TabPanel>
									<Flex justify="center" p={6}>
										<Spinner color="brand.default" />
									</Flex>
								</TabPanel>

								<TabPanel>
									<Flex justify="center" p={6}>
										<Spinner color="brand.default" />
									</Flex>
								</TabPanel>

								<TabPanel>
									<Flex justify="center" p={6}>
										<Spinner color="brand.default" />
									</Flex>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Card>
				</GridItem>
			</Grid>
		</Container>
	)
}

export default Profile
