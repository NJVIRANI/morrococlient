import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';
import { Translate } from 'react-jhipster';

const isPathActive = (path) => {
  console.log('&&&&&&&&&&&&&&&&&&' + path);  // eslint-disable-line no-console
  return window.location.pathname.startsWith(path);
}

const adminMenuItems = (
  <>
    <li className="nav-item">
      <Link to="/admin/user-management" className="nav-link">
        <i className="mdi mdi-account-outline menu-icon" />
        <span className="menu-title">
          User management
        </span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin/metrics" className="nav-link">
        <i className="mdi mdi-account-circle-outline menu-icon" />
        <span className="menu-title">
          Metrics
        </span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin/health" className="nav-link">
        <i className="mdi mdi-heart-outline menu-icon" />
        <span className="menu-title">
          Health
        </span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin/configuration" className="nav-link">
        <i className="mdi mdi-heart-outline menu-icon" />
        <span className="menu-title">
          Configuration
        </span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin/audits" className="nav-link">
        <i className="mdi mdi-bell-outline menu-icon" />
        <span className="menu-title">
          Audits
        </span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin/logs" className="nav-link">
        <i className="mdi mdi-bell-outline menu-icon" />
        <span className="menu-title">
          Logs
        </span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/batiment" className="nav-link">
        <i className="mdi mdi-bell-outline menu-icon" />
        <span className="menu-title">
          Batiment
        </span>
      </Link>
    </li>
    {/* <li className="nav-item">
      <Link to="/client" className="nav-link">
        <i className="mdi mdi-bell-outline menu-icon" />
        <span className="menu-title">
          Client
        </span>
      </Link>
    </li> */}
    <li className={isPathActive('/client') ? 'nav-item active' : 'nav-item'}>
      <Link className="nav-link" to="/client">
        <i className="mdi mdi-television menu-icon"></i>
        <span className="menu-title">client</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/depense" className="nav-link">
        <i className="mdi mdi-bell-outline menu-icon" />
        <span className="menu-title">
          Depense
        </span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/emplacement" className="nav-link">
        <i className="mdi mdi-bell-outline menu-icon" />
        <span className="menu-title">
          Emplacement
        </span>
      </Link>
    </li>
  </>
);

const swaggerItem = (
  <li className="nav-item">
    <Link to="/admin/docs" className="nav-link">
      <i className="mdi mdi-book-open menu-icon" />
      <span className="menu-title">
        API
      </span>
    </Link>
  </li>
);

export const AdminMenu = ({ showSwagger }) => (
  <li className="nav-item has-treeview">
    <Link to="#" className="nav-link">
      <i className="mdi  mdi-account-plus-outline menu-icon" />
      <span className="menu-title">
        Administration
        <i className="menu-arrow"></i>
      </span>
    </Link>
    <ul className="nav nav-treeview">
      {adminMenuItems}
      {showSwagger && swaggerItem}
    </ul>
  </li>
);

export default AdminMenu;