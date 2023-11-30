import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Notes',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Note',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="shadow bg-transparent absolute top-0 left-0 px-10 py-2 w-full text-gray-400">
      <Container>
        <nav className="flex">
          <div>
            <Link to="/">
              <Logo  />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(
              (item) =>
                item.active && (
                  <li
                    key={item.name}
                    className="block relative group cursor-pointer"
                  >
                    <Link to={item.slug}>
                      <button className="inline-bock px-6 py-2 duration-200">
                        {item.name}
                      </button>
                    </Link>
                    <div className="w-full h-1 bg-transparent transition-all group-hover:bg-black rounded-xl absolute bottom-0"></div>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
