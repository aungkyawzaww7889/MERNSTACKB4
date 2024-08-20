import { useContext } from "react";
import { FirstContext } from "../firstContext";

const Child3 = function(){

    const { num,setnum } = useContext(FirstContext);

    function addcount(){
        setnum((prev)=> prev+1);
    }

    // function negativecount(){
    //     setnum((prev)=> prev-1);
    // }

    return(
        <section>
            <div>Child3</div>
            <div>{num}</div>
            {/* <button onClick={()=> setnum((prev)=> prev+1)}>add</button> */}
            <button onClick={()=>{addcount()} }>add</button>
            <button onClick={function(){setnum((prev)=> prev-1)}}>negative</button>
        </section>
    );
}


export default Child3;