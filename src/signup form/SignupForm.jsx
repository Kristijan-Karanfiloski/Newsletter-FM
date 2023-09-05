import { IconList } from "../svg/IconList.jsx";
import "./SignupForm.scss";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice.jsx";
import { useState } from "react";

const SignupForm = () => {
  // const modal = useSelector((state) => state.modal.open);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // console.log("Email :", email);

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      // console.log("Please enter a valid email address");
      setIsValid(false);
    } else {
      // console.log("Email is valid");
      setIsValid(true);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail();
  };

  const handleOpen = () => {
    if (isValid) {
      dispatch(openModal());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    setIsSubmitted(true);
    // if (isValid) {
    //   console.log("Form submitted");
    // } else {
    //   console.log("Form contains errors");
    // }
    // setEmail("");
  };

  ////////////////////////////////////////////////////////////////

  return (
    <div className="signUp">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <div className="signUp__successList">
        <div className="signUp___successItem">
          <IconList />
          <p>Product discovery and building what matters</p>
        </div>
        <div className="signUp___successItem">
          <IconList />
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="signUp___successItem">
          <IconList />
          <p>And much more!</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signUp__emailInput">
          <label htmlFor="Email">Email address</label>
          <input
            onChange={handleEmailChange}
            value={email}
            type="text"
            id="Email"
            placeholder="email@company.com"
            // className={isValid || email === "" ? "validClass" : "invalidClass"}
            className={
              !isSubmitted && !isValid && email !== ""
                ? "invalidClass"
                : "validClass"
            }
          />
          {!isSubmitted && !isValid && email !== "" && (
            <p className="signUp__errorText">Enter valid email</p>
          )}
        </div>
        <div>
          <button
            // disabled={!isValid || email === ""}
            onClick={handleOpen}
            type="submit"
            className={
              isValid ? "signUp__button--enabled" : "signUp__button--disabled"
            }
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
