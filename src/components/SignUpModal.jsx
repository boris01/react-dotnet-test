import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import SignUp from './SignUp';

const SignUpModal = forwardRef(function Modal(
  { actions, onCompleteFn },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: ()=> {
        dialog.current.close();
      }
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <SignUp onCompleteFn={onCompleteFn} actions={actions} />
      {/* <form method="dialog" id="modal-actions">
        {actions}
      </form> */}
    </dialog>,
    document.getElementById('modal')
  );
});

export default SignUpModal;
