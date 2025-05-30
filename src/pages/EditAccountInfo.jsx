import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";
import InputField from "../components/common/InputField";
import RadioGroup from "../components/common/RadioGroup";

/**
 * EditAccountInfo component renders the account information form
 * for users to edit their profile information.
 * The form contains input fields for first name, last name, phone number, email, and usage type
 * as well as an upload button for profile picture.
 * The form is submitted when the user clicks the "تکمیل اطلاعات" button.
 */
const EditAccountInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "علیرضا",
    lastName: "سرکار",
    phone: "09123456789",
    email: "example@email.com",
    usageType: "گیاهان خانگی",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
    console.log("Updated info:", formData);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-right text-sm mt-5 font-medium text-gray-700">
          اطلاعات خود را تکمیل کنید
        </label>
        <InputField
          type="text"
          name="firstName"
          placeholder="نام"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="lastName"
          placeholder="نام خانوادگی"
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="phone"
          placeholder="شماره تماس"
          value={formData.phone}
          onChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          placeholder="ایمیل (اختیاری)"
          value={formData.email}
          onChange={handleChange}
        />
        <RadioGroup
          label="پلتفرم را بیشتر در چه زمینه‌ای استفاده می‌کنید؟"
          name="usageType"
          options={[
            { label: "باغداری", value: "" },
            { label: "گلخانه‌داری", value: "" },
            { label: "نگهداری از گیاهان خانگی", value: "" },
          ]}
          selectedValue={formData.usageType}
          onChange={handleChange}
        />
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <UploadButton />
          <button
            type="submit"
            className="w-full md:w-auto flex-1 bg-color cursor-pointer text-white py-3 rounded-4xl text-sm hover:bg-green-600 transition-colors"
          >
            تکمیل اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAccountInfo;
