'use client'

import { useState } from 'react';
import Markdown from 'react-markdown';
import OptionsDropdown from './options-dropdown';
import { convertToMarkdown } from '@/lib/utils';

export default function Step({ step }) {
    const [showMore, setShowMore] = useState(false);
    
    const key = Number(step.key);
    const isMet = step.is_met;
    const isFinal = step.is_final;
    const question = step.question;
    const options = step.options;
    const reasoning = step.reasoning;

    const selectedOptions = options.filter(option => option.selected === true);
    const selectedOptionKeys = selectedOptions.map(selectedOption => selectedOption.key);

    function handleClick() {
        setShowMore(!showMore);
    }

    return (
        <div className="w-[75%] border border-grey-200 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-sm font-light text-gray-400">{ key === 0 ? 'Instructions' : `Question ${ key }`}</h3>
            <h4 className="text-lg font-semibold text-gray-800">{ question }</h4>

            <OptionsDropdown isMet={ isMet } options={ options } selectedOptions={ selectedOptions } />

            <div className="flex flex-col gap-2 mt-2">
                { isFinal ? ( 
                    <>
                        { isMet ? 
                        <h5 className="text-md font-semibold text-green-500">The requirements for this procedure have been met</h5> 
                        : <h5 className="text-md font-semibold text-red-500">The requirements for this procedure have not been met</h5> }
                    </>
                 ) : (
                    <>
                        <h5 className="text-md font-semibold">{ `${ selectedOptionKeys.length === 1 ? 'Option ' : 'Options ' } 
                        ${ selectedOptionKeys.join(', ') } ${ selectedOptionKeys.length === 1 ? 'has' : 'have' } been selected because...` }</h5>   
                    </>
                )

                }
                
                <Markdown className="text-sm markdown">
                    { reasoning }
                </Markdown>
            </div>
        </div>
    )
}