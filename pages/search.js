import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import noresult from '../assets/images/noresult.svg';
import { fetchApi, baseUrl } from '../utils/fetchApi';

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Text>Search Property By Filters</Text>
                <Icon pl="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {properties.map((property, index) => <Property property={property} key={property.id || `search-${index}`} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent="center" aligItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Image alt="no result" src={noresult} />
                    <Text fontSize="2xl" align="center" marginTop="3">No Results Found</Text>
                </Flex>
            )}
        </Box>
    )
}

export default Search;

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '5000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '2'; // Dubai

    // Map sort parameter to API index
    const sortMap = {
        'price-desc': 'highest_price',
        'price-asc': 'lowest_price',
        'date-desc': 'latest',
    };
    const index = sortMap[query.sort] || 'popular';

    const requestBody = {
        purpose,
        locations_ids: [parseInt(locationExternalIDs)],
        index,
        price_min: parseFloat(minPrice),
        price_max: parseFloat(maxPrice),
        area_max: parseFloat(areaMax),
    };

    if (parseInt(roomsMin) > 0) {
        requestBody.rooms = Array.from({ length: 5 - parseInt(roomsMin) + 1 }, (_, i) => parseInt(roomsMin) + i);
    }

    if (parseInt(bathsMin) > 0) {
        requestBody.baths = Array.from({ length: 5 - parseInt(bathsMin) + 1 }, (_, i) => parseInt(bathsMin) + i);
    }

    const data = await fetchApi(
        `${baseUrl}/properties_search?page=0`,
        'POST',
        requestBody
    );

    return {
        props: {
            properties: data?.results || []
        }
    }
}