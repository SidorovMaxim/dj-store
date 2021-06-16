import React from 'react';


const Nav = () => {
  const ul = [
    {name: 'Главная', path: '/'},
    {name: 'Проекты', path: '/projects'},
    {name: 'Услуги', path: '/services'},
    {name: 'О компании', path: '/about'},
    {name: 'Готовые решения', path: '/solutions'},
    {name: 'Контакты', path: '/contacts'}
  ];

  return (
    <nav>
      <ul>
        {ul.map((item, j) => (
          <a href={item.path} key={"a_" + j}>
            {
              (document.location.pathname === item.path)
                ? <li className="active" key={"li_" + j}>{item.name}</li>
                : <li key={"li_" + j}>{item.name}</li>
            }
          </a>
        ))}
      </ul>
    </nav>
  );
};


export default Nav;