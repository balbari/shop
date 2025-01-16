import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'


function Header({ loginok }) {
    const menus = [
        "T-shirts", "Tops", "Shirts", "Sweats", "Coats & Jackets", "Pants"
    ]
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login')
    }

    const search = (event) => {
        // console.log(event.target.value)
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <header>
            <div className='login' onClick={goToLogin}>
                <div>
                    <FontAwesomeIcon icon={faUser} className='icon' />
                    <p>
                        {
                            loginok == true ? 'logout' : 'login' 
                        }
                    </p>
                </div>
            </div>
            <div className='logo'>
                <Link to='/'>
                    <img src="https://int.bape.com/cdn/shop/files/BAPE_LOGO_5ab56a10-b38a-4a10-8268-0c70116700f6.jpg?v=1721631550&width=500" alt="logo" />
                </Link>
            </div>
            <div className='nav'>
                <ul>
                    {
                        menus.map((menu, idx) => (
                            <li key={idx}>{menu}</li>
                        ))
                    }
                </ul>
                <div className='search'>
                    <input type="text" onKeyDown={(event) => search(event)} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                </div>
            </div>
        </header>
    )
}

export default Header
