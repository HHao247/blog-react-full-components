
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderMenus } from '../../helpers';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { actLogout } from '../../store/user/actions';


function HeaderMenus() {
  const menu = useSelector(state => state.MENU.menus);
  const currentUser = useSelector(state => state.USER.currentUser)
  const history = useHistory();
  const dispatch = useDispatch()
  const handleLogout = (e) => {
    e.preventDefault();
    let result = window.confirm("Bạn có chắc chắn muốn logout không?");
    if (result) {
      dispatch(actLogout())
      history.push("/");
    }
  };
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          {renderMenus(menu)}
        </ul>
        <ul className="header-nav__lists">
          <li className="user">
            {currentUser && (
              <Link to="/login">
                {/* <i className="icons ion-person" /> {currentUser.name} */}
                <div style={{ display: "flex" }}>
                  <img className="img-avatar" src={currentUser?.simple_local_avatar?.full}></img>
                  <i className="icons ion-person" /> {currentUser.name}
                </div>
              </Link>
            )}
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li>
            {!currentUser && (
              <Link to="/register" >
                <i className="icons ion-person" /> Dang ky
              </Link>
            )}
          </li>
          <li>
            {!currentUser && (
              <Link to="/login" >
                <i className="icons ion-person" /> Dang nhap
              </Link>
            )}
          </li>
        </ul>
      </div>


    </div>
  );
}

export default HeaderMenus;
