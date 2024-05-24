import React from 'react';
import data from '@/resources/example-response.json';
import Header from '@/components/dashboard/case-details/header';
import StatusBar from '@/components/dashboard/case-details/status-bar';
import Summary from '@/components/dashboard/case-details/summary';
import StepWrapper from '@/components/dashboard/case-details/step-wrapper';

export default function CaseResult() {
	const procedureName = data.procedure_name;
	const caseId = data.case_id;
	const isMet = data.is_met;
	const steps = data.steps;
	const cptCodes = data.cpt_codes;
	const summary = data.summary;

	return (
		<div className="w-full h-screen flex flex-col items-center gap-5 py-10">
			<div className="w-[75%] flex flex-col justify-center items-center gap-4">
				<div className="w-[75%] flex flex-col gap-2">
					<Header procedureName={ procedureName } caseId={caseId} isMet={isMet} />
					<StatusBar steps={steps} cptCodes={ cptCodes } />
				</div>
				<div>
					<div className="w-full flex flex-col items-center">
						<Summary isMet={isMet} summary={ summary } />
					</div>

					<div>
						<StepWrapper steps={steps} />
					</div>
				</div>
			</div>
		</div>
	)
}
