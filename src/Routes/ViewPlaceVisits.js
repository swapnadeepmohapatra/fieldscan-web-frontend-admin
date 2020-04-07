import React, { useEffect } from "react";
import Base from "../Core/Base";
import { getFirebase } from "../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

function ViewPlaceVisits({ match }) {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  if (loading && !places.length) {
    getFirebase()
      .database()
      .ref("/places")
      .child(match.params._id)
      .child("visits")
      .orderByChild("visitTime")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let visitTime in snapshotVal) {
          posts.push(snapshotVal[visitTime]);
        }

        const newestFirst = posts.reverse();
        setPlaces(newestFirst);
        setLoading(false);
      });
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Base
      title="Visit History of the place"
      description="View all the visits of this place here !"
      className="bg-white"
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Aadhar Number</th>
            <th scope="col">e-mail</th>
            <th scope="col">Visit Time</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => {
            return (
              <tr key={index}>
                <th scope="row">{parseInt(index) + 1}</th>
                <td>{place._id}</td>
                <td>{place.name}</td>
                <td>{place.aadhar}</td>
                <td>{place.email}</td>
                <td>{place.visitTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Base>
  );
}

export default ViewPlaceVisits;

// import React from "react";

// function ViewPlaceVisits({ match }) {
//   return <div>{match.params._id}</div>;
// }

// export default ViewPlaceVisits;
