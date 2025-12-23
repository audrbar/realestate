import Link from "next/link";
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/house.svg';

const Property = ({ property }) => {
    // Handle UAE Real Estate 2 API data structure
    const propertyId = property.id;
    const title = property.title || 'Property';
    const price = property.price || 0;
    const photo = property.media?.cover_photo || DefaultImage;
    const beds = property.details?.bedrooms || 0;
    const baths = property.details?.bathrooms || 0;
    const sqft = property.area?.built_up || 0;
    const agencyName = property.agency?.name || '';

    // Don't render if propertyId is missing
    if (!propertyId) return null;

    return (
        <Link href={`/property/${propertyId}`} passHref>
            <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
                <Box>
                    {photo && <Image src={photo} width={400} height={260} alt="house" />}
                </Box>
                <Box w="full">
                    <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400"><GoVerified /></Box>
                            <Text fontWeight="bold" fontSize="lg">
                                ${price ? millify(price) : '0'}
                            </Text>
                        </Flex>
                        <Box>
                            <Avatar size="sm" name={agencyName} />
                        </Box>
                    </Flex>
                    <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                        {beds} <FaBed /> | {baths} <FaBath /> | {sqft ? millify(sqft) : 0} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize="lg">
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    );
};

export default Property;
