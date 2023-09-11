import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/booking.css";

return (
    <>
    <h1> Book a Table</h1>
    <div className="booking-wrapper">
        <form method="POST">
            <fieldset id="size">
             <label>
               <input type="radio" value="2" name="size"> 2-person table</input>
             </label>
             <label>
               <input type="radio" value="4" name="size" checked> 4-person table</input>
             </label>
             <label>
               <input type="radio" value="6" name="size" checked> 6-person table</input>
             </label>
            </fieldset>
            <fieldset id="location">
              <label>
                <input type="radio" value="indoors" name="location" checked> Indoors</input>
              </label>
              <label>
                <input type="radio" value="outdoors" name="location"> Outdoors</input>
              </label>
            </fieldset>
            <button type="submit">Book table</button>
        </form>
    </div>
    </>
);