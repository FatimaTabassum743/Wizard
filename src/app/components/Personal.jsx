
'use client'
import React, { useRef, useState } from "react";
import Link from 'next/link'


const Personal = () => {
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
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      // Read the selected file as a data URL and set it as the image source
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Clear the image if no file is selected
      setImageUrl(null);
    }

  };
  function handleimg(){
    fileInputRef.current.click()
  }
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="max-w-xs md:max-w-lg mx-auto gap-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }} >
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after w-40 h-40" />
          ) : (
            <div onClick={handleimg} className=" h-40 w-40 border border-gray-600 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className=" m-16 w-10 h-10 justify-center" 
              viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>

            </div>
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

      
      </div>
    </div>
    
    
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="firstName"
            required
            type="text"
            placeholder="First Name"
            pattern="^[A-Za-z]+$"
            title="Please enter a valid first name (letters only)"
            onChange={handleInputChange}
          />
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="lastName"
            required
            type="text"
            placeholder="Last Name"
            pattern="^[A-Za-z]+$"
            title="Please enter a valid last name (letters only)"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-5">
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="mobileNumber"
            required
            type="tel"
            placeholder="Mobile Number"
            pattern="^[0-9]{10}$"
            title="Please enter a valid 10-digit mobile number"
            onChange={handleInputChange}
          />
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
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="dateOfBirth"
            required
            type="date"
            placeholder="Date Of Birth"
            onChange={handleInputChange}
          />
          <select
            name="maritalStatus"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Marital Status
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
        <div className="flex gap-5">
          <select
            name="gender"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="nationality"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Nationality
            </option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <input
          className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="address"
          required
          type="text"
          placeholder="Address"
          onChange={handleInputChange}
        />
        <div className="flex gap-5">
          <select
            name="state"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              State
            </option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
          <select
            name="city"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
            onChange={handleInputChange}
          >
            <option value="" disabled>
              City
            </option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
          <input
            className="m-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="zipCode"
            required
            type="text"
            placeholder="Zip Code"
            pattern="^\d{5}$"
            title="Please enter a valid 5-digit zip code"
            onChange={handleInputChange}
          />
        </div>
        <Link href="../Pro">
        <button type="submit" onClick={handleNext} className="w-20 h-10 bg-blue-600 rounded-md mt-5">
          Next
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Personal;
  



