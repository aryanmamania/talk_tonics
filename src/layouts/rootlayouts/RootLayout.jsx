import './rootlayout.css'
import { Link, Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className="rootlayout">
        <header>
        <Link to="/" className='logo'>
        <img src="/logo.png" alt="" />
        <span>MAMANIA AI</span>
        </Link>
        <div className="user">User</div>
        </header>   
        <main>
            <Outlet/>
        </main>
        </div>

  );
};

export default Rootlayout