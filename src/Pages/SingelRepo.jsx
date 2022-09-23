import React, { useEffect, useState } from 'react' 
import { useSelector } from 'react-redux'; 
import {  useNavigate, useParams } from 'react-router-dom'; 
const SingelRepo = () => { 
  const navigate=useNavigate()
    const { id } = useParams();
    console.log(id)
    const Repos =useSelector((state)=>state.Repos);
    const [currentRepo, setCurrentRepo] = useState({}); 
   useEffect(() => { 
     if (id) { 
       const temp = Repos[id]; 
       temp && setCurrentRepo(temp); 
     } 
   }, [Repos, id]); 
    console.log("c",currentRepo); 
      return (
    //     <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems={"center"}>
    //   <Image src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/07/Untitled-design-22-1.jpg" alt="" />

    //   <Box p='6'>
    //     <Box
    //       mt='1'
    //       fontWeight='semibold'
    //       as='h4'
    //       lineHeight='tight'
    //       noOfLines={1}
    //     >
    //       {currentRepo.full_name}
    //     </Box>

    //     <Box>
    //      Createdat: {currentRepo.created_at}
    //       <Box as='span' color='gray.600' fontSize='sm'>
    //       </Box>
    //     </Box>

        
    //       <Box as='span' ml='2' color='gray.600' fontSize='sm'>
    //       Language:  {currentRepo.language} 
    //       </Box>
    //     </Box>
    //     <Button colorScheme='blue' onClick={()=>{
    //        navigate("/")
    //     }}>Back To Home</Button>
    // </Box>
    <div></div>
      )
}

export default SingelRepo



