import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { todoAdded } from "../../store/TodoSlice";
// import { nanoid } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { MdOutlineLightMode } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDarkMode } from "react-icons/md";

import "./TodoConatainer.css";

const TodoContainer = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [text, setText] = useState("");
  const [isDarktheme, setTheme] = useState(true);
  const [todos, setTodos] = useState([]);
  const [imageData, setImageData] = useState(null);
  // const dispatch = useDispatch();

  const addTodo = () => {
    //todoSlice we are using payload.data means we have to return object
    if (text === "") {
      return toast.error("Please enter a todo first");
    }
    setTodos([...todos, { id: nanoid(5), text, isCompleted }]);
    console.log(text);
    setText("");
    setIsCompleted(isCompleted);
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

  const deleteCurrentTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTheme = () => {
    setTheme(!isDarktheme);
  };
  return (
    <>
      {isDarktheme === true ? (
        <div
          className={`flex h-screen flex-col items-center justify-center relative`}
        >
          <div
            className="absolute h-1/4 top-0"
            style={backgroundImageStyle}
          ></div>
          <div className="flex justify-between flex-row items-center w-[500px] sm:w-[400px] md:w-[450px] p-2">
            <h1 className="text-[35px] text-white font-bold">Todo</h1>
            <button onClick={toggleTheme}>
              <MdOutlineLightMode className="text-white font-bold text-[30px]" />
            </button>
          </div>
          <div className="border-2 border-black lg:w-[500px] md:w-[450px] sm:w-[400px] p-2 h-[500px] rounded-2xl bg-[#24273c]">
            <div className="flex items-center justify-center mb-2">
              <input
                type="text"
                className="border-2 border-gray-400 rounded-md p-1 w-[310px] text-gray-400 bg-transparent ml-1"
                placeholder="Enter a todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className={`border-2  m-1 rounded-lg p-1 text-gray-400  px-6 active:translate-y-2 transition-all ml-3 ${
                  text === ""
                    ? "border-gray-400 bg-transparent"
                    : "bg-[#869cfe] text-white border-white"
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
                    className="flex flex-row h-10 border-2 border-black items-center rounded-xl m-2 p-2 group"
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
                              ? {
                                  ...prevTodo,
                                  isCompleted: !prevTodo.isCompleted,
                                }
                              : prevTodo
                          )
                        );
                      }}
                    />
                    <p className="text-gray-400 m-2 w-[200px] p-1 rounded-lg flex-grow">
                      {todo.text}
                    </p>
                    <button
                      onClick={() => deleteCurrentTodo(todo.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
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
          <ToastContainer theme="dark" />
        </div>
      ) : (
        <div
          className={`flex h-screen flex-col items-center justify-center relative`}
        >
          <div
            className="absolute h-1/4 top-0"
            style={backgroundImageStyle}
          ></div>
          <div className="flex justify-between flex-row items-center w-[500px] sm:w-[400px] md:w-[450px] p-2">
            <h1 className="text-[35px] text-black font-bold">Todo</h1>
            <button onClick={toggleTheme}>
              <MdDarkMode className="text-black font-bold text-[30px]" />
            </button>
          </div>
          <div className="border-2 border-black lg:w-[500px] md:w-[450px] sm:w-[400px] p-2 h-[500px] rounded-2xl bg-white">
            <div className="flex items-center justify-center mb-2">
              <input
                type="text"
                className="border-2 border-black rounded-md p-1 w-[310px] text-black bg-transparent ml-1"
                placeholder="Enter a todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className={`border-2  m-1 rounded-lg p-1 text-black  px-6 active:translate-y-2 transition-all ml-3 border-black ${
                  text === ""
                    ? "border-black bg-transparent"
                    : "bg-[#aebdff] text-white "
                }`}
                onClick={() => addTodo()}
              >
                Add todo
              </button>
            </div>

            <div className="flex flex-col border-2 border-transparent p-1 h-full w-full">
              {/*  */}
              {todos.length === 0 ? (
                <div className="flex justify-center items-center h-full w-full flex-col">
                  <img
                    src="/Innovation-amico.svg"
                    alt=""
                    className="h-40 overflow-hidden "
                  />
                  <p className="text-black">There are no todos</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex flex-row h-10 border-2 border-black items-center rounded-xl m-2 p-2 group"
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
                              ? {
                                  ...prevTodo,
                                  isCompleted: !prevTodo.isCompleted,
                                }
                              : prevTodo
                          )
                        );
                      }}
                    />
                    <p className="text-black m-2 w-[200px] p-1 rounded-lg flex-grow">
                      {todo.text}
                    </p>
                    <button
                      onClick={() => deleteCurrentTodo(todo.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <IoIosCloseCircleOutline className="text-black font-bold text-2xl" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          <div
            src=""
            alt=""
            className="bg-white absolute h-3/4 w-screen bottom-0 z-[-1] border-none"
          ></div>
          <ToastContainer theme="light" />
        </div>
      )}
    </>
  );
};

export default TodoContainer;
