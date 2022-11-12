import { Avatar, Flex, IconButton, Image, Td, Text, Tr } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import Card from 'components/_card'
import Table from 'components/_table'

const Orders = () => {
	return (
		<Card>
			<Flex justify="space-between" align="center" gap={6} mb={6}>
				<Text fontSize="xl" fontWeight="semibold" color="accent-1">
					Recent Orders
				</Text>

				<IconButton size="xs" icon={<FiMoreHorizontal size={12} />} />
			</Flex>

			<Table
				data={['', '', '', '', '']}
				fetched={true}
				th={['Customer', 'Product', 'Variant', 'Quantity', 'Total Price', 'Date', '']}
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
							<Text>Dec 25, 2022</Text>
						</Td>

						<Td textAlign="right">
							<IconButton size="xs" icon={<FiMoreHorizontal size={12} />} />
						</Td>
					</Tr>
				)}
				settings={{
					search: 'off',
					controls: 'off',
					show: [5]
				}}
			/>
		</Card>
	)
}

export default Orders
