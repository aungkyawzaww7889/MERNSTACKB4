import { useContext } from "react";
import { FirstContext } from "../firstContext";

const Child1 = function(){

    const { userName } = useContext(FirstContext);
    
    return (
        <section>
            <div>Child1 is good</div>
            <div>{userName}</div>

            
        </section>


    );
}

export default Child1;