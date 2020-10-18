import React from 'react';
import bemCssModules from 'bem-css-modules';
import { Link } from 'react-router-dom';

import { default as AsideMenuStyles } from '../AsideMenu.module.scss';

const style = bemCssModules(AsideMenuStyles);

const AdminMenu = () => {
  return (
    <>
      <p className={style('title')}>Panel Admina</p>
      <nav>
        <ul>
          <li className={style('link')}>
            <Link to="/manage-courses">Zarządzanie kursami</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default AdminMenu;