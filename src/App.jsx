import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import QuizePage from "./pages/QuizePage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quizPage/:quizId" element={<QuizePage/>}/>
      <Route path="*" element={<PageNotFound/>}/>

    </Routes>
    </>
  )
}

export default App
