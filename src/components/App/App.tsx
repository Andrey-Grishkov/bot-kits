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
import NavBar from "../NavBar/NavBar";
import PageWrapper from "../PageWrapper/PageWrapper";
import { ResetPassword } from '../ResetPassword/Reset-password';

function App() {
    return (
        <div className='page app-container'>
            <Header />
            <NavBar />
            <PageWrapper>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/addbot' element={<AddBotPage />} />
                    <Route path='/botbuilder' element={<BotBuilder />} />
                    <Route path='/signup' element={<Registration />} />
                    <Route path='/signin' element={<Login />} />
                    <Route path='/ui' element={<UI />} />
                    <Route path='/reset-password' element={<ResetPassword />}/>
     </Routes>
            </PageWrapper>
            <Footer />
        </div>
    );
}

export default App;
