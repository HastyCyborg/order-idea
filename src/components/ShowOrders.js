import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function ShowOrders() {

    const mystyle = {
        padding: "3px",
        margin: "5px 40px",
        background: "#e0eda6",
        borderRadius: "5px 15px",
    }

  const [itemsList, setItemsList] = React.useState([]);
  const db = firebase.firestore();
  db.collection("orderItems")
    .get()
    .then((shanpshot) => {
      let temp = [];
      shanpshot.docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setItemsList(temp);
    });

  return <div>{
      itemsList.map((one)=>{
          return (<div key={one.person+one.item} style={mystyle}>Item: {one.item} for {one.person}</div>)
      })
      }</div>;
}
