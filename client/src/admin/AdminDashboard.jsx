import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                let active = null;
                let user = null;
                try {
                    active = JSON.parse(localStorage.getItem("isActive"));
                    user = JSON.parse(localStorage.getItem("currentUser"));
                } catch (e) {
                    console.error("Admin storage parse error:", e);
                }

                if (!active || !active.auth || user?.role !== 'admin') {
                    navigate('/admin/login');
                    return;
                }

                const [usersRes, enquiriesRes] = await Promise.all([
                    fetch('http://localhost:5000/api/admin/users'),
                    fetch('http://localhost:5000/api/admin/enquiries')
                ]);

                if (usersRes.ok && enquiriesRes.ok) {
                    const usersData = await usersRes.json();
                    const enquiriesData = await enquiriesRes.json();
                    setUsers(usersData);
                    setEnquiries(enquiriesData);
                } else {
                    console.error("Failed to fetch admin data");
                }
            } catch (error) {
                console.error("Error fetching admin data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAdminData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isActive");
        localStorage.removeItem("currentUser");
        navigate("/");
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-xl font-bold">Loading Admin Panel...</p></div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-black text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Total Users</p>
                            <p className="text-4xl font-black text-gray-900 mt-2">{users.length}</p>
                        </div>
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                            👥
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Total Enquiries</p>
                            <p className="text-4xl font-black text-gray-900 mt-2">{enquiries.length}</p>
                        </div>
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold">
                            📝
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                            <h2 className="text-xl font-bold text-gray-800">Registered Users</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Mobile</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Joined</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                        <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.mobile}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(user.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                    {users.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-8 text-center text-sm text-gray-500">No users found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                            <h2 className="text-xl font-bold text-gray-800">Enquiry Submissions</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Mobile</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Address</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Problem</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {enquiries.map((enq) => (
                                        <tr key={enq._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{enq.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{enq.mobile}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate" title={enq.address}>{enq.address}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 max-w-sm truncate" title={enq.problem}>{enq.problem}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(enq.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                    {enquiries.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-8 text-center text-sm text-gray-500">No enquiries found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
