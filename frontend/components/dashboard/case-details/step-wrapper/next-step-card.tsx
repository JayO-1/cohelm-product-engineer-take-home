import { MdOutlineArrowCircleRight } from 'react-icons/md';

export default function NextStepCard({ selectedOptionKeys, nextStep, logic, isMet, isFinal }) {
    return (
        <div className="w-full rounded-lg px-2 py-2 bg-blue-100">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <MdOutlineArrowCircleRight className="text-2xl text-blue-500 animate-pulse" />
                    <div className="w-full flex flex-col gap-2">
                        {isFinal ? (
                            <>
                                <h4 className="text-sm font-semibold">{ `Since ${ selectedOptionKeys.length === 1 ? 'option ' : 'options ' } 
                                ${ selectedOptionKeys.join(', ') } ${ selectedOptionKeys.length === 1 ? 'was' : 'were' } selected, the outcome is ${ nextStep }` }</h4>
                            </>
                        ) : (
                            <>
                                <h4 className="text-sm font-semibold">{ `Since ${ selectedOptionKeys.length === 1 ? 'option ' : 'options ' } 
                                ${ selectedOptionKeys.join(', ') } ${ selectedOptionKeys.length === 1 ? 'was' : 'were' } selected, the next step is question ${ nextStep }` }</h4>   
                            </>
                        )}
                        {
                            logic.length !== 0 && (
                            <span className="relative text-xs font-light">
                                <u className="peer cursor-pointer">See why</u>
                                <div className="absolute p-4 ml-2 left-10 top-0 bg-white border border-black rounded-lg flex flex-col items-start justify-center opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg">
                                    {logic.map((logicOption, index) => (
                                        <label key={index} className="flex items-center mb-2">
                                            <input type="checkbox" checked={logicOption.selected} readOnly={true} className="mr-2" />
                                            <span className="font-semibold">{logicOption.text}</span>
                                        </label>
                                    ))}
                                </div>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}