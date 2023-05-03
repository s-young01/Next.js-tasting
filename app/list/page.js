'use client'

import { useState } from "react";

export default function List() {
    let 상품 = ['Tomatoes','Pasta','Coconut'];
    // 상품수량 상태관리
    let [수량, 수량변경] = useState([1, 1, 1]);
    return (
      <div>
        <h2 className="title">상품목록</h2>
        {상품.map((a, i) => {
            return (
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} className="food-img"/>
                    <h4>{a} $40</h4>
                    <nav>
                      <span>상품수량</span>
                      <span> : </span>
                      <span>{수량[i]} 개 </span>
                      <button onClick={() => {
                        let count = [...수량]
                        if(count[i] >= 10) {
                          alert('최대 주문 수량은 10개입니다.')
                        }else {
                          count[i]++
                          수량변경(count)
                        }
                        }}>+</button>
                      <button onClick={() => {
                        let count = [...수량]
                        if(count[i] <= 1) {
                          alert('최소 주문 수량은 1개입니다.')
                        }else {
                          count[i]--
                          수량변경(count)
                        }
                        }}>-</button>
                    </nav>
                </div>
            )
        })}
      </div> 
    )
  }