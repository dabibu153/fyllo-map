import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";

function ShowBox() {
    const detailedData = useSelector(state => state.detailedData);
    const plotLocation = useSelector(state => state.plotLocation);
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();
    console.log("place",plotLocation);

    
    return (
        <div className="showBox" style={{width:"100%"}}>
            
            {detailedData==="nil"?(<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100%",width:"100%", color:"lightgray",fontSize:"30px"}}> select location from MAP or LIST</div>):(<div className="information">
                <div className="showBoxTop">
    <div className="detailHeader">{plotLocation}</div>
    <div className={loading}>loading...</div>
    </div>
                <ul>
    <li>updated on: {detailedData.timestamp}</li>
    <li>air Temperature: {detailedData.airTemp}</li>
    <li>air Humidity: {detailedData.airHumidity}</li>
    <li>leaf Wetness: {detailedData.leafWetness}</li>
    <li>light Intensity: {detailedData.lightIntensity}</li>
    <li> rainfall: {detailedData.rainFall}</li>
                </ul>
            </div>)}
            
        </div>
    )
}

export default ShowBox
