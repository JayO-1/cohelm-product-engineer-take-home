import React from 'react';
import Button from "@/components/dashboard/button";
import Image from 'next/image';

export default async function DashboardRoot() {
	
	const priorAuthRecords = [
		{
			id: "1",
			createdAt: "Time",
			status: "Submitted",
		},
		{
			id: "2",
			createdAt: "Time",
			status: "Submitted",
		},
		{
			id: "3",
			createdAt: "Time",
			status: "Submitted",
		},
	  ];;

	return (
		<div className="w-full flex flex-col justify-center items-center h-screen">
			<div className="w-[75%] h-full flex flex-col justify-center items-center">
				<div className="w-full flex justify-between items-center">
					<h1 className="text-3xl font-bold text-gray-800 overflow-hidden">Prior Auth Records</h1>
					<Button href="/dashboard/create" color="blue">
						Create Record
					</Button>
				</div>
				<div className="flex flex-col justify-center items-center gap-4 relative w-full h-[75%] bg-transparent border-2 border-gray-300 p-5 m-5 self-center">
					<Image
						src="/no_records.svg"
						width={200}
						height={200}
					/>
					<p className="">
						<strong>No prior auth records found</strong>
					</p>
					<p>
						<i>You can create a new prior auth record by clicking 'Create Record'</i>
					</p>
				</div>
			</div>
		</div>
	)
}