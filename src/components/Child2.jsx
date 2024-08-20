import { useContext, useReducer } from "react";
import { FirstContext } from "../firstContext";

const firstReducer = (state,action)=>{
    if(action.type === "minus"){
        return {...state, count: state.count -1};
    }else if(action.type === "plus"){
        return {...state, count: state.count +1};
    }else if(action.type === "updateKey"){
        return {...state, key: action.payload};
    }

}

const ACTION = {
    PLUS : "plus",
    MINUS : "minus",
    UPDATE_KEY : "updateKey"
}

const Child2 = function(){

    const { city,age } = useContext(FirstContext);
    const [ state,dispatch ] = useReducer(firstReducer, { count:0 , key:""});

    function plus(){
        // console.log("hello i'm plus button");
        dispatch({ type: ACTION.PLUS });

    }

    function minus(){
        // console.log("I'm minus button");
        dispatch({ type: ACTION.MINUS });
    }

    function changetext(e){
        // console.log('yay');
        dispatch({ type:ACTION.UPDATE_KEY, payload:e.target.value })
    }

    return (
        <section>
            <div>Child2</div>
            <div> My city is { city } </div>
            <div>My age is {age}</div>


        <form action="" method="">
            <div className="form-group">
                <label htmlFor="">{state.count}</label> <br/>
                <button type="button" className="btnone" onClick={()=>{plus()}}>plus</button>
                <button type="button" className="btntwo" onClick={()=>{minus()}}>minus</button>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="">{state.key}</label><br/>
                <input type="text" name="" id="" className="form-group" onChange={(e)=>{changetext(e)}} />
            </div>
            <br />
        </form>

        </section>
    );

   
}

export default Child2;