import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { todoAdded } from "../../store/TodoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { MdOutlineLightMode } from "react-icons/md";
// import styles from "./TodoConatainer.module.css";

const TodoContainer = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [todos, setTodos] = useState([]);
  const [imageData, setImageData] = useState(null);
  // const dispatch = useDispatch();

  const addTodo = () => {
    //todoSlice we are using payload.data means we have to return object
    setId(nanoid());
    setTodos([...todos, { id, text, isCompleted }]);
    console.log(text);
    // dispatch(todoAdded({ id, text, isCompleted }));
  };

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
      <div className="flex justify-between flex-row items-center w-[500px] p-2">
        <h1 className="text-[35px] text-white font-bold">Todo</h1>
        <MdOutlineLightMode className="text-white font-bold text-[30px]" />
      </div>
      <div className="border-2 border-black w-[500px] p-2 h-[500px] rounded-2xl bg-[#24273c]">
        <div className="flex items-center justify-center mb-2">
          <input
            type="text"
            className="border-2 border-gray-400 rounded-md p-1 w-[310px] text-gray-400 bg-transparent ml-1"
            placeholder="Enter a todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className={`border-2 border-gray-400 m-1 rounded-lg p-1 text-gray-400 bg-transparent px-6 active:translate-y-2 transition-all ml-3 ${
              text === "" ? "" : "bg-[#869cfe] text-white border-white"
            }`}
            onClick={() => addTodo()}
          >
            Add todo
          </button>
        </div>

        <div className="flex flex-col border-2 border-transparent p-1 h-full w-full">
          {/*  */}
          {todos.length === 0 ? (
            <div className="flex justify-center items-center h-full w-full">
              <img
                src="/noTodoImage.png"
                alt=""
                className="h-40 overflow-hidden "
              />
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex flex-row h-10 border-2 border-gray-400 items-center rounded-xl m-2 p-2 group"
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={todo.isCompleted}
                  className="bg-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  onChange={() => {
                    setTodos((prevTodos) =>
                      prevTodos.map((prevTodo) =>
                        prevTodo.id === todo.id
                          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
                          : prevTodo
                      )
                    );
                  }}
                />
                <p className="text-gray-400 m-2 w-[200px] p-1 rounded-lg flex-grow">
                  {todo.text}
                </p>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <IoIosCloseCircleOutline className="text-gray-400 font-bold text-2xl" />
                </button>
              </div>
            ))
          )}
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
