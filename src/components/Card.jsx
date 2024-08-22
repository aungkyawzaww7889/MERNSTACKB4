

const Card = ({ fruitkey} )=>{
    return (
        <section className="carders">

            <div className="cardcontrols">

                <div className="card">
                    <div className="card-title">
                        <h1>{ fruitkey.fruitname }</h1>
                    </div>
                    <div className="card-body">
                        <p>{ fruitkey.description }</p>
                    </div>
                    <div className="card-footer">
                        <h1>{ fruitkey.price } Ks</h1>
                        <input type="number" id="" className="inputnumber" min={1} max={10} value={0} />
                        <button type="button" className="cardbtn">Add +</button>
                        
                    </div>
                   
                </div>


            </div>
            
        </section>
    )
}

export default Card;