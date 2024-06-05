
import React, { useState } from 'react';
import './Sidebar.scss';
import Avatar from "../Avatar/Avatar"
import { layout } from '../../constants/SidebarData';
import { classNames } from '../../services/util.services';
import SideBarMenus from '../SideBarMenus/SideBarMenus';


const SideBar = () => {

  const [showUserPopup, setshowUserPopup] = useState(false);

  return (
    <div className="sidebar" style={{ backgroundColor: `${layout.theme.bg}` }}>
      <ProfileCard profile={layout.logo} />
      <div className='s-menus-content'>
        <SideBarMenus />
      </div>

      <div className='s-footer' tabIndex={0} onBlur={() => setshowUserPopup(false)} onClick={() => setshowUserPopup((o) => !o)}>
        <Avatar type="sidebar" />
        {
          showUserPopup && <UserProfile user={layout.user} userPopupMenus={layout.userPopupMenus} />
        }
      </div>
    </div>
  );
};



const UserProfile = ({ user = {}, userPopupMenus = [] }) => {
  return (
    <div className='user-profile' onClick={(e) => e.stopPropagation()}>
      <div className="up-profile">
        <Avatar type="profile" img={user?.thumbnail} />
        <div className="upp-content">
          <div className="user-name">{user?.name}</div>
          <div className="user-email">{user?.email}</div>
        </div>
      </div>
      <div className="user-profile-menus">
        {
          userPopupMenus?.map((menu, index) => (
            <ProfileMenu menu={menu} key={`manu-${index}`} />
          ))
        }
      </div>
    </div>
  )
}

const ProfileCard = ({ profile }) => {
  return (
    <div className='s-profile-section' title={profile?.content}>
      <img className="sps-profile" src={profile?.image} alt='image' />
      <div className="sps-app-name">{profile?.content}</div>
    </div>
  );
};

const ProfileMenu = ({ menu = {} }) => {

  const [showPopupMenu, setShowPopupMenu] = useState(false);
  return (
    <div className="profile-menu" onClick={() => {
      if (menu?.subMenus?.length) {
        setShowPopupMenu((o) => !o)
      }
    }}>
      {
        menu?.icon ? <i className={classNames("pm-icon", menu?.icon)} /> : <></>
      }

      <div className="pm-content">{menu.content}</div>
      {
        menu?.subMenus?.length ? <><i className={classNames("pm-right-icon", "icon-chevron-right")}></i>
          {
            showPopupMenu ? <ProfileSubmenus setShowPopupMenu={setShowPopupMenu} menus={menu?.subMenus} /> : <></>
          }
        </> : <></>
      }
    </div>
  )
}

const ProfileSubmenus = ({ menus }) => {
  return (
    <div className="profile-submenus">
      {
        menus?.map((menu, index) => (
          <div className="ps-menu" onMouseDown={() => { }} key={`submenu-${index}`}>{menu?.content}</div>
        ))
      }
    </div>
  )
}

export default SideBar;
