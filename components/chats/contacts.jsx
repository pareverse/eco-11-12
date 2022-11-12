import { Avatar, Box, Flex, Input, InputGroup, InputLeftElement, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Card from 'components/_card'

const Contacts = () => {
	return (
		<Card>
			<Flex direction="column" gap={6}>
				<InputGroup>
					<InputLeftElement pt={1} pl={1}>
						<FiSearch size={16} />
					</InputLeftElement>

					<Input placeholder="Search Contacts" size="lg" />
				</InputGroup>

				<Box overflowY="auto" h="calc(100vh - 246px)">
					<Flex direction="column" gap={6}>
						<Flex align="center" gap={3} cursor="pointer">
							<Avatar name="Aldrin Felia" boxSize={10} />

							<Flex direction="column">
								<Text fontSize="sm" fontWeight="semibold" lineHeight="20px" color="accent-1" noOfLines={1}>
									Aldrin Felia
								</Text>

								<Text fontSize="sm" fontWeight="semibold" lineHeight="20px" color="accent-1" noOfLines={1}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</Text>
							</Flex>
						</Flex>

						<Flex align="center" gap={3} cursor="pointer">
							<Avatar name="Jolina Tanael" boxSize={10} />

							<Flex direction="column">
								<Text fontSize="sm" fontWeight="medium" lineHeight="20px" color="accent-3" noOfLines={1}>
									Jolina Tanael
								</Text>

								<Text fontSize="sm" fontWeight="normal" lineHeight="20px" color="accent-3" noOfLines={1}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</Text>
							</Flex>
						</Flex>

						<Flex align="center" gap={3} cursor="pointer">
							<Avatar name="Berto Mallares" boxSize={10} />

							<Flex direction="column">
								<Text fontSize="sm" fontWeight="medium" lineHeight="20px" color="accent-3" noOfLines={1}>
									Berto Mallares
								</Text>

								<Text fontSize="sm" fontWeight="normal" lineHeight="20px" color="accent-3" noOfLines={1}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</Text>
							</Flex>
						</Flex>

						<Flex align="center" gap={3} cursor="pointer">
							<Avatar name="Tan Felizarta" boxSize={10} />

							<Flex direction="column">
								<Text fontSize="sm" fontWeight="medium" lineHeight="20px" color="accent-3" noOfLines={1}>
									Tan Felizarta
								</Text>

								<Text fontSize="sm" fontWeight="normal" lineHeight="20px" color="accent-3" noOfLines={1}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</Text>
							</Flex>
						</Flex>

						{[...Array(4)].map((data, index) => (
							<Flex align="center" gap={3} key={index}>
								<SkeletonCircle h={10} w={10} />

								<Flex direction="column" gap={2}>
									<Skeleton h={2} w={124} />
									<Skeleton h={2} w={164} />
								</Flex>
							</Flex>
						))}
					</Flex>
				</Box>
			</Flex>
		</Card>
	)
}

export default Contacts
