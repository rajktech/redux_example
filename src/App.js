import productslist from './productslist.js';
import Products from './products.jsx';
import Cart from './cart.jsx';
import React, {useState} from 'react';

function App() {
  const [cartobj, setCartObj] = useState([]);
  console.log();

  function addcart(prod_id) {
    alert(prod_id);
    let flag = 0;
    Object.keys(cartobj).forEach(function(key) {
        if (cartobj[key]['id'] === prod_id) {
            cartobj[key]['quantity'] = cartobj[key]['quantity'] + 1;
            flag = 1;
            return;
        }
    });
    
    if (flag) {
        setCartObj(cartobj);
    } else {
        const a = {id: prod_id, quantity: 1};
        setCartObj([...cartobj, a]);
    }
    
}
  return (
    <div className="App">
        <Products productslist={productslist} addcart={addcart} />
        <Cart cartobj={cartobj} />
    </div>
  );
}

export default App;
