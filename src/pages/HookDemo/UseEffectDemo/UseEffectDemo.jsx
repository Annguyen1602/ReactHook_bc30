import React, { useEffect, useState } from "react";
import axios from "axios";
let timeout = {}
export default function UseEffectDemo(props) {
  const [arrProduct, setArrProduct] = useState([
    { id: 1, name: "product 1", price: 1000, image: "https://i.pravatar.cc" },
  ]);
  const [count, setCount] = useState(60);

  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={prod.image} alt="..." />
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p>{prod.price}</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const getAPI = async () => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      //   console.log(result.data.content); [{...},{...}]
      setArrProduct(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //dependency ( tham số thứ 2 là mảng rỗng thì hàm này chạy 1 lần duy nhất sau khi giao diện render lần đầu tiên
    //Tương đương  componentDidMount)

    getAPI();
    //Cài đặt hàm tự chạy ngầm mỗi 1s setCount 1 lần
    timeout = setInterval(() => {
      setCount((count) => {
        return count - 1;
      });
      console.log("123");
    }, 1000);
    return () => {
      // Những lệnh cài đặt sẽ chạy khi mất khỏi giao diện (Tương đương componentWillUnMount)
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="container">
      <h3>Count:{count}</h3>
      <hr />
      <h3>Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
