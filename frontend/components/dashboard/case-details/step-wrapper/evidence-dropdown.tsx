'use client'

import { useState } from 'react';
import { MdLightbulbCircle, MdExpandLess, MdExpandMore } from 'react-icons/md';

export default function EvidenceDropdown({ evidence }) {
    const [showOptions, setShowOptions] = useState(false);

    function handleShowOptions() {
        setShowOptions(!showOptions);
    }

    return (
        <div className="w-full rounded-lg px-2 py-2 bg-gray-100">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <MdLightbulbCircle className="text-2xl text-yellow-400" />
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-semibold">This decision was made based on citations from the medical record</h4>
                        <button
                            className="flex items-center text-xs font-semibold focus:outline-none"
                            onClick={ handleShowOptions }
                        >
                            { showOptions ? 'Hide evidence' : 'Show evidence' }
                            { showOptions ? <MdExpandLess className="ml-2" /> : <MdExpandMore className="ml-2" /> }
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    {showOptions && (
                        <div className="pb-6 px-8"> 
                            <table className="border border-separate border-tools-table-outline border-gray-200 border-1 rounded-lg divide-y divide-gray-300">
                                <thead className="rounded-t-large bg-gray-200">
                                    <th className="rounded-tl-lg px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                        Page Number
                                    </th>
                                    <th className="rounded-tr-lg px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Content
                                    </th>
                                </thead>
                                <tbody className="rounded-b-lg bg-white divide-y divide-gray-400">
                                    {evidence.map((evidenceItem, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className={`${ index == evidence.length - 1 && 'rounded-bl-lg' } flex justify-center items-center text-xs font-medium text-gray-900 text-center px-6 py-4`}>
                                                    <a target="_blank" href={ `/medical-record.pdf#page=${ evidenceItem.page_number }` }><span className="flex items-center justify-center w-12 h-8 rounded-full bg-gray-100">{ evidenceItem.page_number }</span></a>
                                                </td>
                                                <td className={`${ index == evidence.length - 1 && 'rounded-br-lg' } text-xs text-gray-500 px-6 py-4`}>
                                                    { evidenceItem.content }
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}