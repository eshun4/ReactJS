import React  from "react";

const isSearched = (searchTerm) => (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase());


const Card = ({list, pattern, onDismiss}) => list.filter(isSearched(pattern)).map((item)=>
               <div key={item.objectID}>
                          <h1>{item.author}</h1>
                          <p> {item.title}</p>
                          <p> {item.points}</p>
                          <p> {item.num_comments}</p>
                          <span>
                          <button
                          onClick={() => onDismiss(item.objectID)}
                          type="button">
                          Dismiss 
                          </button>
                          </span>
                    </div>
        )

export default Card;