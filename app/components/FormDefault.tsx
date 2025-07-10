import { Button } from '@mui/material'
import React from 'react'

function FormDefault() {
    return (
        <div className="px-6 pb-6 mt-5 rounded bgborder">
            <div>
                <h2 className="text-[20px] lg:text-[30px] font-bold my-3 bg-gradient-to-r from-[#6bffca] to-[#6bffca] [background-clip:text] [-webkit-text-fill-color:transparent]">
                    Contact Now
                </h2>
            </div>
            <form action="#">
                <div className="flex flex-wrap gap-y-3">
                    <div className="w-full">
                        <div className="relative z-0 w-full mb-2 group">
                            <input
                                type="text"
                                name="floating_name"
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
                                type="email"
                                name="floating_email"
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
                    <div className="w-full md:w-[60%] md:pe-2">
                        <div className="relative z-0 w-full mb-2 group">
                            <input
                                type="text"
                                name="floating_phone"
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
                    <div className="w-full md:w-[40%] md:ps-2">
                        <div className="relative z-0 w-full mb-2 group">
                            <input
                                type="text"
                                name="floating_pincode"
                                id="floating_pincode"
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_pincode"
                                className=" absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Pin Code
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative z-0 w-full group">
                            <input
                                type="text"
                                name="floating_location"
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
                                id="course"
                                name="course"
                                defaultValue=""
                                required
                                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-[#080808] border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                            >
                                <option value="" disabled>
                                    -- Select Courses --
                                </option>
                                <option value="Canada">Canada</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
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
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormDefault
