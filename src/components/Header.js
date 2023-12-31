import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreProvider'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Stack,
    Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/shop_nexus.png';
import { useNavigate } from 'react-router';
const links = ['Clothes', 'Shoes', 'Watches', 'Bags'];

export const Header = () => {
    const { selectedProduct, setSelectedProduct, setPaginationNum, setSortCriteria, setFiltered, setColorsCriteria, setIsFiltered } = useContext(StoreContext)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const onClickHandler = (link) => {
        setSelectedProduct(link.toLowerCase());
        setPaginationNum(20);
        setSortCriteria('');
        setFiltered([]);
        onClose();
        setColorsCriteria([]);
        setIsFiltered(false);
    }
    return (
        <Box backgroundColor='#edf2f7' as='header' px={7} pos='sticky' top='0' zIndex='999'>
            {isOpen && (
                <Box
                    w="95vw"
                    h="100vh"
                    position="absolute"
                    top="0"
                    left="0"
                    onClick={onClose}
                ></Box>
            )}
            <Flex h={'8vh'} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={7} alignItems={'center'}>
                    <Image src={logo} w='65px' h='35px' cursor='pointer' onClick={() => navigate('/')} />
                    <HStack as={'nav'} spacing={4} display={['none', 'none', 'flex']} pb={1}>
                        {links.map((link) => (
                            <Text
                                variant='navLink'
                                borderBottom={selectedProduct === link.toLowerCase() ? '2px solid black' : ""}
                                key={link}
                                onClick={() => onClickHandler(link)}
                            >
                                {link}
                            </Text>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            onClick={onClose}
                        >
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://img.icons8.com/?size=512&id=23264&format=png'
                                }
                            />
                        </MenuButton>
                        <MenuList zIndex='999' minW={20} w={120} >
                            <MenuItem >Profile</MenuItem>
                            <MenuItem>Cart</MenuItem>
                            <MenuDivider />
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {
                isOpen && (
                    <Box pb={4} display={{ md: 'none' }} position='fixed' top='12' backgroundColor='#edf2f7' width='100%' left='0'>
                        <Stack as={'nav'} spacing={4} pl='8' pt='0.8rem'>
                            {links.map((link) => (
                                <Text variant='navLink' key={link} onClick={() => onClickHandler(link)}>{link}</Text>
                            ))}
                        </Stack>
                    </Box>
                )
            }
        </Box >
    );
}