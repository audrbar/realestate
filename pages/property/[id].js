import { Flex, Box, Text, Spacer, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails }) => {
  if (!propertyDetails) {
    return (
      <Box maxWidth="1000px" margin="auto" p="4">
        <Text fontSize="2xl" fontWeight="bold">Property not found</Text>
      </Box>
    );
  }

  const price = propertyDetails.price || 0;
  const title = propertyDetails.title || 'Property';
  const beds = propertyDetails.details?.bedrooms || 0;
  const baths = propertyDetails.details?.bathrooms || 0;
  const sqft = propertyDetails.area?.built_up || 0;
  const photos = propertyDetails.media?.photos || [];
  const desc = propertyDetails.description || 'No description available';
  const propertyType = propertyDetails.type?.sub || 'N/A';
  const status = propertyDetails.purpose || 'N/A';
  const agencyName = propertyDetails.agency?.name || 'N/A';

  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && photos.length > 0 && <ImageScrollbar data={photos} />}
      <Box w='full' p='6'>
        <Flex paddingTop='2' alignItems='center'>
          <Box paddingRight='3' color='green.400'><GoVerified /></Box>
          <Text fontWeight='bold' fontSize='lg'>
            ${price ? millify(price) : '0'}
          </Text>
          <Spacer />
          <Avatar size='sm' name={agencyName} />
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {beds}<FaBed /> | {baths} <FaBath /> | {sqft ? millify(sqft) : 0} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
        <Text lineHeight='2' color='gray.600'>{desc}</Text>
      </Box>
      <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
          <Text>Type</Text>
          <Text fontWeight='bold'>{propertyType}</Text>
        </Flex>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
          <Text>Status</Text>
          <Text fontWeight='bold'>{status}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/property/${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}