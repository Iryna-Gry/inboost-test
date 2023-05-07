// import css from "./App.module.css";
import { Container, NotFound, Sidebar } from "components";
import { Routes, Route } from "react-router-dom";
import { SharedLayout, Home } from "pages";

function App() {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route index element={<Sidebar />} />
            {/* <Route element={<Main />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
