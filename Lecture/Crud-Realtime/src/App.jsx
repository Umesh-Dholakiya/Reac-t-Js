import { useState } from "react"
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

function App() {

  const [name , setName] = useState("");
  const [phone , setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getDatabase(app);

    let id = Math.floor(Math.random() * 10000);

    set(ref(db , `users/${id}`), {
      name : name,
      phone : phone
    })

    alert("Record is Added....!")

    setName("");
    setPhone("");
  }

  return (

    <div align="center">

      <h2>Add Record</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name : </label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>

        <br />

        <div className="form-group">
          <label htmlFor="phone"> Phone : </label>
          <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
        </div>
        <br />

        <input type="submit" defaultValue="Submit" />
      </form>
    </div>


  )
}

export default App


