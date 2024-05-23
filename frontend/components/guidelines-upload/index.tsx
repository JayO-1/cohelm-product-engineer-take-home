"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import Spinner from "@/components/dashboard/spinner";
import toast, { Toaster } from 'react-hot-toast';

export default function GuidelinesUpload() {
    const { medicalRecord, guidelinesFile, setGuidelinesFile } = useDashboard();
    const [isUploading, setIsUploading] = useState(false);

    const handleClick = () => {
        if (medicalRecord == null) {
            return toast.error("Upload medical record first!")
        }

        setIsUploading(true);
        
        setTimeout(() => {
            setIsUploading(false);
            setGuidelinesFile({ url: "/assets/guidelines.pdf" });
        }, 3000);
    }

    return(
        <div className="w-full h-64 flex flex-col items-center justify-center gap-4">
            <h2 className="self-start font-medium text-xl">Upload Guidelines</h2>
            <div className="w-full h-full bg-gray-100 rounded-3xl border-4 border-black-500 border-dashed flex flex-row items-center justify-center">
                {!isUploading && guidelinesFile === null && (
                    <button
                        className="flex flex-col items-center justify-center font-medium text-lg"
                        onClick={handleClick}
                    >
                        <MdOutlineFileUpload className="text-5xl text-blue-500 animate-bounce" />
                        <span className="font-light">
                            Drag and drop or <span className="text-blue-500">browse</span> your files 
                        </span>
                    </button> 
                )}
                {isUploading && guidelinesFile === null && (
                    <span className="flex flex-col justify-center items-center gap-4">
                        <Spinner />
                        <span className="font-light">
                            Uploading file...
                        </span>
                    </span>
                )}
                {guidelinesFile !== null && (
                    <span className="flex flex-col justify-center items-center gap-4">
                        <span className="text-green-600 flex flex-row gap-1 items-center">
                            <FaCheck />
                            <span>guidelines.pdf</span>
                        </span>
                        <span className="font-light text-blue-500">
                            Click to change file
                        </span>
                    </span>
                )}
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    )
}