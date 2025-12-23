import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" priority style={{ width: 'auto', height: 'auto' }} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartmens, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property, index) => <Property property={property} key={property.id || `rent-${index}`} />)}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy, Own Your"
        title2="Dream Home"
        desc1="Explore Apartmens, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property, index) => <Property property={property} key={property.id || `sale-${index}`} />)}
      </Flex>
    </Box>
  )
};

export async function getStaticProps() {
  // Dubai location ID is 2
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties_search?page=0`,
    'POST',
    {
      purpose: 'for-sale',
      locations_ids: [2],
      index: 'popular'
    }
  );

  const propertyForRent = await fetchApi(
    `${baseUrl}/properties_search?page=0`,
    'POST',
    {
      purpose: 'for-rent',
      locations_ids: [2],
      index: 'popular'
    }
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.results?.slice(0, 6) || [],
      propertiesForRent: propertyForRent?.results?.slice(0, 6) || [],
    },
  };
};