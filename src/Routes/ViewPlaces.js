import React, { useEffect } from "react";
import Base from "../Core/Base";
import { getFirebase } from "../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

function ViewPlaces() {
  // const [data, setData] = useState([]);

  // const getAllPlaces = () => {
  //   getFirebase()
  //     .database()
  //     .ref("/places")
  //     .once("child_added", (dataSnapshot) => {
  //       console.log(dataSnapshot.val());
  //       setData([...data, dataSnapshot.val()]);
  //     });
  // };
  // useEffect(() => {
  //   getAllPlaces();
  // }, []);
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  if (loading && !places.length) {
    getFirebase()
      .database()
      .ref("/places")
      .orderByChild("_id")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let _id in snapshotVal) {
          posts.push(snapshotVal[_id]);
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
      title="Places"
      description="View All Places here !"
      className="bg-white"
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Address</th>
            <th scope="col">History</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => {
            return (
              <tr key={index}>
                <th scope="row">{parseInt(index) + 1}</th>
                <td>{place._id}</td>
                <td>{place.name}</td>
                <td>{place.category}</td>
                <td>{place.address}</td>
                <td>
                  <Link to={`/admin/places/visits/${place._id}`}>
                    <button className="btn btn-warning">View History</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Base>
  );
}

export default ViewPlaces;
