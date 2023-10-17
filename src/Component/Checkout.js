import '../App.css';
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux";

export default function Checkout() {
  const dispatch = useDispatch()
  const reduxCheckdata = useSelector(state=>state.state.order)
  const [price,setPrice] = useState()
  const [quty, setquty] = useState()
  // console.log("price",price,"quntity",quty)
  useEffect(()=>{
    let p = 0;
    let q= 0;
     if(reduxCheckdata){
       for(let i = 0; i<reduxCheckdata.length;i++){
         p += reduxCheckdata[i].price;
         q += 1
       }
     }
    setPrice(p)
    setquty(q)
  },[reduxCheckdata])
  const delitem=(id)=>{
    const filterItem = reduxCheckdata.filter((item,index)=>{
      return index!==id
    })
    dispatch({
      type:"Delitem",
      payload:{
        data:filterItem
      }
    })
    // console.log("filterarr",filterItem)
  }
  return (
    <div>
      <div className="header">
        <Link className="link" to="/">Home</Link>
      </div>
      <div className="cardcontainer">
        { reduxCheckdata &&reduxCheckdata.length>0 && reduxCheckdata.map((item,index)=>{
          return<div key={index+"tow"} className="foodcard">
            <div><img src={item.image} width="100%px" height="220px" atl="fooditem"></img></div>
            <div> Name: {item.name}</div>
            <div> Price: {item.price}</div>
            <button className="dltbtn" onClick={()=>delitem(index)}>Remove</button>
            <div>
            </div>
          </div>
        })}
      </div>
      {reduxCheckdata && reduxCheckdata.length>0 && <div className="result">
        <div>Total Items: {quty} </div>
        <div>Total Price: {price} Rs </div>
      </div>}
    </div>
  )
}
