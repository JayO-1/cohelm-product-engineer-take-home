'use client'

import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md'; 
import toast, { Toaster } from 'react-hot-toast';

export default function Header({ procedureName, caseId, isMet }) {
    const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(caseId)
		  .then(() => {
            toast.success('Copied to clipboard')
		  })
		  .catch(error => {
			console.error('Failed to copy:', error);
		  });
	  };

    return (
        <>
            <div className="flex items-center gap-6">
                <h1 className="text-3xl font-bold text-gray-800 overflow-hidden">{ procedureName }</h1>
                <span className={`inline-block px-2 py-1 text-sm font-bold ${ isMet ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'} rounded-full`}>{ isMet ? 'Approved' : 'Probable Denial' }</span>
            </div>
            <div className="flex items-center mt-2">
                <h4 className="text-md font-normal text-gray-500">Case ID: { caseId }</h4>
                <button onClick={handleCopyToClipboard} className="flex items-center px-2 py-1">
                    <MdContentCopy className="mr-1" />
                </button>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}