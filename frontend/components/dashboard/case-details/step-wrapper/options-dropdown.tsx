import { useState } from 'react';
import { MdExpandMore, MdExpandLess, MdCheckCircle, MdCancel } from 'react-icons/md';

export default function OptionsDropdown({ isMet, options, selectedOptions }) {
    const [showOptions, setShowOptions] = useState(false);

    const selectedOptionsString = selectedOptions.reduce((accumulator, option, index) => {
        if (index !== selectedOptions.length - 1) {
            return accumulator + `(${ option.key }) ${ option.text }, `;
        }
        return accumulator + `(${ option.key }) ${ option.text }`;
    }, '');

    function handleShowOptions() {
        setShowOptions(!showOptions);
    }

    return (
        <div className={`w-full rounded-lg mt-2 px-2 py-2 ${ isMet ? 'bg-green-100' : 'bg-red-100' }`}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span>
                        { isMet ? (<MdCheckCircle className="text-2xl text-green-500" />) : (<MdCancel className="text-lg text-red-500" />) }
                    </span>
                    <div className={ `flex flex-col gap-2 ${ isMet ? 'text-green-500' : 'text-red-500' }` }>
                        <span className="font-bold text-sm">Selected Options</span>
                        <span className="font-normal text-sm">{ selectedOptionsString }</span>
                        <button
                            className="flex items-center text-xs font-semibold focus:outline-none"
                            onClick={ handleShowOptions }
                        >
                            { showOptions ? 'Hide options' : 'Show all options' }
                            { showOptions ? <MdExpandLess className="ml-2" /> : <MdExpandMore className="ml-2" /> }
                        </button>
                    </div>
                </div>
                <div className="ml-7">
                    {showOptions && (
                        <div className={`w-full text-xs ${ isMet ? 'text-green-500' : 'text-red-500' }`}>
                            {options.map((option) => {
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
    )
}