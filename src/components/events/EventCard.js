// EVENT CARD

import React from 'react';
import './../Nutshell.css'
import "./EventCard.css"
import { useNavigate } from "react-router-dom";

export const EventCard = ({ event, handleDeleteEvent }) => {
  const navigate = useNavigate()

  return (
    <div className="events__card">
      <div className="event__card">
        <h4><span className="event__title">
          {event.label}
        </span></h4>
        <p>Happening On: {event.onDate} at {event.time}</p>
        <p>Details: {event.detail}</p>
        <p>Location: {event.location}</p>
        <p>Hosted by: {event.userId?.name}</p>


        <div className="crud__btns">
            <button className="crud__btn btn" type="button" onClick={() => handleDeleteEvent(event.id)} id="delete__btn">delete</button>

            <button className="crud__btn btn" id="edit__btn" onClick={() => {navigate(`/events/${event.id}/edit`)}}>edit</button>
        </div>

        <hr></hr>


      </div>

    </div>
  
  );
}