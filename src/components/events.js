import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Events(){
    const[eventId,setEventId]=useState(null);
    const[name,setName]=useState('');
    const[foodItems,setFoodItems]=useState(null);
    const[eventPrize,setEventPrize]=useState(null);
    const[location,setLocation]=useState('');

    const changeEventId=()=>{
        //setEventId(eventId+1);        
    }
    useEffect(()=>{
        
    })
    return(
        <div>
            <button style={{float:"left"}} id="addevent" data-toggle="modal" data-target="#addEventModal" className="btn btn-outline-primary">Add Events</button>
            <hr></hr>
            <h2>Events Details</h2>
            <hr></hr>
    
<div class="modal fade" id="addEventModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
                <div className="form-group">
                    <label>Event Id</label>
                    <input type="text" value={eventId} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Food Items</label>
                    <input type="number" value={foodItems} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Event Prize</label>
                    <input type="number" value={eventPrize} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" value={location} className="form-control" />
                </div>
                
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
           
        </div>
    )
}