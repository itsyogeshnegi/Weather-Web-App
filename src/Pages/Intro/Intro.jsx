import React, { useState, useEffect } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Intro = () => {
  const [yourName, setYourName] = useState("");
  const navigate = useNavigate();
  // Retrieve name from local storage on component mount
  // useEffect(() => {
  //   const storedName = localStorage.getItem("yourName");
  //   if (storedName) {
  //     setYourName(storedName);
  //     toast.success(`Welcome back ${storedName}`);
  //   }
  // }, []);

  const setMyName = () => {
    if (!yourName) {
      toast.error("Please fill your name");
    } else {
      localStorage.setItem("yourName", yourName);
      toast.success(`Welcome ${yourName}`);
      setYourName("");
      setTimeout(() => { 
        navigate("/weather");
      }, 1500);
    }
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="h-32 rounded-3xl w-96  backdrop-blur-sm flex justify-center items-center gap-2 shadow-xl">
        <input
          value={yourName}
          onChange={e => setYourName(e.target.value)}
          className="h-10 w-[70%] rounded-xl bg-transparent outline outline-white text-center text-white font-medium"
          placeholder="Enter your name..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 p-2.5 rounded-xl text-white font-medium"
          onClick={setMyName}>
          Create
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </div>
  );
};

export default Intro;
