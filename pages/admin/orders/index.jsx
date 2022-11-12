import { Avatar, Badge, Container, Flex, IconButton, Image, Select, Td, Text, Tr } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import Card from 'components/_card'
import Table from 'components/_table'

const Orders = () => {
	return (
		<Container>
			<Card>
				<Table
					data={['', '', '', '', '', '', '', '', '', '']}
					fetched={true}
					th={['Customer', 'Product', 'Variant', 'Quantity', 'Total Price', 'Status', 'Date', '']}
					td={(data, index) => (
						<Tr key={index}>
							<Td maxW={200}>
								<Flex align="center" gap={3}>
									<Avatar name="" />

									<Text overflow="hidden" textOverflow="ellipsis">
										Customer Name
									</Text>
								</Flex>
							</Td>

							<Td>
								<Image boxSize={8} alt="product-name" src="/assets/product.png" />
							</Td>

							<Td>
								<Text>Blue - 10L</Text>
							</Td>

							<Td>
								<Text>1</Text>
							</Td>

							<Td>
								<Text>₱300</Text>
							</Td>

							<Td>
								<Badge variant="tinted" colorScheme="brand">
									To Ship
								</Badge>
							</Td>

							<Td>
								<Text>Dec 25, 2022</Text>
							</Td>

							<Td textAlign="right">
								<IconButton size="xs" icon={<FiMoreHorizontal size={12} />} />
							</Td>
						</Tr>
					)}
					select={() => (
						<Flex flex={1} justify="end" align="center" gap={3}>
							<Select placeholder="Status" size="lg" w="auto">
								<option>To Ship</option>
								<option>To Pay</option>
								<option>To Receive</option>
								<option>Success</option>
								<option>Cancelled</option>
							</Select>
						</Flex>
					)}
					settings={{
						placeholder: 'Order ID'
					}}
				/>
			</Card>
		</Container>
	)
}

export default Orders
