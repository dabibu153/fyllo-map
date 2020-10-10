import Axios from 'axios';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function Marker(props) {
    const dispatch = useDispatch();

    const handleDetails=(x)=>{
        
        console.log(x);
        Axios.get(`https://api.agrihawk.in/api/plots/getLatestDataForMap?plotId=${x}&access_token=EFxkmrvH1zoctRpH7Q3X5nZhOSIj5E6lmM2wrdF4PJtOJnOdOztfQcatpBux4vck`).then(res=>{
dispatch({type:"SET_DETAILED_DATA",data:res.data})
dispatch({type: "SET_PLOT", data:props.text})
        })
      }

    return (
        <div className="marker" onClick={()=>handleDetails(props.plotId)}>
            {props.text}
        </div>
    )
}

export default Marker
