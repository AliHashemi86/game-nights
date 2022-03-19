import React from "react";

export default function AppointmentItem(props) {
  return (
    <article
      id={props.id}
      style={{ textAlign: 'center' }}>
      <h1>{props.title}</h1>
      <img style={{ width: '500px', height: '400px' }} src={props.image} />
      <h4>Category: {props.category}</h4>
      <p>{props.description}</p>
      <button>JOIN</button>
    </article>
  );
}