function Products({productslist, addcart}) {
  return (
    <div className="App">
      {productslist.map((item) => 
          <div key={item.id} style={{border: 'solid 1px black', width: '200px', float: 'left', 'marginRight': '20px'}}>
          <div>{item.name}</div>
          <div>{item.price}$</div>
          <div><button onClick={() => addcart(item.id)}>ADD TO CART</button></div>
          </div>
      )}
    </div>
  );
}

export default Products;
