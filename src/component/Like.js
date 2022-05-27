import React from "react";
import basket from "../assets/basket.svg";

export default function Like({ newArray, closeLike, removeToLike }) {
  return (
    <div className='like container z-10'>
      <h2>Preferiti</h2>
      {newArray.map((el, i) => {
        return (
          <>
            <div className='like z-20' key={i}>
              <img src={el.image_link}></img>
              <h4>{el.name}</h4>
              <a onClick={() => removeToLike(el)}>
                <img src={basket}></img>
              </a>
            </div>
          </>
        );
      })}
      <button onClick={closeLike}>Chiudi</button>
    </div>
  );
}
