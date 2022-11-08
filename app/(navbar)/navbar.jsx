import ProfileCard from './profileCard';

export default function Navbar() {
    return (
        <nav>
            <div className='nav-left'>
                <h2>Home Recipes</h2>
            </div>
            <div className='nav-right'>
                <ProfileCard />
            </div>
        </nav>
    );
}
