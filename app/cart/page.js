
export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta'];
    return (
        <div>
            <h2 className="title">장바구니</h2>
            <CartItem item={장바구니[0]}/>
            <CartItem item={장바구니[1]}/>
        </div>
    )
  }

  function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
  }