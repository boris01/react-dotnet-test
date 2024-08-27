import { useState } from "react";
import {insertNewRestaurant} from "../http"

export default function Signup({onCompleteFn, actions }) {
 const [errorUpdatingRestaurants, setErrorUpdatingRestaurants] = useState();

 async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const ads = form.getAll("ads");
    const data = Object.fromEntries(form.entries());
    data.ads = ads;
    console.log(data);
    try {
        await insertNewRestaurant(data);
        
      } catch (error) {
       
        setErrorUpdatingRestaurants({
          message: error.message || 'Failed to update restaurants.',
        });
      }
    event.target.reset();
    onCompleteFn();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="signup-header">Welcome on board!</h2>
      <p className="signup-header">
        We just need a little bit of data from you to get you started 🚀
      </p>
      <hr />
      <div className="control-row">
        <div className="control">
          <label htmlFor="name">Restaurant Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <fieldset>
        <legend>How to find you?</legend>
        <div className="control-row">
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="ads"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
          <div className="control">
            <input
              type="checkbox"
              id="facebook"
              name="ads"
              value="facebook"
            />
            <label htmlFor="friend">Facebook</label>
          </div>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        {actions ? actions : null}
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
