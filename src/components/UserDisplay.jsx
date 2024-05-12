import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { userService } from "../services/userService";
import toast from "react-hot-toast"; // Importing toast for displaying notifications
import { PiSpinnerGapBold } from "react-icons/pi"; // Importing spinner icon for loading indication


const UserDisplay = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query) => {
    try {
      setLoading(true);
      const data = await userService.fetchUser(query); // Fetch user data from userService
      if (data?.users?.length) {
        // If users found, update filteredUsers state
        setFilteredUsers(data.users);
        setLoading(false);
      } else if (data?.users.length === 0) {
        // If no users found, display a notification
        toast("No Entry Found", { icon: "⛔" });
        setLoading(false);
      }
    } catch (error) {
      // If an error occurs during fetching data, display an error notification
      toast.error("Something Went Wrong!");
      setLoading(false);
    }
  };

  // useEffect hook to fetch initial data on component mount
  useEffect(() => {
    fetchData(""); // Fetch data with an empty query to display all users initially
  }, []);

  // Handler function for search query
  const handleSearch = (query) => {
    fetchData(query);
  };

  return (
    <div className="container mx-auto flex flex-col gap-5 p-5 bg-gray-100  justify-center">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="flex justify-center gap-3 text-xl">
          Loading, Please wait!!
          <PiSpinnerGapBold size={35} />{" "}
        </div>
      ) : (
        <div className="overflow-auto shadow rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-50  border-b-2 border-gray-400">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  S.No
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Address
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Gender
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Age
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user, id) => (
                <tr
                  className={id % 2 === 0 ? "bg-white" : "bg-gray-200"}
                  key={user.id}
                >
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {id + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {`${user.address.address}, ${user.address.city}, ${user.address.state}`}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.gender}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.age}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserDisplay;
