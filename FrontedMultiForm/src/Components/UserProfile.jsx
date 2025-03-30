import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../Redux/slice/Multiformdata/formdata";

const UserProfile = () => {
  // Correctly accessing formData and userProfile
  const formData = useSelector((state) => state.formss.data.userProfile || {});
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);  // Log the form data on submit
  };

  return (
    <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-6 text-blue-700">Step 1: User Profile</h2>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="fullName"
          id="floating_full_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={formData.fullName || ''}  // Bind input value from Redux state
          onChange={(e) => handleInputChange("data.userProfile.fullName", e.target.value)}
          required
        />
        <label
          htmlFor="floating_full_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full Name
        </label>
      </div>

      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={formData.email || ''}  // Bind input value from Redux state
          onChange={(e) => handleInputChange("data.userProfile.email", e.target.value)}
          required
        />
        <label
          htmlFor="floating_email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>

      {/* Password */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={formData.password || ''}  // Bind input value from Redux state
          onChange={(e) => handleInputChange("data.userProfile.password", e.target.value)}
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>

      {/* Confirm Password */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="confirmPassword"
          id="floating_confirm_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={formData.confirmPassword || ''}  // Bind input value from Redux state
          onChange={(e) => handleInputChange("data.userProfile.confirmPassword", e.target.value)}
          required
        />
        <label
          htmlFor="floating_confirm_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Confirm Password
        </label>
      </div>

      {/* Gender Selection */}
      <div className="relative z-0 w-full mb-5 group mx-auto">
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Gender
        </label>
        <div className="flex space-x-4 mt-2">
          {["Male", "Female", "Other"].map((gender) => (
            <div key={gender} className="relative w-full">
              <input
                type="radio"
                name="gender"
                id={`gender-${gender}`}
                value={gender}
                onChange={(e) => handleInputChange("data.userProfile.gender", e.target.value)}
                checked={formData.gender === gender}  // Bind checked state from Redux
                className="peer"
              />
              <label
                htmlFor={`gender-${gender}`}
                className="inline-flex items-center text-sm cursor-pointer text-gray-700 peer-checked:text-blue-600"
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Date of Birth */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="date"
          name="dateOfBirth"
          id="floating_date_of_birth"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={formData.dateOfBirth || ''}  // Bind input value from Redux state
          onChange={(e) => handleInputChange("data.userProfile.dateOfBirth", e.target.value)}
          required
        />
        <label
          htmlFor="floating_date_of_birth"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Date of Birth
        </label>
      </div>

    </form>
  );
};

export default UserProfile;
