import { useContext } from "react";
import { FirstContext } from "../firstContext";

const Child2 = function(){

    const { city,age } = useContext(FirstContext);

    return (
        <section>
            <div>Child2</div>
            <div> My city is { city } </div>
            <div>My age is {age}</div>
        </section>
    );
}

export default Child2;