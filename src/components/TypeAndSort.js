import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreProvider'
import { Button, Flex, Text, Box } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { SortMenu } from './SortMenu';


export const TypeAndSort = () => {
    const { onOpen, selectedProduct } = useContext(StoreContext)
    return (
        <Flex justify={'space-between'}
            width='80%'
            mx='auto'
            px='0.6rem'
            flexDirection={['column', 'row', 'row']}
        >
            <Flex direction='column' mr={[0, '1rem', 0, 0]}>
                <Text variant='productTitle'>
                    {selectedProduct}
                </Text>
                <Text variant='productCount'>4,798 products</Text>
            </Flex>
            <Box display='flex' gap={5} mx={['auto', 'auto', 0, 0]}>
                <Button
                    backgroundColor='#fff'
                    border='3px solid #edf2f7'
                    fontSize={['14px', 'inherit', 'inherit', 'inherit']}
                    rightIcon={<SmallAddIcon boxSize={5} />}
                    onClick={onOpen}
                    _hover={{ opacity: '70%' }}
                >
                    Open Filter
                </Button>
                <SortMenu />
            </Box>
        </Flex>
    )
}