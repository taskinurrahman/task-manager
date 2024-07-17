import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { addTask } from "../../features/TaskSlice";

export const Home = () => {
  const [name, setName] = useState("");
  const [characterCount, setcharacterCount] = useState(100);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showButton, setshowButton] = useState(false);
  const dispatch = useDispatch()

  function handleAddTask(e){
    e.preventDefault();
    if(title!=""&& name!=""&&description!=""){
      notifySuccess()
      const newTask ={
        name,
        title,
        description,
        ceatedAt : new Date().toString(32),
      };
      dispatch(addTask(newTask))
    }else{
      notifyError()
    }


  }
  const notifySuccess = () => {
    toast.success("successfully task added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
    console.log(name, title, description);
  };

  const notifyError = () => {
    toast.error("Pleae fill the empty fields", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
    console.log(name, title, description);
  };

  function updateDesction(value) {
    setDescription(value);
    let cntCharacter = value.length;
    setcharacterCount(100 - cntCharacter);
  }

  function toggleChecbox() {
    console.log(showButton);
    showButton ? setshowButton(false) : setshowButton(true);
  }
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="w-full h-screen flex justify-center items-center bg-wood-pattern">
        <div className="w-1/4 shadow-2xl rounded-lg px-4 py-5 box-border  bg-white ">
          <div>
            <h1 className="font-mono text-3xl text-black">Add Your Task</h1>
            <input
              placeholder="Name"
              className="w-full rounded-sm border border-blue-300 p-2 mt-3"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="Projecy Title"
              className="w-full rounded-sm border border-blue-300 p-2 mt-3"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              placeholder="Description"
              value={description}
              maxLength={100}
              rows={3}
              onChange={(e) => updateDesction(e.target.value)}
              className="w-full rounded-sm border border-blue-300 p-2 outline-none mt-3 resize-none"
            />
            <h4 className="text-gray-400 text-right">
              {characterCount} characters remaining
            </h4>

            <div>
              <input
                type="checkbox"
                className=" rounded-sm border border-blue-300 box-border"
                onClick={() => toggleChecbox()}
              />
              <p className="text-black px-2 inline">I want to add this task</p>
            </div>

            {showButton && (
              <button
                className="bg-black text-white text-base font-mono rounded-md mt-3 py-2 px-5"
                onClick={handleAddTask}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
