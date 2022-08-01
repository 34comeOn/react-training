import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";

import Main from "./components/main/main";
import History from "./components/history/history";
import Selected from "./components/selected/selected";
import Registration from "./components/registration/registration";
import SignIn from "./components/sign-in/sign-in";
import Search from "./components/search/search";
import NotFound from "./components/not-found/not-found";

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
