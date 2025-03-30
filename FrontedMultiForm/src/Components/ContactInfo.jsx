import { useDispatch, useSelector } from "react-redux";
import { updateField, submitForm } from "../Redux/slice/Multiformdata/formdata"; // Adjust the path if necessary

const ContactInfo = () => {
  const contactInfo = useSelector((state) => state.formss.data.contactInfo); // Access contactInfo from Redux state
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: `data.contactInfo.${name}`, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitForm(contactInfo)); // Submit contactInfo data
  };

  return (
    <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4 text-blue-700">Step 2: Contact Information</h2>

      {/* Phone Number */}
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="floating_phone_number"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 mb-12 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber" // Use the field names from the Redux state
          id="floating_phone_number"
          className="block py-2 px-0 w-full text-balance text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={contactInfo.phoneNumber} // Bind the value to the Redux state
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Alternate Phone Number */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          name="alternatePhoneNumber"
          id="floating_alternate_phone_number"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={contactInfo.alternatePhoneNumber} // Bind the value to the Redux state
          onChange={handleInputChange}
        />
        <label
          htmlFor="floating_alternate_phone_number"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Alternate Phone Number
        </label>
      </div>

      {/* Address Line 1 */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="address1"
          id="floating_address1"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={contactInfo.address1} // Bind the value to the Redux state
          onChange={handleInputChange}
          required
        />
        <label
          htmlFor="floating_address1"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address Line 1
        </label>
      </div>

      {/* Address Line 2 */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="address2"
          id="floating_address2"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={contactInfo.address2} // Bind the value to the Redux state
          onChange={handleInputChange}
        />
        <label
          htmlFor="floating_address2"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address Line 2
        </label>
      </div>

      {/* City */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="city"
          id="floating_city"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={contactInfo.city} // Bind the value to the Redux state
          onChange={handleInputChange}
          required
        />
        <label
          htmlFor="floating_city"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          City
        </label>
      </div>

      {/* Postal Code */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="postalcode"
          id="floating_postal_code"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          // value={contactInfo.postalcode} // Bind the value to the Redux state
          onChange={handleInputChange}
          required
        />
        <label
          htmlFor="floating_postal_code"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Postal Code
        </label>
      </div>

      {/* Country */}
      <div className="relative z-0 w-full mb-5 group">
        <select
          name="country"
          id="floating_country"
          // value={contactInfo.country} // Bind the value to the Redux state
          onChange={handleInputChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
        </select>
        <label
          htmlFor="floating_country"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Country
        </label>
      </div>

    </form>
  );
};

export default ContactInfo;
