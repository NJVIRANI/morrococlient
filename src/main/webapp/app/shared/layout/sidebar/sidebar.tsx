// import React, { Component } from 'react';
// import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
// import { Dropdown, Collapse } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { EntitiesMenu, SignInMenu } from '../menus/entities';
// import AdminMenu from '../menus/admin';
// import { AccountMenu } from '../menus/account';

// export interface ISidebarProps {
//     isAuthenticated: boolean;
//     isAdmin: boolean;
//     isSwaggerEnabled: boolean;
// }


// const Sidebar = (props: ISidebarProps) => {

//     return (
//         <nav className="sidebar sidebar-offcanvas" id="sidebar">
//             <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
//                 <a className="sidebar-brand brand-logo" href="/"><img src={"content/star_admin/images/logo.svg"} alt="logo" /></a>
//                 <a className="sidebar-brand brand-logo-mini pt-3" href="/"><img src={"content/star_admin/images/logo-mini.svg"} alt="logo" /></a>
//             </div>
//             <ul className="nav" data-widget="treeview" role="menu" data-accordion="false">
//                 {/* {props.isAuthenticated && !props.isAdmin && <EntitiesMenu />} */}
//                 {props.isAuthenticated && props.isAdmin && <AdminMenu showSwagger={props.isSwaggerEnabled} />}
//                 {!props.isAuthenticated && <SignInMenu />}
//                 {props.isAuthenticated && <AccountMenu />}
//             </ul>
//         </nav>
//     );
// }

// export default Sidebar;

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

interface SideBarState {
  basicUiMenuOpen: boolean;
  userPagesMenuOpen: boolean;
  menuState: boolean;
}

// interface SideBarProps {
//   isAuthenticated: boolean;
//   isAdmin: boolean;
//   isSwaggerEnabled: boolean;
// }

class Sidebar extends Component<SideBarState> {
  state: SideBarState = {
    basicUiMenuOpen: false,
    userPagesMenuOpen: false,
    menuState: false
  };

  toggleMenuState = (menuState) => {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (window.location !== prevProps.location) {
  //     this.onRouteChanged();
  //   }
  // }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={"contents/star-admin/images/logo.svg"} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={"contents/star-admin/images/logo-mini.svg" } alt="logo" /></a>
        </div>
        <ul className="nav">
          {/* <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img src={"contents/star-admin/images/faces/face8.jpg"} alt="profile" />
                    </div>
                    <div className="text-left ml-3">
                      <p className="profile-name">Richard V.Welsh</p>
                      <small className="designation text-muted text-small">Manager</small>
                      <span className="status-indicator online"></span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                  Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="btn btn-success btn-block">New Project <i className="mdi mdi-plus"></i></button>
            </div>
          </li> */}
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={() => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Entities</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/batiment') ? 'nav-link active' : 'nav-link' } to="/batiment">Batiment</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/client') ? 'nav-link active' : 'nav-link' } to="/client">Client</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/depense') ? 'nav-link active' : 'nav-link' } to="/depense">Depense</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/emplacement') ? 'nav-link active' : 'nav-link' } to="/emplacement">Emplacement</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employe') ? 'nav-link active' : 'nav-link' } to="/employe">Employe</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/facture') ? 'nav-link active' : 'nav-link' } to="/facture">Facture</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/fonction') ? 'nav-link active' : 'nav-link' } to="/fonction">Fonction</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/fournisseur') ? 'nav-link active' : 'nav-link' } to="/fournisseur">Fournisseur</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/ligne-eclairage') ? 'nav-link active' : 'nav-link' } to="/ligne-eclairage">Ligne-Eclairage</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/log-parametre-environment') ? 'nav-link active' : 'nav-link' } to="/log-parametre-environment">Log-Parametre-Environment</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/produit') ? 'nav-link active' : 'nav-link' } to="/produit">Produit</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/stock') ? 'nav-link active' : 'nav-link' } to="/stock">Stock</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/type-produit') ? 'nav-link active' : 'nav-link' } to="/type-produit">Type-Produit</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/vente') ? 'nav-link active' : 'nav-link' } to="/vente">Vente</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/form-elements/basic-elements">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Form Elements</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/tables/basic-table">
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">Tables</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/icons/font-awesome">
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">Icons</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/charts/chart-js">
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">Charts</span>
            </Link>
          </li> */}
          <li className={ this.isPathActive('/admin') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">Administration</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/admin/user-management') ? 'nav-link active' : 'nav-link' } to="/admin/user-management">User Management</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/admin/metrics') ? 'nav-link active' : 'nav-link' } to="/admin/metrics">Metrics</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/admin/health') ? 'nav-link active' : 'nav-link' } to="/admin/health">Health</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/admin/configuration') ? 'nav-link active' : 'nav-link' } to="/admin/configuration">Configuration</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/admin/audits') ? 'nav-link active' : 'nav-link' } to="/admin/audits">Audits</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/admin/logs') ? 'nav-link active' : 'nav-link' } to="/admin/logs">Logs</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/admin/api') ? 'nav-link active' : 'nav-link' } to="/admin/api">Api</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="http://www.bootstrapdash.com/demo/star-admin-free/react/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
              <i className="mdi mdi-file-outline menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li> */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return window.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default Sidebar;
