import './SASS/App/App.css'
 
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// Components
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
// Routes
import WhiteList from './Routes/WhiteList/WhiteList';
import Body from './Components/body/MainBody/Body';
import Product from './Routes/Product/Product';
import NotFound from './Routes/NotFound/NotFound';
import Shop from './Routes/search/search';
import ProductShow from './Components/body/ProductShow/ProductShow';
import Cart from './Routes/Cart/Cart';
import CheckOut from './Routes/Checkout/checkout';
import Register from './Routes/Register/register';
import AccInformation from './Routes/accountInformation/accInformation';
import Login from './Routes/login/login';



function App() {
  // window.sessionStorage.clear()
  const {CartCount, activeSlide, whiteList, Products} = useSelector(state => state.Products)
  const { Account } = useSelector(state => state.user)
  const { Active } = useSelector(state => state.user)
  const Head = useMemo(() => {
      return <Header cart={CartCount} />
  }, [CartCount, whiteList, Active, Account.information])
  const body = useMemo(() => {
    return <Route path='/'   element={<Body slide={activeSlide} />} />
  }, [activeSlide])
  const product = useMemo(() => {
    return <Route path='/Card/:product' element={<Product/>} />
  }, [Products])
  const accountInformation = useMemo(() => {
    return <Route path='/Account/Information' element={<AccInformation/>} />
  }, [Account.information])
  return (
    <div className="App"  >
      {Head}
      <Routes>
        {body}
        <Route path='/Home/Whitelist'   element={<WhiteList  />} />
        {product}
        <Route path='/Home/Shop/:section' element={<Shop/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/Home/Cart' element={<Cart/>} />
        <Route path="/Home/Cart/Checkout" element={<CheckOut/>} />
        {!Active ? <Route path='/Home/Register' element={<Register/>}  /> : ""}
        {Active && accountInformation }
        <Route path='/Login' element={<Login/>} />
      </Routes>
      <Footer/>
      <ProductShow slideActive={activeSlide} />
    </div>
  );
}

export default App;


