import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";

const options = [
  {
    id: 1,
    icon: "https://media.istockphoto.com/id/1616430485/vector/graphweb-development-concept-website-coding-web-page-3d-web-vector-illustrations.jpg?s=1024x1024&w=is&k=20&c=aosEVYTPyZ_LuL7wX-zUiVBnh-g7T--ospWdA7XVM7M=",
    text: "I'm a designer looking to share my work",
    message: "I am message  one and i am big and i am writting this to make it big",
  },
  {
    id: 2,
    icon: "https://media.istockphoto.com/id/1411641418/vector/digital-marketing-concept-with-icons-symbols-social-network-and-media-communication-landing.jpg?s=1024x1024&w=is&k=20&c=i0ndDa7zGLgGqkzUjcPiXwISXVQnmw8FrG387lUE7jc=",
    text: "I'm looking to hire a designer",
    message: "I am message  one and i am big and i am writting this to make it big",
  },
  {
    id: 3,
    icon: "https://media.istockphoto.com/id/1129146924/vector/summer-vacation-online-ordering.jpg?s=1024x1024&w=is&k=20&c=flmvInZfLS5Rmm5mOXZdwvjQFKfgs3TYpcNJriA_2R0=",
    text: "I'm looking for design inspiration",
    message: "I am message  one and i am big and i am writting this to make it big",
  },
];

const OptionCard = ({
  id,
  icon,
  text,
  message,
  handleCheckboxChange,
  handleMouseEnter,
  handleMouseLeave,
  hoveredOption,
}) => (
  <div
    className="flex flex-col items-center p-4 border rounded-lg cursor-pointer relative"
    onMouseEnter={() => handleMouseEnter(id)}
    onMouseLeave={handleMouseLeave}
  >
    <div className="relative h-32 w-32">
      <div className="overflow-show absolute inset-0 flex items-center justify-center">
        <img
          src={icon}
          alt="icon"
          className={`object-cover ${
            hoveredOption === id ? "-translate-y-1/2" : "translate-y-0"
          }`}
          style={{ minHeight: '100%', minWidth: '100%', height: 'auto', width: 'auto' }}
        />
      </div>
    </div>
    {hoveredOption === id && (
      <p className="absolute bottom-20 left-0 right-0 bg-black bg-opacity-50 text-white py-1 text-center">
        {message}
      </p>
    )}
    <p className="text-black">{text}</p>
    
    <div className="mt-2">
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="rounded-full border-gray-300 p-2"
        onChange={() => handleCheckboxChange(id)}
      />
      <label htmlFor={`checkbox-${id}`} className="ml-2">
        Select
      </label>
    </div>
  </div>
);


const Explore = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [hoveredOption, setHoveredOption] = useState(null);
  const navigate = useNavigate();

  const handleCheckboxChange = (id) => {
    const index = selectedOptions.indexOf(id);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, id]);
    } else {
      setSelectedOptions(selectedOptions.filter((optionId) => optionId !== id));
    }
  };

  const handleFinish = () => {
    // Navigate to the Home page
    navigate("/dribbble");
  };

  const handleMouseEnter = (id) => {
    setHoveredOption(id);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
        <div className="absolute flex left-0 top-0 p-4">
          <h1 className="text-pink-500 font-sacramento">dribbble</h1>
          <div className="inline-block ml-4">
            <button onClick={()=>navigate("/profile")} className="bg-gray-200 border border-yellow-500 rounded p-1">
              <GrFormPrevious className="text-brown-500 h-5 w-5" />
            </button>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">
          What brings you to Dribbble?
        </h1>
        <p className="mb-6 font-medium text-gray-500 text-center">
          Select the options that best describe you. Don't worry; you can
          explore other options later.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {options.map((option) => (
            <OptionCard
              key={option.id}
              id={option.id}
              icon={option.icon}
              text={option.text}
              message={option.message}
              handleCheckboxChange={handleCheckboxChange}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredOption={hoveredOption}
            />
          ))}
        </div>
        <button
          disabled={selectedOptions.length === 0}
          onClick={handleFinish}
          className={`bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 ${
            selectedOptions.length === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Finish
        </button>
      </div>
    </>
  );
};

export default Explore;
