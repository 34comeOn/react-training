import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";

import Main from "./components/main/main";
import History from "./components/history/history";
import Selected from "./components/selected/selected";
import Registration from "./components/registration/registration";
import SignIn from "./components/sign-in/sign-in";
import NotFound from "./components/not-found/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
