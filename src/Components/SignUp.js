import react, { useEffect, useState } from "react";
import navigater, { json, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    if (name == "" || email == "" || password == "") {
      alert("Please enter details");
    } else {
      console.log(name, email, password);
      let check = await fetch("http://localhost:4000/usercheck", {
        method: "post",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      check =await check.json();
      // console.log(check);
      if (check) {
        let result = await fetch("http://localhost:4000/register", {
          method: "post",
          body: JSON.stringify({ name, email, password }),
          headers: {
            "Content-Type": "Application/json",
          },
        });
        if (result) {
          result = await result.json();
          // console.log(result)
          localStorage.setItem("user", JSON.stringify(result));
          navigate("/");
        } else {
          alert("Somthing erorr");
        }
      } else {
        alert("This email is used");
      }
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter your name.."
      />
      <input
        className="inputbox"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Enter your email.."
      />
      <input
        className="inputbox"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Enter password.."
      />
      <button className="appbutton" onClick={collectData}>
        SignUp
      </button>
    </div>
  );
};

export default Signup;
