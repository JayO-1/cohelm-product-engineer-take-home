"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import Spinner from "@/components/dashboard/spinner";

export default function MedicalRecordUpload() {
    const { medicalRecord, setMedicalRecord } = useDashboard();
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        if (!isUploading) {
            return;
        }

        const timeoutId = setTimeout(() => {
            setIsUploading(false);
            setMedicalRecord({ url: "/assets/medical-record.pdf" });
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [isUploading]);

    const handleClick = () => {
        setIsUploading(true);
    }

    return(
        <div className="w-full h-64 flex flex-col items-center justify-center gap-4">
            <h2 className="self-start font-medium text-xl">Upload Medical Record</h2>
            <div className="w-full h-full bg-gray-100 rounded-3xl border-4 border-black-500 border-dashed flex flex-row items-center justify-center">
                {!isUploading && medicalRecord === null && (
                    <button
                        className="flex flex-col items-center justify-center gap-4 font-medium text-lg"
                        onClick={handleClick}
                    >
                        <MdOutlineFileUpload className="text-5xl text-blue-500" />
                        <span className="font-light">
                            Drag and drop or <span className="text-blue-500">browse</span> your files 
                        </span>
                    </button> 
                )}
                {isUploading && medicalRecord == null && (
                    <span className="flex flex-col justify-center items-center gap-4">
                        <Spinner />
                        <span className="font-light">
                            Uploading file...
                        </span>
                    </span>
                )}
                {medicalRecord !== null && (
                    <span className="flex flex-col justify-center items-center gap-4">
                        <span className="text-green-600 flex flex-row gap-1 items-center">
                            <FaCheck />
                            <span>Medical Record Uploaded</span>
                        </span>
                        <span className="font-light text-blue-500">
                            Click to change file
                        </span>
                    </span>
                )}
            </div>
        </div>
    )
}