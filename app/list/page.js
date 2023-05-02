import Image from "next/image";

export default function List() {
    let 상품 = ['Tomatoes','Pasta','Coconut'];
    return (
      <div>
        <h2 className="title">상품목록</h2>
        {상품.map((a, i) => {
            return (
                <div className="food" key={i}>
                    <Image src={`/food${i}.png`} 
                    width={500} height={300} className="food-img"/>
                    <h4>{a} $40</h4>
                </div>
            )
        })}
      </div> 
    )
  }