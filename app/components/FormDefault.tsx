'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function FormDefault() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone:'',
        email: '',
        location:'',
        qualification:'',
        message:''
    });
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true)
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            if (!apiUrl) {
                throw new Error("API URL is not defined");
            }
            const headers: Record<string, string> = {
                'Content-Type': 'application/json',
            };
            if (process.env.NEXT_PUBLIC_DATA_KEY) {
                headers['data_key'] = process.env.NEXT_PUBLIC_DATA_KEY;
            }

            const res = await fetch(apiUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify([
                    {
                        "candidate_name": formData.name,
                        "candidate_number": formData.phone,
                        "alternative_number": "",
                        "email_id": formData.email,
                        "class_name": formData.qualification,
                        "college_id": 4,
                        "college_name": "Tutopia Pro",
                        "location": formData.location,
                        "postal_code": "",
                        "query": formData.message || "",
                        "source": "Website",
                        "enquiry_type": "",
                        "utm_Source": "",
                        "data_provider": "DW",
                        "entry_by": "9998887771"
                    }
                ])
            });


            if (!res.ok) {
                throw new Error("Something went wrong");
            }else{
                setFormData({
                    name: '',
                    phone:'',
                    email: '',
                    location:'',
                    qualification:'',
                    message:''
                });

                router.push('/thankyou');
            }

        } catch (error) {
            console.error("Submission error:", error);
        }finally{
            setIsSubmitting(false);
        }
    };

    return (
        <div className="px-6 pb-6 mt-5 rounded bgborder">
            <div>
                <h2 className="text-[20px] lg:text-[30px] font-bold my-3 bg-gradient-to-r from-[#6bffca] to-[#6bffca] [background-clip:text] [-webkit-text-fill-color:transparent]">
                    Contact Now
                </h2>
            </div>
            <form onSubmit={handleSubmitForm}>
                <div className="flex flex-wrap gap-y-3">
                    <div className="w-full">
                        <div className="relative z-0 w-full mb-2 group">
                            <input
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                name="name"
                                id="floating_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_name"
                                className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Full Name
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative z-0 w-full mb-2 group">
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                    </div>
                    <div className="w-full md:w-[100%] md:pe-2">
                        <div className="relative z-0 w-full mb-2 group">
                            <input
                                value={formData.phone}
                                onChange={handleChange}
                                type="text"
                                name="phone"
                                id="floating_phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_phone"
                                className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone No.
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative z-0 w-full group">
                            <input
                                value={formData.location}
                                onChange={handleChange}
                                type="text"
                                name="location"
                                id="floating_location"
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_location"
                                className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Location
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative z-0 w-full mb-0 group">
                            <select
                                value={formData.qualification}
                                onChange={handleChange}
                                id="course"
                                name="qualification"
                                required
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-[#080808] border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                            >
                                <option value="" disabled>
                                    -- Highest qualification --
                                </option>
                                <option value="12th Passout in 2025">12th Passout in 2025</option>
                                <option value="Pursuing Graduation">Pursuing Graduation</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post Graduate">Post Graduate</option>
                                <option value="Working Professional">Working Professional</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                name='message'
                                id="message"
                                rows={2}
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button
                            type="submit"
                            sx={{
                                width: "100%",
                                bgcolor: "#ffffff",
                                color: "inherit",
                                fontSize: "13px",
                            }}
                            disabled={isSubmitting}
                        >
                            {
                                isSubmitting ? 'Sending...' : 'Send'
                            }
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormDefault
