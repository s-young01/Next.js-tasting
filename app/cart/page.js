import Hi from './data.js';

export default function Cart() {
    return (
        <div>
            {Hi}
            <h2 className="title">장바구니</h2>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
        </div>
    )
  }