import { Container, Grid, GridItem } from '@chakra-ui/react'
import Contacts from 'components/chats/contacts'
import Messages from 'components/chats/messages'

const Chats = () => {
	return (
		<Container>
			<Grid alignItems="start" templateColumns="repeat(12, 1fr)" gap={6}>
				<GridItem colSpan={4}>
					<Contacts />
				</GridItem>

				<GridItem colSpan={8}>
					<Messages />
				</GridItem>
			</Grid>
		</Container>
	)
}

export default Chats
