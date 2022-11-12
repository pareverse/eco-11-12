import { Flex, IconButton, Image, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'

const Cart = () => {
	return (
		<Menu placement="bottom-end">
			<MenuButton as={IconButton} variant="ghost" colorScheme="brand" icon={<FiShoppingCart size={16} fill="currentColor" />} />

			<MenuList p={6} w={364}>
				<Flex direction="column" gap={6}>
					<Flex justify="space-between" align="center" gap={6}>
						<Text fontWeight="semibold" color="accent-1">
							Shopping Cart
						</Text>
					</Flex>

					{[...Array(5)].map((data, index) => (
						<Flex align="start" gap={3} key={index}>
							<Image boxSize={16} alt="product" src="/assets/product.png" />

							<Flex direction="column" w="full">
								<Flex justify="space-between" align="center" gap={3}>
									<Text fontSize="sm" fontWeight="medium" color="accent-1">
										Product Name
									</Text>

									<Text fontSize="sm" fontWeight="medium" color="accent-1">
										x1
									</Text>
								</Flex>

								<Text fontSize="sm" fontWeight="medium" color="brand.default">
									₱300
								</Text>

								<Text fontSize="xs" color="accent-3">
									Blue - 10L
								</Text>
							</Flex>
						</Flex>
					))}
				</Flex>
			</MenuList>
		</Menu>
	)
}

export default Cart
