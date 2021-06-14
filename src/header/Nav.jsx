import React from 'react';


const Nav = () => {
  const ul = [
    'Главная',
    'Проекты',
    'Услуги',
    'О компании',
    'Готовые решения',
    'Контакты'
  ];

  return (
    <nav>
      <ul>
        {ul.map((item, j) => (
          <li key={"li_" + j}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Nav;