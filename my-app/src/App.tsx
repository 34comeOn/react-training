import { Routes, Route } from "react-router-dom";
import Layout from "./components/pages/layout/layout";

import Main from "./components/pages/main/main";
import History from "./components/pages/history/history";
import Selected from "./components/pages/selected/selected";
import Registration from "./components/logIn/registration/registration";
import SignIn from "./components/pages/sign-in/sign-in";
import Search from "./components/pages/search/search";
import NotFound from "./components/pages/not-found/not-found";
import Details from "./components/pages/details/details";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/favorites" element={<Selected />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
