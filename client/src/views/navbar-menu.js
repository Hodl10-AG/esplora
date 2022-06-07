import Snabbdom from 'snabbdom-pragma'
import navToggle from './nav-toggle'
import {updateQuery} from "../util";

const items  = process.env.MENU_ITEMS && JSON.parse(process.env.MENU_ITEMS)
    , active = process.env.MENU_ACTIVE

const staticRoot = process.env.STATIC_ROOT || ''

export default ({ t, theme, page }) =>

<div className="main-nav-container">
    { process.browser ? <div className="switch-theme-icon toggle-theme"> </div>
        : <a href={page.pathname.substr(1) + updateQuery(page.query, { theme: otherTheme[theme] })} className="switch-theme-icon"></a>
    }
    {/*<a href={page.pathname.substr(1) + updateQuery(page.query, { theme: otherTheme[theme] })} className="switch-theme-icon">asd</a>*/}

  {/*<ul className="main-nav">*/}
  {/*  { items && Object.entries(items).map(([ name, url ]) =>*/}
  {/*      <li id={name.replace(/ /g, '')} className={`nav-item ${name == active ? 'active' : ''}`}>*/}
  {/*        <a className="nav-link" href={url} rel="external">*/}
  {/*          <span><img className="menu-logo" alt="" src={`${staticRoot}img/icons/${name.replace(/ /g, '')}-menu-logo.svg`} /></span>*/}
  {/*          <span>{t(name)}</span>*/}
  {/*        </a>*/}
  {/*      </li>*/}
  {/*  ) }*/}
  {/*</ul>*/}
  {/*  { process.env.NAVBAR_HTML ? navToggle(t, theme, page) : "" }*/}
  </div>