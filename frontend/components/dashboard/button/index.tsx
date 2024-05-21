'use client'

import React from 'react';
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function CustomButton({ children, href, color }) {
    const router = useRouter();

    function handleClick() {
        router.push(href)
    }

    const colorClasses = {
        blue: 'from-blue-600 to-blue-400',
        red: 'from-red-600 to-red-400',
        green: 'from-green-600 to-green-400',
    };

	return (
        <Button onClick={handleClick} radius="full" className={`bg-gradient-to-tr ${colorClasses[color]} text-white shadow-lg focus: outline-none`}>
            { children }
        </Button>
	)
}