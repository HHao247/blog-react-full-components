
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderMenus } from '../../helpers';


function HeaderMenus() {
  const menu = useSelector(state => state.MENU.menus);
  const currentUser = useSelector(state => state.USER.currentUser)
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          {renderMenus(menu)}
        </ul>
        <ul className="header-nav__lists">
          <li className="user">
            {
              currentUser &&
              <Link to="/login">
                <i className="icons ion-person" /> {currentUser?.name}
              </Link>
            }
            {
              !currentUser &&
              <Link to="/login">
                <i className="icons ion-person" /> Tài khoản
              </Link>
            }
          </li>
        </ul>
      </div>


    </div>
  );
}

export default HeaderMenus;
