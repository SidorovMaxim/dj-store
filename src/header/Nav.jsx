import React from 'react';
import homeIcon from './svg/home_icon.svg';
import projectsIcon from './svg/projects_icon.svg';
import servicesIcon from './svg/services_icon.svg';
import aboutIcon from './svg/about_icon.svg';
import solutionsIcon from './svg/solutions_icon.svg';
import contactsIcon from './svg/contacts_icon.svg';


const ul = [
  {name: 'Главная', path: '/', icon: homeIcon},
  {name: 'Проекты', path: '/projects', icon: projectsIcon},
  {name: 'Услуги', path: '/services', icon: servicesIcon},
  {name: 'О компании', path: '/about', icon: aboutIcon},
  {name: 'Готовые решения', path: '/solutions', icon: solutionsIcon},
  {name: 'Контакты', path: '/contacts', icon: contactsIcon},
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
                    <object className="active" type="image/svg+xml" data={item.icon} >icon</object>
                    <li className="active" key={"li_" + j}>{item.name}</li>
                  </>
                ) : (
                  <>
                    <object type="image/svg+xml" data={item.icon} >icon</object>
                    <li key={"li_nav_" + j}>{item.name}</li>
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