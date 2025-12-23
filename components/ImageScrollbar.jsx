import { useContext } from 'react';
import Image from 'next/image';
import { Flex, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
}

function Card({ itemId, url, priority }) {
    return (
        <div style={{ width: '910px', overflow: 'hidden', padding: '4px' }}>
            <Image
                alt="property"
                src={url}
                width={1000}
                height={500}
                sizes="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px"
                priority={priority}
            />
        </div>
    );
}

const ImageScrollbar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
        {data.map((item, index) => (
            <Card
                itemId={String(item.id || index)}
                key={item.id || index}
                url={item.url || item}
                priority={index === 0}
            />
        ))}
    </ScrollMenu>
)

export default ImageScrollbar;