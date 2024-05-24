import Step from './step';

export default function StepWrapper({ steps }) {
    return (
        <div className="flex flex-col items-center gap-6 mt-4 mb-12">
            {
                steps.map((step) => {
                    return <Step key={step.key} step={step} />
                })
            }
        </div>
    )
}