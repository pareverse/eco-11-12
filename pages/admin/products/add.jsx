import { AspectRatio, Button, chakra, Container, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Icon, IconButton, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { FiImage, FiPlus, FiX } from 'react-icons/fi'
import Card from 'components/_card'

const Add = () => {
	return (
		<Container>
			<Grid alignItems="start" templateColumns="300px 1fr" gap={6}>
				<GridItem display="grid" gap={6}>
					<Card>
						<Flex direction="column" gap={6}>
							<Text fontSize="lg" fontWeight="semibold" color="accent-1">
								Image
							</Text>

							<AspectRatio ratio={1}>
								<Flex bg="canvas-1" position="relative" align="center" direction="column" gap={3} borderRadius={12} px={6} py={12} w="full" color="accent-3">
									<chakra.input type="file" position="absolute" top={0} h="full" w="full" opacity={0} cursor="pointer" />
									<Icon as={FiImage} boxSize={12} />
									<Text fontSize="xs">Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</Text>
								</Flex>
							</AspectRatio>
						</Flex>
					</Card>

					<Card>
						<Flex direction="column" gap={6}>
							<Text fontSize="lg" fontWeight="semibold" color="accent-1">
								Status
							</Text>

							<Select size="lg">
								<option>Published</option>
								<option>Scheduled</option>
								<option>Draft</option>
							</Select>
						</Flex>
					</Card>
				</GridItem>

				<GridItem display="grid" gap={6}>
					<Card>
						<Flex direction="column" gap={6}>
							<Text fontSize="lg" fontWeight="semibold" color="accent-1">
								General
							</Text>

							<FormControl>
								<FormLabel>Product Name</FormLabel>
								<Input size="lg" />
								<FormHelperText>A product name is required and recommended to be unique.</FormHelperText>
							</FormControl>

							<FormControl>
								<FormLabel>Description</FormLabel>
								<Textarea minH={164} />
								<FormHelperText>Set a description to the product for better visibility.</FormHelperText>
							</FormControl>
						</Flex>
					</Card>

					<Card>
						<Flex direction="column" gap={6}>
							<Text fontSize="lg" fontWeight="semibold" color="accent-1">
								Pricing
							</Text>

							<FormControl>
								<FormLabel>Base Price</FormLabel>
								<Input size="lg" />
								<FormHelperText>Set the product price.</FormHelperText>
							</FormControl>

							<FormControl>
								<FormLabel>Discount Percentage</FormLabel>
								<Input size="lg" />
								<FormHelperText>Set a percentage discount to be applied on this product.</FormHelperText>
							</FormControl>
						</Flex>
					</Card>

					<Card>
						<Flex direction="column" gap={6}>
							<Text fontSize="lg" fontWeight="semibold" color="accent-1">
								Variations
							</Text>

							<Flex align="end" gap={6}>
								<FormControl>
									<FormLabel>Colors</FormLabel>
									<Input size="lg" />
								</FormControl>

								<FormControl>
									<FormLabel>Sizes</FormLabel>
									<Input size="lg" />
								</FormControl>

								<FormControl>
									<FormLabel>Quantity</FormLabel>
									<Input size="lg" />
								</FormControl>

								<IconButton variant="tinted" size="lg" colorScheme="brand" icon={<FiPlus size={16} />} />
							</Flex>

							<Flex align="end" gap={6}>
								<FormControl>
									<FormLabel>Colors</FormLabel>
									<Input value="Blue" size="lg" readOnly />
								</FormControl>

								<FormControl>
									<FormLabel>Sizes</FormLabel>
									<Input value="10L" size="lg" readOnly />
								</FormControl>

								<FormControl>
									<FormLabel>Quantity</FormLabel>
									<Input value="100" size="lg" readOnly />
								</FormControl>

								<IconButton variant="tinted" size="lg" colorScheme="red" icon={<FiX size={16} />} />
							</Flex>
						</Flex>
					</Card>

					<Flex justify="end" align="center" gap={3}>
						<Button size="lg">Cancel</Button>

						<Button size="lg" colorScheme="brand">
							Save Changes
						</Button>
					</Flex>
				</GridItem>
			</Grid>
		</Container>
	)
}

export default Add
