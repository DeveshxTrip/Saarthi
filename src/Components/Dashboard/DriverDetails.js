import { Link, useParams } from "react-router-dom";
import { auth, db } from '../Firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"


const DriverDetails = (user) => {
    
    return(
     <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2 >Employee Create</h2>
                </div>
                <div className="card-body"></div>

                    <div className="calls" key={user.id}>
                        <h2>The Employee name is : <b>{user.name}</b></h2>
                        <h3>Contact Details</h3>
                        <h5>Address is : {user.address}</h5>
                        <h5>Phone is : {user.phone}</h5>
                        <Link className="btn btn-danger" to="dashboard/">Back to Listing</Link>
                    </div>
                
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >

        )}

export default DriverDetails;