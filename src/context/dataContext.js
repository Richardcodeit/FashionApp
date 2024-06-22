import React, { createContext, useState  , useEffect} from "react"

export const dataContext = createContext()



const DataContextProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sendID , setSendID]  = useState(null);

  
  
    useEffect(() => {
      async function fetchApi() {
        try {
          const url = 'https://fakestoreapi.com/products';
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const dataRes = await response.json();
          setData(dataRes);
          setIsLoading(false);
          localStorage.setItem("datas" , dataRes)
        } catch (err) {
          console.error(err);
          setIsLoading(true);
        }
      }
      fetchApi();

    
    
      
    }, []);
    const getDefaultItems = () => {
      let cart = {};
      const maxId = 21;
      for(let i = 1 ; i < maxId ; i++){
       cart[i] = 0
     }
     return cart
   }
  getDefaultItems() 
  const [cartItems , setCartItems] = useState(getDefaultItems())
  const increase = (id)=>{
   setCartItems((prev)=> ({
       ...prev,
     [id] : prev[id] + 1
   }))
   console.log(cartItems)
   
  }
 
  const decrease = (id)=>{
    setCartItems((prev)=> ({
        ...prev,
      [id] : prev[id] - 1
    }))
    console.log(cartItems)
    
   }
    return <dataContext.Provider value={{
     
        data,
        isLoading,
        sendID,
        setSendID,
        cartItems,
        increase,
        decrease
   }}>
       {children}
   </dataContext.Provider>
}


export default DataContextProvider