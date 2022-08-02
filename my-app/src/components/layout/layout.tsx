import { Outlet, Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logOut } from "../../store/reducers/mainSlice";

export default function Layout(): JSX.Element {
  const dispatch = useAppDispatch();
  const {userStatus} = useAppSelector(state => state.main)

  return (
    <>
      <header>
        <Link to="/" title="/">
            <h3 style={{ color: "red"}}>F1 statistic</h3>
        </Link>
        <nav style={{marginLeft: "auto"}}>
            {userStatus && 
              <Link to="/history" title="/history">
                  History
              </Link>
            }
            {userStatus &&
              <Link to="/favorites" title="/favorites">
                 Selected
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
        </nav>
      </header>
      <main style={{ paddingLeft: 30}} >
        <Outlet />
      </main>
    </>
  );
}