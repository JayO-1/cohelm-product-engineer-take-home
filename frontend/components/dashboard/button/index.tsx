'use client'

import React from 'react';
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function CustomButton({ children, href, color }) {
    const router = useRouter();

    function handleClick() {
        router.push(`/dashboard/create`)
    }

	return (
        <Button onClick={handleClick} radius="full" className={`bg-gradient-to-tr from-${color}-600 to-${color}-400 text-white shadow-lg focus: outline-none`}>
            { children }
        </Button>
	)
}