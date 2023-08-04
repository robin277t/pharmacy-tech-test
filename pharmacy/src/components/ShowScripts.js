import { useState, useEffect } from "react";

const ShowScripts = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const getScripts = async () => {
      const response = await fetch("http://3.8.206.209:5000/prescriptions/");
      const scriptsList = await response.json();
      setScripts(scriptsList.prescriptions);
      console.log(scriptsList);
    };
    getScripts();
  }, []);

  return (
    <div>
      {scripts.map((script) => (
        <p key={script.id}>
          Dosage:
          {script.dosage}
          <br></br>
          Item:
          {script.item}
          <br></br>
          Quantity:
          {script.quantity}
          <br></br>
          PatientID:
          {script.patient_id}
          <br></br>
        </p>
      ))}
    </div>
  );
};

export default ShowScripts;
