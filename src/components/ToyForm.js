import React, {useState} from "react";

function ToyForm({toyList, setToyList}) {
  const [toyFormData, setToyFormData] = useState({
    name: "",
    image: "",
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setToyFormData({...toyFormData, [name]: value})
    console.log(toyFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToy = {
      name: toyFormData.name,
      image: toyFormData.image,
      likes: 0,
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((newData) => {
        console.log("Success: ", newData)
        setToyList([...toyList, newData])
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleOnChange}
          value={toyFormData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleOnChange}
          value={toyFormData.value}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
