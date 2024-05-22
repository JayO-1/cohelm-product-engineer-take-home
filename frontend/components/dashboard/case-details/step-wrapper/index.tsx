import Step from './step';

export default function StepWrapper({ steps }) {
    return (
        <div className="flex flex-col items-center gap-4">
            {
                steps.map((step) => {
                    return <Step />
                })
            }
        </div>
    )
}