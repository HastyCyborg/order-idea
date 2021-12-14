import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function AddItem() {
  const db = firebase.firestore();
  const [nameInput, setNameInput] = React.useState("");
  const [orderInput, setOrderInput] = React.useState("");

  const submitHandeller = (e) => {
    e.preventDefault();
    if (nameInput.trim().length === 0) {
      alert("Name field is empty. Pl add your name before submitting.");
    } else if (nameInput.trim().length === 0) {
      alert("Order not specified. Pl add your order before submitting.");
    } else {
      const temp1 = nameInput;
      const temp2 = orderInput;
      console.log(temp2, temp1);
      db.collection("orderItems")
        .add({
          item: temp2,
          person: temp1,
        })
        .then(() => {
          console.log("datasubmitted");
          window.location.reload(false);
        });
    }
  };

  const nameChanger = (e) => {
    setNameInput(e.target.value);
  };

  const itemChanger = (e1) => {
    setOrderInput(e1.target.value);
  };

  return (
    <form>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name?"
        style={{ maxWidth: "20%", margin: "4px", borderRadius: "3px" }}
        onChange={nameChanger}
      />
      <input
        type="text"
        id="orderitem"
        name="orderitem"
        placeholder="Your item?"
        style={{ maxWidth: "20%", margin: "4px", borderRadius: "3px" }}
        onChange={itemChanger}
      />
      <button
        id="submit"
        style={{
          backgroundColor: "#1a2a59",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "4px",
        }}
        onClick={submitHandeller}
      >
        Add
      </button>
    </form>
  );
}
