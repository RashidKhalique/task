import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../Redux/slice/Multiformdata/formdata"; // Adjust path if necessary

const FinancialInfo = () => {
  const financialInfo = useSelector((state) => state.formss.data.financialInfo); // Access the financialInfo from Redux
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state for the specific field in financialInfo
    dispatch(updateField({ field: `data.financialInfo.${name}`, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(financialInfo); // For testing purposes, you can submit this data to an API or another Redux action
  };

  return (
    <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4 text-blue-700">Step 4: Financial Information</h2>

      {/* Monthly Income */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="monthlyIncome"
          id="floating_monthly_income"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={financialInfo?.monthlyIncome || ""} // Bind the value to Redux state
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

      {/* Loan Status */}
      <div className="relative z-0 w-full mb-5 group">
        <span className="text-gray-700">Do you currently have a loan?</span>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="loanStatus"
              id="loan-status-yes"
              value="Yes"
              onChange={handleChange}
              checked={financialInfo?.loanStatus === "Yes"}
              className="peer"
            />
            <label
              htmlFor="loan-status-yes"
              className="text-sm text-gray-700 peer-checked:text-blue-600"
            >
              Yes
            </label>
            <input
              type="radio"
              name="loanStatus"
              id="loan-status-no"
              value="No"
              onChange={handleChange}
              checked={financialInfo?.loanStatus === "No"}
              className="peer"
            />
            <label
              htmlFor="loan-status-no"
              className="text-sm text-gray-700 peer-checked:text-blue-600"
            >
              No
            </label>
          </div>
        </div>

        {/* Loan Amount (only shown if loanStatus is "Yes") */}
        {financialInfo?.loanStatus === "Yes" && (
          <div className="relative z-0 w-full mb-5 mt-5 group">
            <input
              type="number"
              name="loanAmount"
              id="floating_loan_amount"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={financialInfo?.loanAmount || ""} // Bind the value to Redux state
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_loan_amount"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Loan Amount
            </label>
          </div>
        )}
      </div>

      {/* Credit Score */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="creditScore"
          id="floating_credit_score"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={financialInfo?.creditScore || ""} // Bind the value to Redux state
          onChange={handleChange}
          required
        />
        <label
          htmlFor="floating_credit_score"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Credit Score
        </label>
      </div>

   
    </form>
  );
};

export default FinancialInfo;
