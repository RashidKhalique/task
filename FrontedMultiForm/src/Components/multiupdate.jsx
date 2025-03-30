import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

export default function UserProfileForm() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/viewoneform/${id}`)
      .then(({ data }) => {
        if (data.success) {
          const { _id, __v, ...filteredData } = data.data; // Remove _id and __v
          setFormData(filteredData);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (section, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      const { data } = await axios.put(`http://localhost:3000/api/updateform/${id}`, { data: formData }, {
        headers: { "Content-Type": "application/json" },
      });
      if (!data.success === true) throw new Error(data.message);
      toast.success("Profile updated successfully!");
       setInterval(() => {
        navigate('/dashboard')
       }, 1000);

    } catch (err) {
      toast.error("Update failed: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Profile</h2>
      <div className="space-y-6">
        {Object.entries(formData).map(([section, details]) => (
          <div key={section} className="p-5 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 capitalize mb-4 border-b pb-2">{section.replace(/([A-Z])/g, " $1").trim()}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(details).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow">
                  <label className="block text-gray-600 text-sm font-medium capitalize mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </label>
                  <input
                    type="text"
                    value={typeof value === "object" ? JSON.stringify(value) : value}
                    onChange={(e) => handleChange(section, key, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        disabled={saving}
      >
        {saving ? "Saving..." : "Update Profile"}
      </button>
      <button
        onClick={()=>navigate('/dashboard')}
        className="w-full mt-6 bg-gray-500 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
       Cancel
      </button>
      <ToastContainer/>
    </div>
  );
}