import { useRef } from "react";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const modal = useRef();
  function handleSignUp() {
    modal.current.open();
    
  }
  function handleClose() {
    modal.current.close();
    
  }
   let modalActions = <button className="button button-flat" onClick={()=> handleClose()}>Close</button>;

  return (
    <>
    <SignUpModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
        onCompleteFn={()=> handleClose()}
      />
    <header>
      <h1>Best Restaurants</h1>
      <button className="button" type="button" onClick={() => handleSignUp()}>
        Sign up your restaurant
      </button>
      <hr className="hr"></hr>
    </header>
    </>
  );
}
