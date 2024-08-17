import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    // console.log(params);
    let result = await fetch(`http://localhost:4000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const UpdateProductHandler = async () => {
    if (name == "" || price == "" || category == "" || company == "") {
      alert("Please enter details");
    } else {
      // console.log(name, price, category, company);
      let result = await fetch(`http://localhost:4000/product/${params.id}`, {
        method: "Put",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      result = await result.json();
      // console.log(result);
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Update Product</h1>
      <input
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter product name.."
      />
      <input
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
        placeholder="Enter price.."
      />
      <input
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        type="text"
        placeholder="Enter category.."
      />
      <input
        className="inputbox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        type="text"
        placeholder="Enter company name.."
      />
      <button className="appbutton" onClick={UpdateProductHandler}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
