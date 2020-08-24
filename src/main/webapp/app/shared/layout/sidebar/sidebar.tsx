import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Dropdown, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import { EntitiesMenu, SignInMenu } from '../menus/entities';
import AdminMenu from '../menus/admin';
import { AccountMenu } from '../menus/account';

export interface ISidebarProps {
    isAuthenticated: boolean;
    isAdmin: boolean;
    isSwaggerEnabled: boolean;
}


const Sidebar = (props: ISidebarProps) => {

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
                <a className="sidebar-brand brand-logo" href="/"><img src={"content/star_admin/images/logo.svg"} alt="logo" /></a>
                <a className="sidebar-brand brand-logo-mini pt-3" href="/"><img src={"content/star_admin/images/logo-mini.svg"} alt="logo" /></a>
            </div>
            <ul className="nav" data-widget="treeview" role="menu" data-accordion="false">
                {/* {props.isAuthenticated && !props.isAdmin && <EntitiesMenu />} */}
                {props.isAuthenticated && props.isAdmin && <AdminMenu showSwagger={props.isSwaggerEnabled} />}
                {!props.isAuthenticated && <SignInMenu />}
                {props.isAuthenticated && <AccountMenu />}
            </ul>
        </nav>
    );
}

export default Sidebar;
