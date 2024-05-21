"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import Spinner from "@/components/dashboard/spinner";

export default function GuidelinesUpload() {
    const { guidelinesFile, setGuidelinesFile } = useDashboard();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            return;
        }

        const timeoutId = setTimeout(() => {
            setIsLoading(false);
            setGuidelinesFile({ url: "/assets/guidelines.pdf" });
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [isLoading]);

    const handleClick = () => {
        setIsLoading(true);
    }

    return(
        <div className="w-full h-64 flex flex-col items-center justify-center gap-4">
            <h2 className="self-start font-medium text-xl">Upload Guidelines</h2>
            <div className="w-full h-full bg-gray-100 rounded-3xl border-4 border-black-500 border-dashed flex flex-row items-center justify-center">
                {!isLoading && guidelinesFile === null && (
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
                {isLoading && (
                    <Spinner />
                )}
                {guidelinesFile !== null && (
                    <span className="flex flex-col justify-center items-center gap-4">
                        <span className="text-green-600 flex flex-row gap-1 items-center">
                            <FaCheck />
                            <span>Guidelines File Uploaded</span>
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