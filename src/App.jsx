import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import QuizePage from "./pages/QuizePage"
import QuationCard from "./component/QuationCard"
import QuizeResult from "./pages/QuizeResult"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quizPage/:quizId" element={<QuizePage/>}/>
      <Route path="/quizeResult/:quizId" element={<QuizeResult/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/qCard" element={<QuationCard/>}/>
    </Routes>
    </>
  )
}

export default App
