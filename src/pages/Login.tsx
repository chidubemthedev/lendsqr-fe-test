import React, { useRef, useState } from "react";
import signIn from "@/assets/sign-in-banner.svg";
import brandLogo from "@/assets/logo.svg";
import classes from "./Login.module.scss";

type Props = {};

const Login = (props: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email) {
      setEmailError("Please enter an email address");
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(null);
    }

    if (!password) {
      setPasswordError("Please enter a password");
    } else {
      setPasswordError(null);
    }

    if (email && password) {
      setLoading(true);
      console.log(`Email: ${email}, Password: ${password}`);
    }
  };

  return (
    <>
      <div className={classes.logo}>
        <img src={brandLogo} alt="brand logo" />
      </div>

      <div className={classes.container}>
        <div className={classes.banner}>
          <div>
            <img src={signIn} alt="signin banner" />
          </div>
        </div>

        <div className={classes.formcontainer}>
          <div className={classes.form}>
            <h1>Welcome!</h1>
            <div>Enter details to login.</div>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" ref={emailRef} />
              {emailError && <p className={classes.error}>{emailError}</p>}

              <input type="password" placeholder="Password" ref={passwordRef} />
              {passwordError && (
                <p className={classes.error}>{passwordError}</p>
              )}

              <p>Forgot password?</p>
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "LOG IN"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
