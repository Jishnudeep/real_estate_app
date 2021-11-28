import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  description1,
  description2,
  linkName,
  buttonText,
  imageUrl,
}) => (
  <Flex flexwrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />;
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {description1} <br /> {description2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        description1="Explore Apartments, Villas,Homes"
        description2="and more!"
        buttonText="Explore"
        linkName="/search?purpose=for-rent"
        imageUrl="
        https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="BUY A HOME"
        title1="Find,Buy and Own your"
        title2="Dream Home!"
        description1="Explore Apartments, Villas,Homes"
        description2="and more!"
        buttonText="Explore"
        linkName="/search?purpose=for-sale"
        imageUrl="
        https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </div>
  );
}
