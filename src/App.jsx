import { useSelector } from "react-redux";
import SignupForm from "./signup form/SignupForm.jsx";
import "./App.scss";

import Modal from "./modal/Modal.jsx";
import { ImgSvg } from "./svg/Img.jsx";

function App() {
  const modal = useSelector((state) => state.modal.open);
  return (
    <>
      {!modal ? (
        <main>
          <div className="newsLetter">
            <SignupForm />
            <div className="newsLetter__img">
              {/*<img*/}
              {/*  src="../public/illustration-sign-up-desktop.svg"*/}
              {/*  alt="signup img"*/}
              {/*/>*/}
              <ImgSvg />
            </div>
          </div>
          {/*<Todos />*/}
        </main>
      ) : (
        <Modal />
      )}
    </>
  );
}

export default App;
