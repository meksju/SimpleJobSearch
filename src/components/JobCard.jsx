import {
    Box,
    Card,
    CardHeader,
    CardBody,
    Heading,
    VStack,
    Stack,
    HStack,
    StackDivider,
    Text,
  } from "@chakra-ui/react";
 
const JobCard = (jobs) => {
    return(
       <VStack spacing={3}>
        {jobs.data && 
            <Heading as="h1" id="card-heading">
             Aviable now  
            </Heading>
        }
        <HStack spacing={2}>
            {jobs.data && jobs.data.map((job) =>(
            <Card key={job.id} marginTop={3} alignContent="flex-start">      
                <VStack>
                    <CardHeader>
                        <Heading>{job.position}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>Location</Heading>
                                <Text pt='2' fontSize='sm'>{job.location}</Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>Seniority level</Heading>
                                <Text pt='2' fontSize='sm'>{job.seniority}</Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>Description</Heading>
                                <Text pt='2' fontSize='sm'>{job.discription}</Text>
                                <Text>{job.salary}</Text>
                            </Box>
                            <HStack>Created at{job.createdAt}</HStack>
                        </Stack>
                    </CardBody>
                </VStack>   
            </Card>
        ))}
        </HStack>
    </VStack> 
    )
}

export default JobCard;
