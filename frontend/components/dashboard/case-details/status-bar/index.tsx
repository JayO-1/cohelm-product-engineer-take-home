'use client'

import Link from 'next/link';
import { MdCheck, MdClose, MdArrowForward } from 'react-icons/md';

export default function StatusBar({ steps, cptCodes }) {
    return (
        <div className="w-full flex justify-start items-center gap-6">
            <div className="flex flex-col justify-center">
                <span className="text-sm font-light text-gray-500">Status</span>
                <span>Complete</span>
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-sm font-light text-gray-500">Path</span>
                <div className="flex justify-evenly items-center">
                    {
                        steps.map((step, index) => {
                            if (index !== steps.length - 1) {
                                return (
                                    <Link href={`#${ step.key }`}>
                                        <span key={step.key} className="flex items-center">
                                            { step.is_met ? <MdCheck className="text-green-600 text-2xl" /> : <MdClose className="text-red-600 text-2xl" /> }
                                            <MdArrowForward className="text-xs" />
                                        </span>
                                    </Link>
                                );
                            }
                            return (
                                <Link href={`#${ step.key }`}>
                                    <span key={step.key}>
                                        { step.is_met ? <MdCheck className="text-green-600 text-2xl" /> : <MdClose className="text-red-600 text-2xl" /> }
                                    </span>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-sm font-light text-gray-500">CPT Codes</span>
                <div className="flex flex-wrap justify-evenly items-center gap-2 text-xs">
                    {
                        cptCodes.map((cptCode) => {
                            return (
                                <span key={cptCode} className="bg-white border border-grey-200 rounded-2xl text-center px-2 py-1">
                                    { cptCode }
                                </span>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}