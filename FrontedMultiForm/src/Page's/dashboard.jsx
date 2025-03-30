import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import Nav from '../Components/nav';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Dashboard() {
    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/viewallform');
                console.log(response.data);
                
                setFormData(response.data?.data || []);
            } catch (error) {
                console.error('Error fetching form data:', error);
                setError('Failed to fetch forms. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchForms();
    }, []);

    const deleteForm = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/deleteform/${id}`);
    
            if (response.data.success === true) {
                setFormData((prevData) => prevData.filter((form) => form._id !== id));
                toast.success(`Form deleted successfully.`);
            } else {
                toast.error(`Failed to delete form: ${response.data.message}`);
            }
    
        } catch (error) {
            console.error('Error deleting form:', error);
            toast.error('An error occurred while deleting the form. Please try again.');
        }
    };
    

    const filteredForms = formData.filter((form) =>
        form.userProfile.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.userProfile.email.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleAddForm = () => {
        navigate('/multipart-form'); // Navigate to add form page (you can change the path accordingly)
    };

    if (loading) {
        return <div className="text-center py-8">Loading forms...</div>;
    }


    return (
        <>
         <Nav />
            <div className="ml-54 w-full p-6">
                <div className="flex space-x-4 mb-6 justify-between">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-700">All Forms</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button
                        onClick={handleAddForm}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Create Form
                    </button>

                </div>

                <div className="flex items-center justify-between mb-6 mt-6">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="border rounded-md w-full md:w-1/2 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 text-gray-600">Id</th>
                                <th className="py-3 px-4 text-gray-600">Name</th>
                                <th className="py-3 px-4 text-gray-600">Email</th>
                                <th className="py-3 px-4 text-gray-600">Gender</th>
                                <th className="py-3 px-4 text-gray-600">Employment Status</th>
                                <th className="py-3 px-4 text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredForms.length > 0 ? (
                                filteredForms.map((form, index) => (
                                    <tr key={form._id} className="hover:bg-gray-50">
                                        <td className="py-3 px-4">{index + 1}</td>
                                        <td className="py-3 px-4">{form.userProfile.fullName}</td>
                                        <td className="py-3 px-4">{form.userProfile.email}</td>
                                        <td className="py-3 px-4">{form.userProfile.gender}</td>
                                        <td className="py-3 px-4">{form.employmentInfo.employmentStatus}</td>
                                        <td className="py-3 px-4 space-x-3">
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300"
                                                onClick={() => navigate(`/updateform/${form._id}`)}
                                            />
                                            <FontAwesomeIcon
                                                icon={faEye}
                                                className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300"
                                                onClick={() => navigate(`/view/${form._id}`)}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTrashAlt}
                                                className="text-red-500 cursor-pointer hover:text-red-700 transition duration-300"
                                                onClick={() => deleteForm(form._id)}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-3 px-4 text-center text-gray-500">No forms found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <ToastContainer/>
            </div>
        </>
           
    
    );
}

export default Dashboard;
