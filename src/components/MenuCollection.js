import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function Mcol() {
  const [menuImages, setMenuImages] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("menuForHotel")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.docs.forEach((doc) => {
          temp.push(doc.data());
        });
        setMenuImages(temp);
        console.log(menuImages);
      });
  }, [db],[menuImages]);

  return (
    <div>
      {menuImages.map((one) => {
        return (<a href={one.source} key={one.source+"sa"}><img key={one.source} alt="Menu was here" src={one.source} style={{margin: "5px", maxWidth: "80%", height: "auto", borderRadius: "10px"}} /></a>);
      })}
    </div>
  );
}
