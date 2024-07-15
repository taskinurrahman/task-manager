import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-full bg-black py-3 ">
        <div className="container flex justify-center">
          <div>
            <h4>Logo</h4>
          </div>
          <div>
            <Link to="/" className="text-white font-mono font-bold text-lg px-5">Home</Link>
            <Link to="/tasks" className="text-white font-mono font-bold text-lg px-5">Tasks</Link>
            <Link to="/" className="text-white font-mono font-bold text-lg px-5">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
