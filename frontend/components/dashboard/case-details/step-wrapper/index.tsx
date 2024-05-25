import Step from './step';

export default function StepWrapper({ steps }) {
    return (
        <div className="relative w-full vertical-line pl-12 pr-2">
            <div className=" w-full flex flex-col items-center gap-6 mt-4 mb-12">
                {
                    steps.map((step) => {
                        return (
                            <Step key={step.key} step={step} />
                        )
                    })
                }
            </div>
        </div>
    )
}