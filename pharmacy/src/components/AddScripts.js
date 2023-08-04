import { useState } from "react";
const ShowScripts = () => {
  const [dosage, setDosage] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleUpdateDosage = (event) => {
    setDosage(event.target.value);
  };

  const handleUpdateItem = (event) => {
    setItem(event.target.value);
  };

  const handleUpdateQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const addScript = async (event) => {
    event.preventDefault();

    fetch("http://3.8.206.209:5000/prescriptions/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dosage: dosage,
        item: item,
        patient_id: 0,
        quantity: quantity,
      }),
    });
  };

  return (
    <div>
      Hello please add a script to me
      <form onSubmit={addScript}>
      <button>Submit</button>
        <input
          placeholder="Dosage"
          id="dosage"
          type="text"
          value={dosage}
          onChange={handleUpdateDosage}
        />
        <input
          placeholder="Item"
          id="item"
          type="text"
          value={item}
          onChange={handleUpdateItem}
        />
        <input
          placeholder="Quantity"
          id="quantity"
          type="text"
          value={quantity}
          onChange={handleUpdateQuantity}
        />
      </form>
    </div>
  );
};

export default ShowScripts;
