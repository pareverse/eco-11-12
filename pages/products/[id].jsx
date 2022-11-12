import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { Badge, Button, Container, Flex, FormControl, FormErrorMessage, Grid, GridItem, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Select, Text } from '@chakra-ui/react'
import { FiHeart, FiMinus, FiPlus, FiShoppingCart, FiStar } from 'react-icons/fi'
import Overview from 'components/products/overview'
import Featured from 'components/products/featured'

const Product = () => {
	const router = useRouter()
	const { data: session } = useSession()
	const [quantity, setQuantity] = useState(1)

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm()

	const addToCart = (data) => {
		console.log({ ...data, quantity: quantity })
	}

	return (
		<Container>
			<Grid alignItems="start" templateColumns="repeat(12, 1fr)" gap={{ base: '48px 0', lg: 12 }}>
				<GridItem colSpan={{ base: 12, lg: 6 }}>
					<Image alt="product-image" src="/assets/product.png" />
				</GridItem>

				<GridItem colSpan={{ base: 12, lg: 6 }}>
					<Flex direction="column" gap={12}>
						<Flex align="center" direction="column" gap={3}>
							<Text fontSize="2xl" fontWeight="semibold" color="accent-1">
								Gallon Slim Pro Max
							</Text>

							<Flex align="center" gap={1}>
								<Text fontSize="sm" fontWeight="medium" color="brand.default">
									5.0
								</Text>

								<Flex align="center">
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
									<Icon as={FiStar} boxSize={4} fill="currentcolor" color="brand.default" />
								</Flex>
							</Flex>

							<Flex align="center" gap={6}>
								<Text fontSize="sm" fontWeight="medium" color="accent-1">
									99 Ratings
								</Text>

								<Text fontSize="sm" fontWeight="medium" color="accent-1">
									99 Sold
								</Text>

								<Text fontSize="sm" fontWeight="medium" color="accent-1">
									99 Views
								</Text>
							</Flex>

							<Flex align="center" gap={3}>
								<Text fontSize="sm" fontWeight="medium" textDecoration="line-through">
									₱500
								</Text>

								<Text fontSize="2xl" fontWeight="semibold" color="brand.default">
									₱300
								</Text>

								<Badge colorScheme="red">50% OFF</Badge>
							</Flex>
						</Flex>

						<form onSubmit={handleSubmit(addToCart)}>
							<Flex direction="column" gap={6} mx="auto" w="full" maxW={{ lg: 364 }}>
								<Flex direction="column" gap={3}>
									<Text fontWeight="semibold" color="accent-1">
										Colors
									</Text>

									<FormControl isInvalid={errors.colors}>
										<Select placeholder="Select Colors" size="lg" {...register('colors', { required: true })}>
											<option>Blue</option>
											<option>Red</option>
											<option>Green</option>
										</Select>

										<FormErrorMessage>Please select a color.</FormErrorMessage>
									</FormControl>
								</Flex>

								<Flex direction="column" gap={3}>
									<Text fontWeight="semibold" color="accent-1">
										Sizes
									</Text>

									<FormControl isInvalid={errors.sizes}>
										<Select placeholder="Select Sizes" size="lg" {...register('sizes', { required: true })}>
											<option>10 Liters</option>
											<option>20 Liters</option>
											<option>30 Liters</option>
										</Select>

										<FormErrorMessage>Please select a size.</FormErrorMessage>
									</FormControl>
								</Flex>

								<Flex direction="column" gap={3}>
									<Text fontWeight="semibold" color="accent-1">
										Quantity
									</Text>

									<FormControl isInvalid={errors.quantity}>
										<InputGroup>
											<InputLeftElement type="button" as="button" pt={1} pl={1} color="accent-1" cursor="pointer" onClick={() => setQuantity(quantity - 1)}>
												<FiMinus size={16} />
											</InputLeftElement>

											<Input type="number" value={quantity} size="lg" textAlign="center" readOnly />

											<InputRightElement type="button" as="button" pt={1} pr={1} color="accent-1" cursor="pointer" onClick={() => setQuantity(quantity + 1)}>
												<FiPlus size={16} />
											</InputRightElement>
										</InputGroup>

										<FormErrorMessage>Please add one or more items.</FormErrorMessage>
									</FormControl>
								</Flex>

								<Text fontSize="sm" fontWeight="medium" color="accent-1">
									100 Items available
								</Text>

								<Flex justify="center" gap={6}>
									<Button type="submit" size="lg" colorScheme="brand" w="full" leftIcon={<FiShoppingCart size={16} />}>
										Add to Cart
									</Button>

									<Button type="button" size="lg" w="full" leftIcon={<FiHeart size={16} />}>
										Add to Likes
									</Button>
								</Flex>
							</Flex>
						</form>
					</Flex>
				</GridItem>

				<GridItem colSpan={{ base: 12, lg: 8, xl: 9 }}>
					<Overview />
				</GridItem>

				<GridItem colSpan={{ base: 12, lg: 4, xl: 3 }}>
					<Featured />
				</GridItem>
			</Grid>
		</Container>
	)
}

export default Product
