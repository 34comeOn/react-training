import { Outlet, Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks/hooks";
import { logOut } from "../../store/reducers/mainSlice";

export default function Layout(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <header>
        <Link to="/" title="/">
            <h3>Logo place</h3>
        </Link>
        <nav>
            <Link to="/history" title="/history">
                History
            </Link>
            <Link to="/favorites" title="/favorites">
                Selected
            </Link>
            <Link to="/" title="/">
                Main
            </Link>
            <Link to="/signup" title="/signup">
                Registration
            </Link>
            <Link to="/signin" title="/signin">
                Sign in
            </Link>
            <button onClick={() => dispatch(logOut())}>
                Log out
            </button>
        </nav>
      </header>
      <main style={{ paddingLeft: 30}} >
        <Outlet />
      </main>
    </>
  );
}