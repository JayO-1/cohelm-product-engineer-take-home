"use client";

import GuidelinesUpload from "@/components/guidelines-upload";
import MedicalRecordUpload from "@/components/medical-record-upload";
import { useDashboard } from "@/context/dashboard-context";
import { useRouter } from "next/navigation";
import classNames from "classnames";

export const revalidate = 0;

export default function CreateRoot() {
	const { medicalRecord, setMedicalRecord, guidelinesFile, setGuidelinesFile } = useDashboard(); 
	const router = useRouter();
	const CASE_ID = "case_891a_6fbl_87d1_4326";

	const handleContinue = () => {
		router.push(`/dashboard/case/${CASE_ID}`)
	}

	const buttonClasses = classNames(
		'w-full py-2 px-4 rounded font-medium',
		{
		  'bg-blue-500 text-white': medicalRecord !== null && guidelinesFile !== null,
		  'bg-gray-400 text-gray-700 cursor-not-allowed': medicalRecord === null || guidelinesFile === null,
		}
	);

	return (
		<div className="w-full flex flex-col justify-center items-center gap-5 h-screen">
			<div className="w-[75%] flex flex-col justify-center items-center gap-8">
				<h1 className="self-start text-3xl font-bold text-gray-800 overflow-hidden">Create Prior Auth</h1>
				<div className="w-full flex flex-col gap-10 items-center">
					<MedicalRecordUpload />
					<GuidelinesUpload />
				</div>
				<button
					className={buttonClasses}
					onClick={handleContinue}
					disabled={medicalRecord === null || guidelinesFile === null}
				>
					Continue
				</button>
			</div>
		</div>
	)
}