import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button, Container, Flex, Icon, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Td, Text, Tr } from '@chakra-ui/react'
import { FiEdit2, FiMoreHorizontal, FiStar, FiTrash2 } from 'react-icons/fi'
import Card from 'components/_card'
import Table from 'components/_table'

const Products = () => {
	const router = useRouter()

	return (
		<Container>
			<Card>
				<Table
					data={['', '', '', '', '', '', '', '', '', '']}
					fetched={true}
					th={['Product', 'Quantity', 'Price', 'Sold', 'Ratings', 'Reviews', '']}
					td={(data, index) => (
						<Tr key={index}>
							<Td maxW={200}>
								<Flex align="center" gap={3}>
									<Image boxSize={8} alt="product-name" src="/assets/product.png" />

									<Text overflow="hidden" textOverflow="ellipsis">
										Product Name
									</Text>
								</Flex>
							</Td>

							<Td>
								<Text>100</Text>
							</Td>

							<Td>
								<Text>₱300</Text>
							</Td>

							<Td>
								<Text>0</Text>
							</Td>

							<Td>
								<Flex align="center">
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
								</Flex>
							</Td>

							<Td>
								<Text>0</Text>
							</Td>

							<Td textAlign="right">
								<Menu>
									<MenuButton as={IconButton} size="xs" icon={<FiMoreHorizontal size={12} />} />

									<MenuList>
										<NextLink href="/admin/products/edit" passHref>
											<MenuItem icon={<FiEdit2 size={16} />}>Edit</MenuItem>
										</NextLink>

										<MenuItem icon={<FiTrash2 size={16} />}>Delete</MenuItem>
									</MenuList>
								</Menu>
							</Td>
						</Tr>
					)}
					select={() => (
						<Flex flex={1} justify="end" align="center" gap={3}>
							<Button size="lg" colorScheme="brand" onClick={() => router.push('/admin/products/add')}>
								Add Product
							</Button>
						</Flex>
					)}
					settings={{
						placeholder: 'Search Products'
					}}
				/>
			</Card>
		</Container>
	)
}

export default Products
