
'use client'
import React, {useState } from "react";
import Link from 'next/link'


const ProfessionalDetails= () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    dateOfBirth: "",
    maritalStatus: "",
    gender: "",
    nationality: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = (e) => {
    // Perform additional validation here before navigating to the next page
    console.log("Form data:", formData);
   
  };
 

  return (
    <div className="max-w-xs md:max-w-lg mx-auto gap-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          <h1>
            Professional Details
          </h1>
       
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="firstName"
            required
            type="text"
            placeholder="Employee ID"
            pattern="^[A-Za-z]+$"
            title="Please enter a valid first name (letters only)"
            onChange={handleInputChange}
          />
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="lastName"
            required
            type="text"
            placeholder="User Name"
            pattern="^[A-Za-z]+$"
            title="Please enter a valid last name (letters only)"
            onChange={handleInputChange}
          />
        </div>
       
        <div className="flex gap-5">
     
          <select
            name="maritalStatus"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Employee Type
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="emailAddress"
            required
            type="email"
            placeholder="Email Address"
            onChange={handleInputChange}
          />
        
        </div>
        <div className="flex gap-5">
          <select
            name="gender"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="Department" disabled>
              
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="emailAddress"
            required
            type="email"
            placeholder="Enter Designation"
            onChange={handleInputChange}
          />
          <select
            name="nationality"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Working Days
            </option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <select
            name="nationality"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Joining Date
            </option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        <div className="flex gap-5">
          <select
            name="state"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Office Location
            </option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
         
        </div>
        <Link href="../Documents">
        <button type="submit" onClick={handleNext} className="w-20 h-10 bg-blue-600 rounded-md mt-5">
          Next
        </button>
        </Link>
      </form>
    </div>
  );
};

export default ProfessionalDetails;
  



