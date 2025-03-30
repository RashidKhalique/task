import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../Redux/slice/Multiformdata/formdata"; // Adjust the import path as needed

const Preferences = () => {
  const formData = useSelector((state) => state.formss.data.preferences); // Access the preferences from Redux state
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Dispatch the updated field value to the Redux store
    dispatch(updateField({ field: `data.preferences.${name}`, value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    // Update hobbies array based on checkbox checked status
    const updatedHobbies = checked
      ? [...formData?.hobbies, value] // Add to hobbies if checked
      : formData?.hobbies.filter((hobby) => hobby !== value); // Remove from hobbies if unchecked
    // Dispatch the updated hobbies list
    dispatch(updateField({ field: 'data.preferences.hobbies', value: updatedHobbies }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Submit form data (you can replace this with actual submit logic)
  };

  return (
    <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4 text-blue-700">Step 5: Preferences</h2>

      {/* Preferred Mode of Contact */}
      <div className="relative z-0 w-full mb-5 group">
        <span className="text-gray-700">Preferred Mode of Contact</span>
        <div className="flex items-center mt-2">
          <label className="mr-4">
            <input
              type="radio"
              name="preferences"
              value="Email"
              checked={formData?.preferences === 'Email'}
              onChange={handleChange}
              className="mr-2"
            />
            Email
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="preferences"
              value="Phone"
              checked={formData?.preferences === 'Phone'}
              onChange={handleChange}
              className="mr-2"
            />
            Phone
          </label>
          <label>
            <input
              type="radio"
              name="preferences"
              value="SMS"
              checked={formData?.preferences === 'SMS'}
              onChange={handleChange}
              className="mr-2"
            />
            SMS
          </label>
        </div>
      </div>

      {/* Hobbies and Interests */}
      <div className="relative z-0 w-full mb-5 group">
        <span className="text-gray-700">Hobbies and Interests</span>
        <div className="flex items-center mt-2">
          <label className="mr-4">
            <input
              type="checkbox"
              name="hobbies"
              value="Sports"
              checked={formData?.hobbies?.includes('Sports')}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Sports
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              name="hobbies"
              value="Music"
              checked={formData?.hobbies?.includes('Music')}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Music
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              name="hobbies"
              value="Reading"
              checked={formData?.hobbies?.includes('Reading')}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Reading
          </label>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="relative z-0 w-full mb-5 group">
        <span className="text-gray-700">Subscribe to Newsletter</span>
        <br />
        <label className="mr-4">
          <input
            type="radio"
            name="newsletterSubscription"
            value="Yes"
            checked={formData?.newsletterSubscription === 'Yes'}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="newsletterSubscription"
            value="No"
            checked={formData?.newsletterSubscription === 'No'}
            onChange={handleChange}
            className="mr-2"
          />
          No
        </label>
      </div>

      {/* Submit Button */}
    
    </form>
  );
};

export default Preferences;
