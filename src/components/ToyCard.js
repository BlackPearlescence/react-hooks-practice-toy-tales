import React, {useState} from "react";

function ToyCard({toyItem, toyList, setToyList}) {
  const [likes, setLikes] = useState(toyItem.likes);
  const handleToyDeleteClick = (e) => {
    fetch(`http://localhost:3001/toys/${toyItem.id}`,{
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
      }
    })
      .then((res) => console.log(res))
      setToyList(toyList.filter(toy => toy !== toyItem))
  }

  const handleLikeButtonClick = (e) => {
    setLikes(likes + 1);
    fetch(`http://localhost:3001/toys/${toyItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes: [likes]}),
    })
      .then((res) => res.json())
      .then((result) => console.log("Update Success: ", result))
      .catch((err) => console.log("Failure : ", err))
  }
  return (
    <div className="card">
      <h2>{toyItem.name}</h2>
      <img
        src={toyItem.image}
        alt={toyItem.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeButtonClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleToyDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
