import React,{ useEffect,useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker"
import { useSelector, useDispatch } from "react-redux";
import "./css/App.css";
import Axios from "axios";
import ShowBox from "./showBox";


function App() {
const [briefList, setbriefList] = useState([]);
const dispatch = useDispatch()

  useEffect(() => {
    Axios.get("https://api.agrihawk.in/api/devices/getMarkers?access_token=EFxkmrvH1zoctRpH7Q3X5nZhOSIj5E6lmM2wrdF4PJtOJnOdOztfQcatpBux4vck").then(res=>{
      console.log(res.data);
      setbriefList(res.data)
    })
  }, [])

  const handleListItems=(x,y)=>{
    dispatch({type:"SET_LOAD",data:"lv"});
    Axios.get(`https://api.agrihawk.in/api/plots/getLatestDataForMap?plotId=${x}&access_token=EFxkmrvH1zoctRpH7Q3X5nZhOSIj5E6lmM2wrdF4PJtOJnOdOztfQcatpBux4vck`).then(res=>{
      dispatch({type:"SET_DETAILED_DATA",data:res.data})
      dispatch({type: "SET_PLOT", data:y})
      dispatch({type:"SET_LOAD",data:"liv"});
              })
  }


  const defaultProps = {
    center: {
      lat: 18.5204,
      lng: 73.8567,
    },
    zoom: 7,
  };

  
  return (
    <div className="App">
      <div className="listAndMap">
      <div className="locationList">  
      <div className="listHeader">
        LOCATIONS
      </div>
      <hr/>
      <div className="listItems">
        {briefList.map(a=>
          <div className="oneItem" onClick={()=>handleListItems(a.plotId,a.place)}>{a.place}</div>
        )}
      </div>
      </div>
      <div className="map">
      <GoogleMapReact
      resetBoundsOnResize={true}
        bootstrapURLKeys={{ key: "AIzaSyDWrXpBdGdSAgoyPTaZKZvPcUGzeKvErRg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        style={{ height: "100%", width: "100%" }}
      >
        {briefList.map(a=><Marker plotId={a.plotId} lat={a.location.lat} lng={a.location.lng} text={a.place} />)}
        
      </GoogleMapReact>
      </div>
      </div>
      <div className="details">
        <ShowBox/>
      </div>
      
      
    </div>
  );
}

export default App;
