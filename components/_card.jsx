import { chakra } from '@chakra-ui/react'

const Card = (props) => {
	return <chakra.div bg="system" overflow="hidden" border="1px solid" borderRadius={12} borderColor="border" p={6} h="auto" w="full" _dark={{ bg: 'surface' }} {...props} />
}

export default Card
