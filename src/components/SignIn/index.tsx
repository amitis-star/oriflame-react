import React, { useState, ChangeEvent, FocusEvent } from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../../assets/icons/LeftArrow";
import InfoCircleIcon from "../../assets/icons/InfoCircleIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import CrossedEyeIcon from "../../assets/icons/CrossedEyeIcon";
import ErrorIcon from "../../assets/icons/Error";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [usernameHasTyped, setUsernameHasTyped] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [passwordHasTyped, setPasswordHasTyped] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    setUsername(val);
    if (val.length > 0) {
      setUsernameHasTyped(true);
      setUsernameError(false);
    }
  };

  const handleUsernameBlur = (e: FocusEvent<HTMLInputElement>): void => {
    if (usernameHasTyped && username.length === 0) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    setPassword(val);
    if (val.length > 0) {
      setPasswordHasTyped(true);
      setPasswordError(false);
    }
  };

  const handlePasswordBlur = (e: FocusEvent<HTMLInputElement>): void => {
    if (passwordHasTyped && password.length === 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // Tooltip with fixed width and wrapped text
  const wrappedTooltip = (text: string) => {
    return (
      <span
        className="
          absolute top-full mt-1 left-1/2 transform -translate-x-1/2
          bg-gray-200 text-black rounded px-2 py-1 opacity-0 pointer-events-none
          transition-opacity duration-300 text-center
          group-hover:opacity-100
          break-words
        "
        style={{ width: "300px", fontSize: "12px" }}
        aria-hidden="true"
      >
        {text}
      </span>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center min-h-screen">
        <div className="relative w-[390px] md:w-[450px] h-[450px] rounded-lg bg-white px-4 md:px-15 py-7.5 md:mt-12.5 mt-0">
          <Link to="/">
            <LeftArrow className="absolute top-7 left-4 w-[40px] h-[40px] text-gray-800" />
          </Link>

          <p className="px-[25px] mb-[25px] text-center text-25 font-600 text-black">
            Sign in
          </p>

          {/* Username */}
          <div
            className={`relative w-full h-12.5 border-b-2 transition duration-300 ${
              usernameError
                ? "border-red-600"
                : "border-b-gray-600 focus-within:border-green-600"
            }`}
          >
            <input
              type="text"
              id="username"
              className={`peer outline-none w-full bg-transparent pt-6 text-base placeholder-transparent ${
                usernameError ? "text-red-600" : "text-black"
              }`}
              placeholder="Member number or e-mail"
              value={username}
              onChange={handleUsernameChange}
              onBlur={handleUsernameBlur}
            />

            <label
              htmlFor="username"
              className={`absolute left-2 transition-all duration-300 origin-left
                peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:${
                  usernameError ? "text-red-600" : "text-gray-500"
                }
                peer-focus:-top-4 peer-focus:scale-75 peer-focus:${
                  usernameError ? "text-red-600" : "text-green-600"
                }
                ${
                  usernameError
                    ? "-top-4 scale-75 text-red-600"
                    : username && !usernameError
                    ? "-top-4 scale-75 text-green-600"
                    : ""
                }
              `}
            >
              Member number or e-mail
            </label>

            <div className="absolute right-2 top-4 group cursor-pointer">
              {usernameError ? (
                <>
                  <ErrorIcon className="text-red-800 w-6 h-6" />
                  {wrappedTooltip("Enter email or brand partner number.")}
                </>
              ) : (
                <>
                  <InfoCircleIcon className="text-gray-500 w-6 h-6" />
                  {wrappedTooltip(
                    "You can sign in using your consultant number email or telephone number."
                  )}
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-1 ml-1 mt-1">
            {usernameError && (
              <p className="text-red-600 text-12 font-400">
                Username is required.
              </p>
            )}
          </div>

          <div className="text-12 text-gray-600 font-400 underline hover:text-emerald-600 cursor-pointer mt-2 leading-none">
            Sign in with mobile phone
          </div>

          {/* Password */}
          <div
            className={`relative w-full h-12.5 border-b-2 transition duration-300 mt-6 flex items-center ${
              passwordError
                ? "border-red-600"
                : "border-b-gray-600 focus-within:border-green-600"
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`peer outline-none flex-1 bg-transparent placeholder-transparent pt-6 text-base ${
                passwordError ? "text-red-600" : "text-black"
              }`}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            <label
              htmlFor="password"
              className={`absolute left-2 transition-all duration-300 origin-left
                peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:${
                  passwordError ? "text-red-600" : "text-gray-500"
                }
                peer-focus:-top-4 peer-focus:scale-75 peer-focus:${
                  passwordError ? "text-red-600" : "text-green-600"
                }
                ${
                  passwordError
                    ? "-top-4 scale-75 text-red-600"
                    : password && !passwordError
                    ? "-top-4 scale-75 text-green-600"
                    : ""
                }
              `}
            >
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="focus:outline-none ml-2"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <CrossedEyeIcon /> : <EyeIcon />}
            </button>

            <div className="group ml-2 relative cursor-pointer">
              {passwordError && (
                <>
                  <ErrorIcon className="text-red-800 w-6 h-6" />
                  {wrappedTooltip("Enter password")}
                </>
              )}
            </div>
          </div>

          <div className="text-12 text-gray-600 font-400 underline hover:text-emerald-600 transition duration-300 cursor-pointer mt-2">
            Forgot your password?
          </div>

          <div className="flex justify-start items-center gap-2 mt-4">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black focus:ring-black"
            />
            <p className="text-16 font-200 cursor-pointer">Keep me signed in</p>
            <div className="group relative cursor-pointer">
              <InfoCircleIcon className="text-gray-400" />
              {wrappedTooltip(
                "You will stay logged in for 30 days. Choose this option only on personal devices for safety."
              )}
            </div>
          </div>

          <button className="w-full rounded-full h-11.5 bg-black text-white font-600 text-16 mb-2.5 py-2.5 px-5 mt-7.5 hover:bg-neutral-500 transition duration-300 cursor-pointer">
            SIGN IN
          </button>

          <p className="underline text-center text-14 font-700 text-gray-800 hover:text-emerald-600 transition duration-300">
            BECOME A VIP CUSTOMER
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
