import '../App.css';
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
export default function Thali() {
  const reduxdata = useSelector(state=>state.state.data)
  const reduxCheckdata = useSelector(state=>state.state.order)
  // console.log("reduxdata",reduxdata,"reduxCheckdata",reduxCheckdata)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const check =()=>{
    if(reduxCheckdata.length<2){
      alert("Minimum two items are required");
      return;
    }
    navigate("/check")
  }
  const addtothali = (id)=>{
    const data = reduxdata.find((item)=>item.id==id)
    // console.log(reduxCheckdata,"dataarr")
    dispatch({
      type:"Addthali",
      payload:{
        data:[...reduxCheckdata,data]
      }
    })
  
  }
  
  return (
    <div>
      <div className="cardcontainer">
        {reduxdata && reduxdata.map((item,index)=>{
          return<div key={item.id} className="foodcard">
            <div><img src={item.image} atl="fooditem" width="100%px" height="220px" ></img></div>
            <div> Name: {item.name}</div>
            <div> Price: {item.price}</div>
            <div>
              <button className="thalibtn" onClick={()=>addtothali(item.id)}>Add to Thali</button>
            </div>
          </div>
        })}
      </div>
      <div className="ft">
        <h3>View total disses here</h3>
      <div className="showAddData">
        <div>
          { reduxCheckdata &&reduxCheckdata.length>0  && reduxCheckdata.map((item,index)=>{
              return<li key={index+"one"}>{item.name}, </li>
          })}
        </div>
      </div>
        <button className="checkbtn" onClick={check}>Checkout</button>
      </div>
    </div>
  )
}
