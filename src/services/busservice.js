class BusService {
    async addBus(data) {
        var status = true;
        await fetch("http://localhost:3000/buses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json()) // to get response
            .then(result => status = true)  // to access result
            .catch(error => { console.log(error); })
        return status;
    }
    
    async GetAll() {
        //By Default Rest API - GET Method
        var result;
        await fetch("http://localhost:3000/buses")
        .then(res=>res.json())
        .then(data=>result=data)

        .catch(err=>console.log(err));
        //console.log(result);
        return result;
    }
    GetBus(id) {

    }
    deleteBus(id) {

    }
    updateBus(data) {

    }

}

export default new BusService();