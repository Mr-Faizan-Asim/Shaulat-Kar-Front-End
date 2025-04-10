import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const userId = "67f824a333a05bde74718aa2"; // You can replace this with a dynamic value (e.g., retrieved from a token)
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  // Fetch user profile from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();
        setUser(data);
        setFormData(data);
      } catch (err) {
        console.error(err);
        setError("Error loading profile");
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      const updatedUser = await response.json();
      setUser(updatedUser);
      setEditMode(false);
    } catch (err) {
      console.error(err);
      setError("Update failed");
    }
  };

  const handleCancel = () => {
    setFormData(user);
    setEditMode(false);
  };

  // In case user data is not yet loaded
  if (!user || !formData) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  const servicesProvided = [
    "Fixed kitchen light",
    "Bathroom plumbing",
    "Fan rewiring",
  ];

  const servicesRequested = [
    "Air conditioner repair",
    "Water motor check",
    "Gas pipeline leak",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">User Profile</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                disabled={!editMode}
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                disabled={!editMode}
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                disabled={!editMode}
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Date of Birth</label>
              <input
                disabled={!editMode}
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">CNIC</label>
              <input
                disabled
                value={formData.cnic}
                className="w-full mt-1 p-2 border border-gray-200 bg-gray-100 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                disabled={!editMode}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Gender</label>
              <select
                disabled={!editMode}
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Location</label>
              <input
                disabled={!editMode}
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            {editMode ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Services Provided</h2>
            <ul className="list-disc list-inside text-gray-700">
              {servicesProvided.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Services Requested</h2>
            <ul className="list-disc list-inside text-gray-700">
              {servicesRequested.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
