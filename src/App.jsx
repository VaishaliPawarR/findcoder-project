import FindCoder from "./Components/FindCoder"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import ExploreWork from "./Components/ExploreWork"
import HireTalents from "./Components/HireTalents"
import DevBoard from "./Components/DevBoard"
import Challenges from "./Components/Challenges"

const App=()=> {
  return (
    <div>
       <BrowserRouter>
        <FindCoder/>
          <Routes>
            <Route element={<ExploreWork/>} path="/" />
            <Route element={<HireTalents/>} path="/hire"/>
            <Route element={<DevBoard/>} path="/dev"/>
            <Route element={<Challenges/>} path="/challenge"/>

          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App