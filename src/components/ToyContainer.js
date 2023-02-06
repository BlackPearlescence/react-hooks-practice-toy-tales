import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, setToyList}) {
  return (
    <div id="toy-collection">
      {toyList.map(toy => <ToyCard 
      key={toy.id} 
      toyItem={toy}
      toyList={toyList}
      setToyList={setToyList}/>)}
    </div>
  );
}

export default ToyContainer;
