"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

export default function GuidelinesUpload() {
    const { guidelinesFile, setGuidelinesFile } = useDashboard();

    const handleClick = () => {
        setGuidelinesFile({ url: "/assets/guidelines.pdf" });
    }

    return(
        <div className="w-full h-64 flex flex-col items-center justify-center gap-4">
            <h2 className="self-start font-medium text-xl">Upload Guidelines</h2>
            <div className="w-full h-full bg-gray-100 rounded-3xl border-4 border-black-500 border-dashed flex flex-row items-center justify-center">
                {guidelinesFile === null && (
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
                {guidelinesFile !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Guidelines File Uploaded</span>
                    </span>
                )}
            </div>
        </div>
    )
}