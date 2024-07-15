import { Helmet } from "react-helmet-async";

const Task = () => {
  return (
    <>
      <Helmet>
        <title>Tasks</title>
      </Helmet>
      <div className="container">
        <div className="grid grid-cols-3 gap-3 mt-5">
          <div className="shadow-sm bg-white px-3 py-3 border border-slate-400">This is task</div>
          <div className="shadow-sm bg-white px-3 py-3 border border-slate-400">This is task</div>
          <div className="shadow-sm bg-white px-3 py-3 border border-slate-400">This is task</div>
          <div className="shadow-sm bg-white px-3 py-3 border border-slate-400">This is task</div>
          <div className="shadow-sm bg-white px-3 py-3 border border-slate-400">This is task</div>
          <div className="shadow-sm bg-white px-3 py-3 border border-slate-400">This is task</div>
        </div>
      </div>
    </>
  );
};

export default Task;
