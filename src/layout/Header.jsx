import Backdrop from "../components/Backdrop";
import Nav from "../components/Nav";
import Summary from "../components/Summary";
import Cart from "../components/Cart";

function Header(){
    return(
      <>
        <Nav />
        <Summary />
        <Cart/>
        <Backdrop/>
      </>
    );
}

export default Header;