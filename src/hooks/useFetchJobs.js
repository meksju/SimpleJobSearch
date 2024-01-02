import {useState} from "react";

const  useFetchJobs = () =>{
    const [jobs, setJobs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState(null);
       const fetchJobs = async (url, data) =>{ 
        setIsLoading(true);
        try{
            const allJobs = await fetch(url);
            if(!allJobs){
                throw new Error("Failed to fetch jobs")
            }
            const urlJobs = await allJobs.json();
            const filteredJobs = urlJobs.filter((job)=> job.location==data.location && job.seniority==data.seniority)
            setJobs(filteredJobs);
            filteredJobs.length > 0 ? setResponse({type: 'success',
            message: 'Check jobs that meet your requirements'}) : setResponse({type: 'error',
            message: 'There are no jobs aviable!'});
            setIsLoading(false);
        }catch(error){
            setJobs(error.message);
            setIsLoading(false);
        }finally {
            setIsLoading(false);
          }
       }
   
    return { isLoading, jobs, response, fetchJobs};
}
export default useFetchJobs;
