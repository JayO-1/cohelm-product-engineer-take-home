import Markdown from 'react-markdown';
import OptionsDropdown from './options-dropdown';
import EvidenceDropdown from './evidence-dropdown';
import NextStepCard from './next-step-card';
import { MdTroubleshoot } from 'react-icons/md';

export default function Step({ step }) {    
    const key = Number(step.key);
    const isMet = step.is_met;
    const isFinal = step.is_final;
    const question = step.question;
    const options = step.options;
    const reasoning = step.reasoning;
    const evidence = step.evidence;
    const nextStep = step.next_step;
    const logic = step.logic;

    const selectedOptions = options.filter(option => option.selected === true);
    const selectedOptionKeys = selectedOptions.map(selectedOption => selectedOption.key);

    return (
        <div className="relative w-[75%]">
            <MdTroubleshoot className="absolute -left-12 top-5 text-3xl text-white bg-gray-600 rounded-full" />
            <div className="w-full border border-grey-200 bg-white shadow-md rounded-lg p-5">
                <h3 className="text-sm font-light text-gray-400">{ key === 0 ? 'Instructions' : `Question ${ key }`}</h3>
                <h4 className="text-lg font-semibold text-gray-800">{ question }</h4>

                <OptionsDropdown isMet={ isMet } options={ options } selectedOptions={ selectedOptions } />

                <div className="flex flex-col mt-4">
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
                    )}
                    
                    <Markdown className="text-sm markdown">
                        { reasoning }
                    </Markdown>

                    <div className="flex flex-col gap-2">
                        <EvidenceDropdown evidence={ evidence } />
                        <NextStepCard selectedOptionKeys={ selectedOptionKeys } nextStep={ nextStep } logic={ logic } isFinal={ isFinal } />
                    </div>
                </div>
            </div>
        </div>
    )
}