import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../context/UserContext.jsx';

const Profile = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const { userData, setUserData, updateProfileImage } = useContext(UserContext);

  const handlePhoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setSelectedPhoto(reader.result);
          // Update the profile image in the context
          updateProfileImage(reader.result);
        };
      }
    };
    input.click();
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleNext = () => {
    navigate('/explore');
  };

  // Determine if the next button should be enabled
  const isNextEnabled = selectedPhoto && location.trim() !== "";

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute font-sacramento top-10 left-10 text-pink-500 text-3xl font-bold mb-4">
        dribbble
      </div>
      <div className="text-center mb-10">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4">
            Welcome! Let’s create your profile
          </h2>
          <p className="text-gray-500">
            Let others get to know you better! You can do these later.
          </p>
          <p className="font-bold pt-10">Add an Avatar</p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center p-5">
            <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
              {selectedPhoto ? (
                <img
                  src={selectedPhoto}
                  alt="Selected"
                  className="w-full h-full rounded-full"
                />
              ) : (
                <button onClick={handlePhoto}>+</button>
              )}
            </div>
            <div className="flex flex-col items-start ml-5">
              <button onClick={handlePhoto} className="bg-pink-500 text-white px-4 py-2 rounded mt-2">
                Choose Image
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Or choose one of our defaults
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="location" className="text-lg font-medium">
              Add your location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Enter a location"
              value={location}
              onChange={handleLocationChange}
              className="border-gray-300 mb-5 rounded px-4 py-2 mt-2 w-[100%] focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={handleNext}
              className={`bg-pink-500 text-white px-6 py-2 rounded ${isNextEnabled ? "" : "opacity-50 cursor-not-allowed"}`}
              disabled={!isNextEnabled}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
