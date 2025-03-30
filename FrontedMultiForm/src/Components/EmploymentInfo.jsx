import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../Redux/slice/Multiformdata/formdata"; // Adjust path if necessary

const EmploymentInfo = () => {
  const employmentInfo = useSelector((state) => state.formss.data.employmentInfo); // Access the employmentInfo from Redux
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: `data.employmentInfo.${name}`, value })); // Update specific field in the state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(employmentInfo); // You can submit this data to an API or another Redux action if needed
  };

  return (
    <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4 text-blue-700">Step 3: Employment Information</h2>

      {/* Job Title */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="jobTitle"
          id="floating_job_title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={employmentInfo.jobTitle} // Bind value to Redux state
          onChange={handleChange}
          required
        />
        <label
          htmlFor="floating_job_title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Job Title
        </label>
      </div>

      {/* Employment Status */}
      <div className="relative z-0 w-full mb-5 group">
        <select
          name="employmentStatus"
          id="floating_employment_status"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={employmentInfo.employmentStatus} // Bind value to Redux state
          onChange={handleChange}
          required
        >
          <option value="">Select anyone</option>
          <option value="Employed">Employed</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Student">Student</option>
        </select>
        <label
          htmlFor="floating_employment_status"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Employment Status
        </label>
      </div>

      {/* Company Name */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="companyName"
          id="floating_company_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={employmentInfo.companyName} // Bind value to Redux state
          onChange={handleChange}
          required
        />
        <label
          htmlFor="floating_company_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Company Name
        </label>
      </div>

      {/* Experience */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="experience"
          id="floating_experience"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={employmentInfo.experience} // Bind value to Redux state
          onChange={handleChange}
          required
        />
        <label
          htmlFor="floating_experience"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Experience
        </label>
      </div>

      {/* Monthly Income */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="monthlyIncome"
          id="floating_monthly_income"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={employmentInfo.monthlyIncome} // Bind value to Redux state
          onChange={handleChange}
          required
        />
        <label
          htmlFor="floating_monthly_income"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Monthly Income
        </label>
      </div>

    </form>
  );
};

export default EmploymentInfo;
