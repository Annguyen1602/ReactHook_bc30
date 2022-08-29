import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
export default function DemoUseSearchParams() {
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let [arrProduct, setArrProduct] = useState([]);
  let timeoutRef = useRef({});

  const getProductByKeyword = async () => {
    try {
      //Lấy keyword từ trên url: keyword=abc
      let keyword = searchParams.get("keyword");
      if (keyword.trim() !== "" && keyword != null) {
        let result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
          method: "GET",
        });
        console.log(result.data.content);
        setArrProduct(result.data.content);
        clearTimeout(timeoutRef.current);
      } else {
        setArrProduct([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //Call api
    getProductByKeyword();
  }, [keywordRef.current]);

//DEBOUCE SEARCH


  const handleChange = (e) => {
    keywordRef.current = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 2000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dựa vào dữ liêu người dùng nhập đưa dữ liệu lên url

    setSearchParams({ keyword: keywordRef.current });
  };

  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="col-3 mb-2" key={index}>
          <div className="card">
            <img src={prod.image} alt="..." className="w-100" />
            <div className="card-body bg-dark text-white">
              <p style={{ height: "30px" }}>{prod.name}</p>
              <p>{prod.price}</p>
              <NavLink className="btn btn-success" to={`/detail/${prod.id}`}>
                View detail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Search</h3>
        <div className="form-group">
          <p>Nhập từ khoá</p>
          <div className="input-group-prepend">
            <input
              className="form-control mb-2"
              id="keywordRef"
              onChange={handleChange}
            />
            <button className="btn bg-dark text-white">Search</button>
          </div>
        </div>
        <div className="mt-2">
          <p>Kết quả tìm kiếm</p>
          <div className="row">{renderProduct()}</div>
        </div>
      </form>
    </div>
  );
}
