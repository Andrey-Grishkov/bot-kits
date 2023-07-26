import './App.scss';
import { Button } from '../UI/Button/Button'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="page">
        Privet
        <Routes>
            <Route path='/ui' element={<Button/>}/>
        </Routes>
      </div>
  );
}

export default App;
