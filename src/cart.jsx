function Cart({cartobj}) {
  return (
    <div className="App">
      {cartobj.map((item, index) => 
        <div key={item.id}>{item.id}: {item.quantity}</div>
      )}
    </div>
  );
}

export default Cart;
