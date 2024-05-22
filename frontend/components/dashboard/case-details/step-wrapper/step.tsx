'use client'

import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';


export default function Step() {
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setShowMore(!showMore);
    }

    return (
        <div className="w-[75%] border border-grey-200 bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold text-gray-800">This is a sentence of text.</p>
            
            <div className="relative mt-4">
            <button
                className="flex items-center focus:outline-none"
                onClick={ handleClick }
            >
                Click to Toggle Dropdown
                <MdExpandMore className="ml-2" />
            </button>
            {showMore && (
                <div className="mt-2 w-full bg-grey rounded-md">
                    <div className="p-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            <span className="ml-2 text-gray-700">Option 1</span>
                        </label>
                        <label className="flex items-center mt-2">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            <span className="ml-2 text-gray-700">Option 2</span>
                        </label>
                        <label className="flex items-center mt-2">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            <span className="ml-2 text-gray-700">Option 3</span>
                        </label>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}