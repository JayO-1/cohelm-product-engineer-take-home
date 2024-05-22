'use client'

import React from 'react';
import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import data from '@/resources/example-response.json';
import Header from '@/components/dashboard/case-details/header';
import StatusBar from '@/components/dashboard/case-details/status-bar';
import Summary from '@/components/dashboard/case-details/summary';
import StepWrapper from '@/components/dashboard/case-details/step-wrapper';

export default function CaseResult() {
	const procedureName = data.procedure_name;
	const caseId = data.case_id;
	const isMet = data.is_met;

	return (
		<div className="w-full flex flex-col items-center gap-5 h-screen py-10">
			<div className="w-[75%] flex flex-col justify-center">
				<Header procedureName={ procedureName } caseId={caseId} isMet={isMet} />

				<div className="w-full flex flex-col justify-center gap-6 mt-4">
					<StatusBar />
					<Summary />
					<StepWrapper steps={data.steps} />
				</div>
			</div>
		</div>
	)
}
