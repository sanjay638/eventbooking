import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hotels() {
    const [hotalId, setHotalId] = useState(null);
    const [name, setName] = useState('');
    const [lift, setlift] = useState('');
    const [hotalTiming, setHotalTiming] = useState(null);
    const [totalFloor, setTotalFloor] = useState(null);
    const [roomSize, setRoomSize] = useState('');
    const [amount, setAmount] = useState(null);

    const changeHotalId = () => {
        //setHotalId(hotalId + 1);
    }
    useEffect(() => {

    })
    return (
        <div>
            <button style={{ float: "left" }} id="addhotal" data-toggle="modal" data-target="#addHotalModal" className="btn btn-outline-primary">Add Hotals</button>
            <hr></hr>
            <h2>Hotals Details</h2>
            <hr></hr>

            <div class="modal fade" id="addHotalModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label>Hotal Id</label>
                                    <input type="text" value={hotalId} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={name} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Lift</label>
                                    <input type="text" value={lift} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Hotal Timing</label>
                                    <input type="number" value={hotalTiming} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Total Floor</label>
                                    <input type="number" value={totalFloor} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Starting Amount</label>
                                    <input type="number" value={amount} className="form-control" />
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