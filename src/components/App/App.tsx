import './App.scss';
import {UI} from '../UI/UI'
import {Route, Routes} from "react-router-dom";
import Header from "../Header/Header";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import Footer from "../Footer/Footer";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import AddBotPage from "../AddBotPage/AddBotPage";
import BotBuilder from "../BotBuilder/BotBuilder";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { ResetPassword } from '../ResetPassword/Reset-password';

function App() {
  return (
    <div className="page">
     <Header/>
     <SidebarMenu/>
     <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/addbot' element={<AddBotPage/>}/>
       <Route path='/botbuilder' element={<BotBuilder/>}/>
       <Route path='/signup' element={<Registration/>}/>
       <Route path='/signin' element={<Login/>}/>
       <Route path='/ui' element={<UI/>}/>
       <Route path='/reset-password' element={<ResetPassword />}/>
     </Routes>
     <Footer/>
     <InfoTooltip/>
    </div>
  );
}

export default App;
