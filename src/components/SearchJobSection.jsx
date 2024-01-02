import {useEffect} from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    HStack,
    VStack
  } from "@chakra-ui/react";
  import * as Yup from 'yup';
import useFetchJobs from "../hooks/useFetchJobs";
import JobCard from "./JobCard";
import { useAlertContext } from "../context/alertContext";

const SearchJobSection = () => {
    const {isLoading, response, jobs, fetchJobs} = useFetchJobs();
    const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues: {
            "position": "",
            "location": "Prague" | "Brno",
            "seniority": "trainee" | "junior" | "medior" | "senior",
            "salary": ""
        },
        onSubmit: (values, actions) => {
           fetchJobs("/src/jobs.json", values);
            actions.resetForm();
        }, 
        validationSchema: Yup.object({
            position: Yup.string().required("Required"),
            location: Yup.string().required("Required"),
            seniority: Yup.string(),
            salary: Yup.number().required("Required")
        }),
    })

    useEffect(()=> {response && onOpen(response.type, response.message)},[response]);

    return (
        <VStack>
            <Heading as="h1" id="seacrhJob-section">
                Find your best option
            </Heading>
            <Box marginBottom={8}>
                <form onSubmit={formik.handleSubmit}>
                    <HStack spacing={3} justifyContent="center" alignItems="flex-end">
                        <FormControl isInvalid={formik.errors.position && formik.touched.position}> 
                            <FormLabel htmlFor="position">Position Name</FormLabel>
                            <Input
                                name="position"
                                id="position"
                                {...formik.getFieldProps("position")}
                            />
                            <FormErrorMessage>{formik.errors.position}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="location">Location</FormLabel>
                            <Select
                                name="location"
                                id="location"
                                placeholder='Select option'
                                {...formik.getFieldProps("location")}
                            >
                                <option value="Prague">Prague</option>
                                <option value="Brno">Brno</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="seniority">seniority</FormLabel>
                            <Select
                                name="seniority"
                                id="seniority"
                                placeholder='Select option'
                                {...formik.getFieldProps("seniority")}
                            >
                                <option value="trainee">Trainee</option>
                                <option value="junior">Junior</option>
                                <option value="medior">Medior</option>
                                <option value="senior">Senior</option>
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.salary && formik.touched.salary}> 
                            <FormLabel htmlFor="salary">Salary rate</FormLabel>
                            <Input
                                name="salary"
                                id="salary"
                                {...formik.getFieldProps("salary")}
                            />
                            <FormErrorMessage>{formik.errors.salary}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" colorScheme="purple" width="full">
                        {isLoading ? "Loading" : "Show jobs"}
                        </Button>
                    </HStack>
                </form>
            </Box>
            <JobCard data={jobs}/>
        </VStack>
    )
}
export default SearchJobSection;