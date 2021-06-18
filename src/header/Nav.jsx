import React from 'react';
import { home, projects, services, about, solutions, contacts } from './Icons.jsx'


const ul = [
  {name: 'Главная', path: '/', icon: home},
  {name: 'Проекты', path: '/projects', icon: projects},
  {name: 'Услуги', path: '/services', icon: services},
  {name: 'О компании', path: '/about', icon: about},
  {name: 'Готовые решения', path: '/solutions', icon: solutions},
  {name: 'Контакты', path: '/contacts', icon: contacts}
];


const Nav = () => {
  return (
    <nav>
      <ul>
        {ul.map((item, j) => (
          <a href={item.path} key={"a_nav_" + j}>
            {
              (document.location.pathname === item.path)
                ? (
                  <>
                    <div className="icon-container active">
                      {item.icon}
                    </div>

                    <li className="active" key={"li_" + j}>
                      {item.name}
                    </li>
                  </>
                ) : (
                  <>
                    <div className="icon-container">
                      {item.icon}
                    </div>
                    
                    <li key={"li_nav_" + j}>
                      {item.name}
                    </li>
                  </>
                )
            }
          </a>
        ))}
      </ul>
    </nav>
  );
};


export default Nav;