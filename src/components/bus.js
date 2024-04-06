import { useState, useEffect } from "react";
import BusService from "../services/busservice";
import 'bootstrap/dist/css/bootstrap.min.css';
//import busservice from "../services/busservice";
export default function Bus() {
  const [busNo, setBusNo] = useState(null);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [seats, setSeats] = useState(null);
  const [buses,setBuses]=useState([]);
  const [loadStatus, setLoadStatus] = useState(false);
  const [title, setTitle] = useState('');

  const changeBusNo = (e) => {
    setBusNo(e.target.value);
  }
  const changeSource = (e) => {
    setSource(e.target.value);
  }
  const changeDestination = (e) => {
    setDestination(e.target.value);
  }
  const changeSeats = (e) => {
    setSeats(e.target.value);
  }
  const addBus=async ()=>{
    var data={"busno":busNo,"source":source,"destination":destination,"seats":seats};
    var status=await BusService.addBus(data);
    if(status){
      alert('Saved');
      getAll();
    }
    else{
      alert('Error!!');
    }
  }
  const getAll=async ()=>{
    var result=await BusService.GetAll();
    //console.log(result);
    setBuses(result);    
  }  
  const changeTitle=(text, obj)=>{
    if(text=="Add"){
      setTitle(text+' Bus');
    }
    else{
    setTitle(text+' Bus');
    setBusNo(obj.busno);
    setSource(obj.source);
    setDestination(obj.destination);
    setSeats(obj.seats);
    }
  }
  useEffect(() => {
    if(loadStatus==false){
      getAll();
      setLoadStatus(true);
    }
  })
  return (
    <div>
      <button style={{ float: "left" }} id="addbus" data-toggle="modal" data-target="#addBusModal" className="btn btn-outline-primary" onClick={()=>changeTitle('Add')}>Add Bus</button>
      <hr></hr>
      <h2>Bus Details</h2>
      <hr></hr>
      <table className="table table-border">
        <thead>
          <tr>
            <th>Id</th>
            <th>BusNo</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Seats</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((obj)=>(
            <tr>
              <td>{obj.id}</td>
              <td>{obj.busno}</td>
              <td>{obj.source}</td>
              <td>{obj.destination}</td>
              <td>{obj.seats}</td>
              <td><button className="btn btn-primary" onClick={()=>changeTitle('Edit', obj)} data-toggle="modal" data-target="#addBusModal">Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>changeTitle('Delete')} data-toggle="modal" data-target="#addBusModal">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div class="modal fade" id="addBusModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group">
                  <label>BusNo</label>
                  <input type="text" value={busNo} onChange={changeBusNo} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Source</label>
                  <input type="text" value={source} onChange={changeSource} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Destination</label>
                  <input type="text" value={destination} onChange={changeDestination} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Seats</label>
                  <input type="number" value={seats} onChange={changeSeats} className="form-control" />
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={addBus} class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}