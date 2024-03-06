import Itemdisplay from "../../molecules/Itemdisplay";
import { useParams } from "react-router-dom";



const Itemdetail = ({mobiledata,incrementfunc})=>{
   
    // const mobileId = match.params.id;
    const  id= useParams().id;
    console.log("itemdet",{incrementfunc});
    console.log("use",useParams())
  
    return (
        <div>
          
       
            <Itemdisplay mobId = {id} incrFunc={incrementfunc} mobdata={mobiledata}/>
        </div>
        
    )
} 
export default Itemdetail;