import React from "react";
import { layout } from "../../constants/SidebarData";
import "./SideBarMenus.scss"
import { classNames } from "../../services/util.services";
const SideBarMenus = ({ activeMenu }) => {
  return (
    <>
      {layout?.menus?.map((menu, index) => (
        <div className='sidebar-container' onClick={menu.onClick} key={`menu-${index}`} title={menu.content}>
          <i className={classNames("sidebar-logo", menu?.icon)} />
          <div className="sidebar-menu-content">{menu.content}</div>
        </div>
      ))}
    </>
  );
};

export default SideBarMenus;