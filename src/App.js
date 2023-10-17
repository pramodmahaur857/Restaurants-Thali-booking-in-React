import './App.css';
import Thali from "./Component/Thali"
import Checkout from "./Component/Checkout"
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import{useState,useEffect} from "react"
import Fooditem from "./Component/Fooditem"
import {useDispatch} from "react-redux"

// console.log(Fooditem)

export default function App() {
  const [foodData,setfoodData] = useState(Fooditem)
  const [checkData,setcheckdata] = useState([])
        // console.log("checkdata",checkData)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch({
      type:"AddData",
        payload:{
          data:foodData
        }
    })
  },[])
  useEffect(()=>{
      dispatch({
      type:"CheckData",
        payload:{
          Data:checkData
        }
    })
  },[])
   
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Thali />}></Route>
          <Route path="/check" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
