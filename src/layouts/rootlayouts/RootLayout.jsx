import './rootlayout.css'
import { Link, Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className="rootlayout">
        <header>
        <Link to="/">
        <img src="/logo.png" alt="" />
        <span>MAMANIA AI</span>
        </Link>
        </header>   
        <main>
            <Outlet/>
        </main>
        </div>

  );
};

export default Rootlayout