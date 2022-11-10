import ProfileCard from './profileCard';
import './navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className='nav-left'>
                <h2>Home Recipes</h2>
            </div>
            <div className='nav-right'>
                <button>Home</button>
                <button>About</button>
                <button>Lists</button>
                <ProfileCard />
            </div>
        </nav>
    );
}
