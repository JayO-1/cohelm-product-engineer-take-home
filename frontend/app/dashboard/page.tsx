'use client'

import React from 'react';
import Button from "@/components/dashboard/button";
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardRoot() {
	return (
		<div className="w-full flex flex-col justify-center items-center h-screen">
			<div className="w-[75%] h-full flex flex-col justify-center items-center">
				<h1 className="self-start text-3xl font-bold text-gray-800 overflow-hidden">Prior Auth Records</h1>
				<div className="flex flex-col justify-center items-center gap-6 relative w-full h-[75%] bg-transparent border-2 border-gray-300 p-5 m-5 self-center">
					<Image
						src="/no_records.svg"
						width={200}
						height={200}
					/>
					<p className="text-center">
						<strong>No prior auth records found</strong> <br />
						<i>You can create a new prior auth record by clicking 'Create Record'</i>
					</p>
					<Link href="/dashboard/create" className="px-4 py-2 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full text-white shadow-lg">
						Create Record
					</Link>
				</div>
			</div>
		</div>
	)
}