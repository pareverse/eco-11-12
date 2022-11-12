import NextLink from 'next/link'
import { Container, Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Text } from '@chakra-ui/react'
import { FiSearch, FiSliders } from 'react-icons/fi'

const Products = () => {
	return (
		<Container>
			<Flex direction="column" gap={6}>
				<form>
					<InputGroup>
						<InputLeftElement pt={2} pl={1} color="accent-1" pointerEvents="none">
							<FiSearch size={16} />
						</InputLeftElement>

						<Input placeholder="Search Products" size="xl" />

						<InputRightElement pt={2} pr={1} color="accent-1" cursor="pointer">
							<FiSliders size={16} />
						</InputRightElement>
					</InputGroup>
				</form>

				<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
					{[...Array(12)].map((data, index) => (
						<NextLink href="/products/1" passHref key={index}>
							<Flex direction="column" gap={6}>
								<Image bg="canvas-2" borderRadius={12} p={6} alt="product-name" src="/assets/product.png" />

								<Flex justify="space-between" align="center" gap={3}>
									<Text fontWeight="medium" color="accent-1" noOfLines={2}>
										Product Name
									</Text>

									<Text fontWeight="medium" color="brand.default">
										₱300
									</Text>
								</Flex>
							</Flex>
						</NextLink>
					))}
				</SimpleGrid>
			</Flex>
		</Container>
	)
}

export default Products
