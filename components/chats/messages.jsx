import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { Avatar, Box, Button, Divider, Flex, IconButton, Input, Text } from '@chakra-ui/react'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import Card from 'components/_card'

const Messages = () => {
	const { data: session } = useSession()

	const { register, reset, handleSubmit } = useForm()

	const [messages, setMessages] = useState([
		{
			id: 500,
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum reiciendis quod? Nam, obcaecati. Rerum, pariatur tempore dicta quasi, voluptates eaque tenetur labore, assumenda nihil velit ipsa ullam. Error, blanditiis?'
		},
		{
			id: session.user.id,
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum reiciendis quod? Nam, obcaecati. Rerum, pariatur tempore dicta quasi, voluptates eaque tenetur labore, assumenda nihil velit ipsa ullam. Error, blanditiis?'
		},
		{
			id: 500,
			message: 'Good Morning, magkano po ang aabutin kapag nilagayan ng logo? https://drive.google.com/file/123456789'
		}
	])

	const sendMessage = (data) => {
		setMessages([...messages, { id: session.user.id, message: data.message }])
		reset()
	}

	return (
		<Card p={0}>
			<Flex justify="space-between" align="center" gap={6} p={6}>
				<Text fontWeight="semibold" color="accent-1">
					Tan Felizarta
				</Text>

				<IconButton size="xs" icon={<FiMoreHorizontal size={12} />} />
			</Flex>

			<Divider />

			<Box overflowY="auto" h="calc(100vh - 304px)" p={6}>
				<Flex direction="column" gap={6}>
					{messages.map((message, index) => (
						<Flex justify="end" align="center" gap={6} key={index}>
							<Flex align="start" gap={6}>
								<Avatar name="Tan Felizarta" display={message.id !== session.user.id ? 'block' : 'none'} />

								<Flex direction="column" gap={2}>
									<Box bg={message.id === session.user.id ? 'brand.default' : 'canvas-1'} borderRadius={12} p={3}>
										<Text fontSize="sm" color={message.id === session.user.id ? 'white' : 'accent-1'}>
											{message.message}
										</Text>
									</Box>

									<Text fontSize="xs" textAlign="right">
										8:00 AM
									</Text>
								</Flex>

								<Avatar name="Tan Felizarta" src={session.user.image} display={message.id === session.user.id ? 'block' : 'none'} />
							</Flex>
						</Flex>
					))}
				</Flex>
			</Box>

			<Divider />

			<form onSubmit={handleSubmit(sendMessage)}>
				<Flex justify="space-between" align="center" gap={6} p={6}>
					<Flex flex={1}>
						<Input placeholder="Type a message" size="lg" w="full" {...register('message')} />
					</Flex>

					<Flex>
						<Button type="submit" size="lg" colorScheme="brand" leftIcon={<FiSend size={16} />}>
							Send
						</Button>
					</Flex>
				</Flex>
			</form>
		</Card>
	)
}

export default Messages
