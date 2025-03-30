import React, { useState } from "react";
import UserProfile from "./UserProfile.jsx";
import ContactInfo from "./ContactInfo.jsx";
import EmploymentInfo from "./EmploymentInfo.jsx";
import Preferences from "./Preferences.jsx";
import FinancialInfo from "./FinancialInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { updateField, submitForm, resetForm } from "../Redux/slice/Multiformdata/formdata.js"; // Assuming you have the formSlice for form data

const MultiPartForm = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  const formData = useSelector((state) => state.formss); // Fetch the form data from Redux

  const displaydata = useSelector((state)=>state.formss.data)
  console.log(displaydata);
  

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(updateField({ field: name, value: type === "checkbox" ? checked : value }));
  };

  const handleFileUpload = (e) => {
    dispatch(updateField({ field: "resume", value: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(formData)); // Dispatch the submit action to the Redux store
    console.log(formData);
    
  };


  return (
    <div className="container mx-auto flex justify-center items-center h-screen mt-15">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Multi-Step Form Wizard
        </h1>
        <div className="flex items-center mb-8">
          {[1, 2, 3,4,5,6].map((item) => (
            <div key={item} className="flex-1">
              <div
                className={`h-2 rounded ${
                  step >= item ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
              <div className="text-sm text-center mt-2">Step {item}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6">
            {step === 1 && (
              <UserProfile formData={formData} handleChange={handleChange} />
            )}

            {step === 2 && (
              <ContactInfo formData={formData} handleChange={handleChange} />

            )}
              {step === 3 && (
              <EmploymentInfo
                formData={formData}
                handleChange={handleChange}
                handleFileUpload={handleFileUpload}
              />
            )}
             {step === 4 && (
              <FinancialInfo
                formData={formData}
                handleChange={handleChange}
                handleFileUpload={handleFileUpload}
              />
            )}

          

           

            {step === 5 && (
              <Preferences formData={formData} handleChange={handleChange} />
            )} 

            {step === 6 && (
               <div className="flex items-center justify-center flex-col">
                <h1 className="text-4xl font-bold font-mono">Review information</h1>
                {displaydata.data.map((data)=>{
                  <div>
                    <label htmlFor="">{data}</label>
                  </div>
                })}

              <button  className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
            </div>
            )}
            

            {/* Additional step content */}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between items-center">
            {step > 1 && (
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {step < 6 && (
              <button
                type="button"
                className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-600"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {step === 6 && (
             
 <button
                type="submit"
                className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
              
             
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiPartForm;
