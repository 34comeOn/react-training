import { Outlet, Link } from "react-router-dom";

export default function Layout() {
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
            <Link to="/selected" title="/selected">
                Selected
            </Link>
            <Link to="/" title="/">
                Main
            </Link>
            <Link to="/signup" title="/signup">
                Registration
            </Link>
            <Link to="/login" title="/login">
                Sign in
            </Link>
            <a href="#">
                Exit
            </a>
        </nav>
      </header>
      <main style={{ paddingLeft: 30}} >
        <Outlet />
      </main>
    </>
  );
}