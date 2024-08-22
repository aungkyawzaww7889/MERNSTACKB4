import Cartitem from "./Cartitem";


const fruits = [
    {
        "id" : 1,
        "fruitname":"Tomato",
        "description":"Food From Tailand.",
        "price": 300,
        "quatity":3
    },
    {
        "id" : 2,
        "fruitname":"Apple",
        "description":"Order From China",
        "price": 55000,
        "quatity":2
    },
    {
        "id" : 3,
        "fruitname":"Pieapple",
        "description":"Order by Myanmar",
        "price": 3400,
        "quatity":3
    },
    {
        "id" : 4,
        "fruitname":"Mango",
        "description":"Order From India.",
        "price": 3000,
        "quatity":10
    },


]   

const Cart = ()=>{

    return (

        <section className="cart-box">
            {
            fruits.map(fruit=>(
                <Cartitem key={fruit.id} fruitkey = {fruit}/>
                ))
            } 

            <div className="pricebox">
                <h1>Total Price : 50000Ks</h1>
                <button className="btnclose">Close</button>
                <button className="btnopen">Open</button>
            </div>
        </section>
    );

}

export default Cart;