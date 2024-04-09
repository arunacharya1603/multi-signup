import React,{useContext} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdForwardToInbox } from "react-icons/md";
import { UserContext } from "../context/UserContext";

const Dribbble = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      <Navbar />

      <div className=" flex justify-center p-4 items-center">
        <div className="bg-white mt-10">
          <h1 className="text-2xl font-bold text-center mb-4">
            Please verify your email...
          </h1>
          <div className="flex flex-col items-center">
            <div className="bg-pink-500 rounded-full p-2 mb-4">
              <MdForwardToInbox className="w-8 h-5" />
            </div>
            <div>
              <p className="mb-2">We've sent a confirmation email to:</p>
            </div>
            <div>
              <p className="font-bold mb-4">{userData.email}</p>
            </div>
            <div>
              <p className="text-sm mb-2">
                <button className="text-pink-500 font-semibold hover:underline">
                  Click the confirmation link
                </button>{" "}
                in that email to begin using Dribbble.
              </p>
            </div>
            <div>
              <p className="text-sm mb-4">
                Didn't receive the email? Check your spam folder, it may have
                been caught by a filter. If you still don't see it, you can{" "}
                <button className="text-pink-500 font-semibold hover:underline">
                  resend the confirmation email
                </button>
                .
              </p>
            </div>
            <div>
              <p className="text-sm mb-2">
                Wrong email address?
                <button className="text-pink-500 font-semibold hover:underline">
                  Change it.
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dribbble;
