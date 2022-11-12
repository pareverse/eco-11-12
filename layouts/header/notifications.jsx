import { Flex, IconButton, Image, Menu, MenuButton, MenuList, Spinner, Text } from '@chakra-ui/react'
import { FiBell } from 'react-icons/fi'

const Notifications = () => {
	return (
		<Menu placement="bottom-end">
			<MenuButton as={IconButton} variant="ghost" colorScheme="brand" icon={<FiBell size={16} fill="currentColor" />} />

			<MenuList p={6} w={364}>
				<Flex direction="column" gap={6}>
					<Flex justify="space-between" align="center" gap={6}>
						<Text fontWeight="semibold" color="accent-1">
							Notifications
						</Text>
					</Flex>

					<Flex justify="center" gap={6}>
						<Spinner color="brand.default" />
					</Flex>
				</Flex>
			</MenuList>
		</Menu>
	)
}

export default Notifications
