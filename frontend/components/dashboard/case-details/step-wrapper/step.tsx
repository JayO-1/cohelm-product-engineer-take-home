'use client'

import { useState } from 'react';
import { MdExpandMore, MdCheckCircle, MdCancel } from 'react-icons/md';


export default function Step({ step }) {
    const [showMore, setShowMore] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    
    const key = Number(step.key);
    const isMet = step.is_met;
    const question = step.question;
    const options = step.options;

    const selectedOptions = options.filter(option => option.selected === true);
    const selectedOptionKeys = selectedOptions.map(selectedOption => selectedOption.key);
    
    const selectedOptionsString = selectedOptions.reduce((accumulator, option, index) => {
        if (index !== selectedOptions.length - 1) {
            return accumulator + `(${ option.key }) ${ option.text }, `;
        }
        return accumulator + `(${ option.key }) ${ option.text }`;
    }, '');

    function handleShowOptions() {
        setShowOptions(!showOptions);
    }

    function handleClick() {
        setShowMore(!showMore);
    }

    return (
        <div className="w-[75%] border border-grey-200 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-sm font-light text-gray-400">{ key === 0 ? 'Instructions' : `Question ${ key }`}</h3>
            <h4 className="text-lg font-semibold text-gray-800">{ question }</h4>

            <div className={`w-full rounded-lg mt-2 px-2 py-2 ${ isMet ? 'bg-green-100' : 'bg-red-100' }`}>
                <div className="flex items-center gap-2">
                    <span>
                        { isMet ? (<MdCheckCircle className="text-lg text-green-500" />) : (<MdCancel className="text-lg text-red-500" />) }
                    </span>
                    <div className={ `flex flex-col gap-2 ${ isMet ? 'text-green-500' : 'text-red-500' }` }>
                        <span className="font-bold text-sm">Selected Options</span>
                        <span className="font-normal text-sm">{ selectedOptionsString }</span>
                        <button
                            className="flex items-center focus:outline-none text-xs font-semibold"
                            onClick={ handleShowOptions }
                        >
                            { showOptions ? 'Hide options' : 'Show all options' }
                            <MdExpandMore className="ml-2" />
                        </button>
                        {showOptions && (
                            <div className={`w-full text-xs ${ isMet ? 'text-green-500' : 'text-red-500' }`}>
                                {options.map((option, index) => {
                                    if (option.selected) {
                                        return (
                                            <label className="flex items-center ">
                                                <input type="checkbox" checked />
                                                <span className="ml-2">{ `(${ option.key }) ${ option.text }` }</span>
                                            </label>
                                        )
                                    }
                                    return (
                                        <label className="flex items-center">
                                            <input type="checkbox" className="" />
                                            <span className="ml-2">{ `(${ option.key }) ${ option.text }` }</span>
                                        </label>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="relative mt-4">
                <button
                    className="flex items-center focus:outline-none"
                    onClick={ handleClick }
                >
                    Click to Toggle Dropdown
                    <MdExpandMore className="ml-2" />
                </button>
                {showMore && (
                    <div className="mt-2 w-full bg-blue-200 rounded-md">
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