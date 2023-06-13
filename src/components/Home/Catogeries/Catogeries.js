// catogeries card to be placed after movie slider
// 6 catogries buttons horror , comedy , action , thriller , documentry , 
import React from "react";

const res = {overflowX: 'auto'}

const btncss = {
    minHeight : 70,
    minWidth : 500,
}
const spacercss = {
    marginTop : 5,
}
function Catogeries(){
    
    return(
        <>
            <div className="d-grid gap-5 d-md-flex justify-content-md-center " style={spacercss}>
                <button className="btn btn-outline-success btn-lg" type="button" >Horror</button>
                <button className="btn btn-outline-danger btn-lg" type="button">Romance</button>
                <button className="btn btn-outline-warning btn-lg" type="button">Action</button>
                <button className="btn btn-outline-info btn-lg" type="button">Thriller</button>
                <button className="btn btn-outline-light btn-lg" type="button">Documentry</button>
                <button className="btn btn-outline-primary btn-lg" type="button">Comedy</button>
            </div>
        </>
    );
}

export default Catogeries;