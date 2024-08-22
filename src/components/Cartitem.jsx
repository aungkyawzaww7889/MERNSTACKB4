const Cartitem = ({fruitkey})=>{
    return(
            <section>
                <div className="cardcontrol">
                    <div className="cardleft">
                        <h2>{fruitkey.fruitname}</h2>
                        <h1>{fruitkey.description}</h1>
                    </div>
                    <div className="cardright">
                        <input type="number" id="" className="numbercontrol" min={2} max={10} value={0} />
                        <div>
                            <h3>Price = {fruitkey.price} Ks</h3>
                            <h3>Quatity = {fruitkey.quatity}</h3>
                        </div>
                    </div>
                </div>
            </section>
    );

};

export default Cartitem;