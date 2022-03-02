import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }
    return (

        <footer className='navbar'>
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate('/')}>
                        <ExploreIcon fill={pathMatchRoute('/') ? '#189AB4' : '#75E6DA'} width='36px' height='36px ' />
                        <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Home</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/create')}>
                        <OfferIcon fill={pathMatchRoute('/create') ? '#189AB4' : '#75E6DA'} width='36px' height='36px ' />
                        <p className={pathMatchRoute('/create') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Create</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#189AB4' : '#75E6DA'} width='36px' height='36px ' />
                        <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>

    )
}

export default Navbar;
