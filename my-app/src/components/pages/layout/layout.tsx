import { Outlet, Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { logOut } from "../../../store/reducers/mainSlice";

import logo from "../../../logo.png"

export default function Layout(): JSX.Element {
  const dispatch = useAppDispatch();
  const {userStatus, userLogin} = useAppSelector(state => state.main)

  return (
    <>
      <header>
        <Link to="/" title="/">
            <img src={logo} alt="logo"  width={80} height={40}/>
        </Link>
        <nav style={{marginLeft: "auto"}}>
            {userStatus && 
              <Link to="/history" title="/history">
                  History
              </Link>
            }
            {userStatus &&
              <Link to="/favorites" title="/favorites">
                 Favourite
              </Link>
            }  
            <Link to="/" title="/">
                Main
            </Link>
            {!userStatus && 
              <Link to="/signup" title="/signup">
                  Registration
              </Link>
            }
            {!userStatus &&
              <Link to="/signin" title="/signin">
                  Sign in
              </Link>
            }
            {userStatus && <button onClick={() => dispatch(logOut())}>
                Log out
            </button>}
            {userStatus && <span style={{color: "white"}}>Account:<b>{userLogin}</b></span>}
        </nav>
      </header>
      <main style={{ paddingLeft: 30}} >
        <Outlet />
      </main>
    </>
  );
}