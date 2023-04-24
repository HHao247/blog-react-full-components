import { useEffect } from 'react'
import './header.css'
import HeaderLogo from './HeaderLogo'
import HeaderMenus from './HeaderMenus'
import HeaderSearch from './HeaderSearch'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllMenusAsync } from '../../store/menu/actions'

function Header() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actFetchAllMenusAsync())
  },[dispatch])
  
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenus />
        </div>
      </div>
    </header>

  )
}

export default Header