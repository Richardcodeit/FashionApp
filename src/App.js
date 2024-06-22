import { useContext } from "react";
import Footer from "./fashion page/Component/Footer/Footer";
import Header from "./fashion page/Component/Header/Header";
import Item from "./fashion page/Component/ItemsBox/Item";
import AllSection from "./fashion page/Component/Sections/AllSection";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { dataContext } from "./context/dataContext";
import ProductInfo from "./fashion page/Component/ProductInfo/ProductInfo";
import Cart from "./fashion page/Component/CartBox/Cart";

function App() {
  const {data , isLoading} = useContext(dataContext)
  return (
    <div className="App">
    <Router>
    <Header/>
      <Switch>
        <Route exact path = "/">
          <AllSection/>  
        </Route>
        <Route path ="/men">
          <Item data={data} isLoading={isLoading} category="men's clothing"/>
        </Route>
        <Route path ="/women">
          <Item data={data} isLoading={isLoading} category="women's clothing"/>
        </Route>
        <Route path ="/jewelery">
          <Item data={data} isLoading={isLoading} category="jewelery"/>
        </Route>
        <Route path ="/electronics">
          <Item data={data} isLoading={isLoading} category="electronics"/>
        </Route>
        <Route path="/productInfo">
          <ProductInfo />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
