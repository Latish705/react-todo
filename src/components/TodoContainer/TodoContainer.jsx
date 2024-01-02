import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { todoAdded } from "../../store/TodoSlice";
import { nanoid } from "@reduxjs/toolkit";
// import styles from "./TodoConatainer.module.css";

const TodoContainer = () => {
  // const [isCompleted, setIsCompleted] = useState(false);
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    //todoSlice we are using payload.data means we have to return object
    setId(nanoid());
    console.log(text);
    dispatch(todoAdded({ id, text }));
  };

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      setImageData("/photo-1470071459604-3b5ec3a7fe05.avif");
    };

    fetchImage();
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageData})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat", // Corrected property
    height: "100vh",
    width: "100vw",
    zIndex: "-2",
  };

  return (
    <div
      className={`flex h-screen flex-col items-center justify-center relative`}
    >
      <div className="absolute h-1/4 top-0" style={backgroundImageStyle}></div>
      <div className="border-2 border-black w-[500px] p-2 h-[400px] rounded-2xl bg-[#24273c]">
        <div className="flex items-center justify-center mb-2">
          <input
            type="text"
            className="border-2 border-gray-400 rounded-md p-1 w-[310px] text-gray-400 bg-transparent ml-1"
            placeholder="Enter a todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="border-2 border-gray-400 m-1 rounded-lg p-1 text-gray-400 bg-transparent px-6 active:translate-y-2 transition-all "
            onClick={() => addTodo()}
          >
            Add todo
          </button>
        </div>

        <div className="flex flex-row border-2 border-transparent p-1 items-center h-full w-full">
          {/* <input
            type="checkbox"
            name=""
            id=""
            className="bg-transparent"
            onChange={() => setIsCompleted(!isCompleted)}
          />
          <p className="text-black  m-2 w-[200px] p-1 rounded-lg">hello</p>
          <button className="bg-white">
            <IoIosCloseCircleOutline />
          </button> */}
          <div className="flex justify-center items-center h-full w-full">
            <img
              src="/noTodoImage.png"
              alt=""
              className="h-40 overflow-hidden "
            />
          </div>
        </div>
      </div>
      <div
        src=""
        alt=""
        className="bg-black absolute h-3/4 w-screen bottom-0 z-[-1] border-none"
      ></div>
    </div>
  );
};

export default TodoContainer;
