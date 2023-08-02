import "./App.scss";
import { UI } from "../UI/UI";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import AddBotPage from "../AddBotPage/AddBotPage";
import BotBuilder from "../BotBuilder/BotBuilder";
import NavBar from "../SidebarContainer/NavBar";
import PageWrapper from "../PageWrapper/PageWrapper";
import { NavProvider } from "../../context/navBarContext";

function App() {
  return (
    <div
      className="page"
      style={{
        display: "grid",
        gridTemplateColumns: "0.06fr 1fr",
        gap: "0px 0px",
        gridTemplateAreas: `"N H" "N C" "N F"`, // N-navBar, H- header, F - footer, C-Content/Pages
        maxWidth: "1440px",
        margin: "0 auto",
        //todo сетка под мобильный "N" "C" "F"
      }}
    >
      <NavProvider>
        <Header />
        <NavBar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addbot" element={<AddBotPage />} />
            <Route path="/botbuilder" element={<BotBuilder />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/ui" element={<UI />} />
          </Routes>
        </PageWrapper>
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
