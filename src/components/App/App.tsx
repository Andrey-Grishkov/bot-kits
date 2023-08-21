import "./App.scss";
import { UI } from "../UI/UI";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import AddBotPage from "../AddBotPage/AddBotPage";
import BotBuilder from "../BotBuilder/BotBuilder";
import NavBar from "../NavBar/NavBar";
import PageWrapper from "../PageWrapper/PageWrapper";
import SharedAccess from "../Shared/Shared";
import { ResetPassword } from "../ResetPassword/Reset-password";
import { Mailing } from "../Mailing/Mailing";
import { SubscriptionAndPayments } from "../SubscriptionAndPayments/SubscriptionAndPayments";
import { Chat } from '../Chat/Chat';

function App() {
    const location = useLocation();
    const isAuthPage = ["/reset-password", "/signup", "/signin"].includes(
        location.pathname
    );

    return (
        <div className='page app-container'>
            {isAuthPage ? null : <Header />}
            {isAuthPage ? null : <NavBar />}
            <PageWrapper>
                <Routes>
                    <Route path='/signup' element={<Registration />} />
                    <Route path='/signin' element={<Login />} />
                    <Route path='reset-password' element={<ResetPassword />} />
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/addbot' element={<AddBotPage />} />
                    <Route path='/botbuilder' element={<BotBuilder />} />
                    <Route
                        path='/subscription_and_payments'
                        element={<SubscriptionAndPayments />}
                    />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/partnership' element={<SharedAccess />} />
                    <Route path='/mailing' element={<Mailing />} />
                    <Route path='/ui' element={<UI />} />

                </Routes>
            </PageWrapper>
            {isAuthPage ? null : <Footer />}
        </div>
    );
}

export default App;
