import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

interface IRootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
	const { children } = props;
	
	return (
		<html lang="en">
			<head></head>
			<body>
				<NextUIProvider>
					{children}
					<div id="modal" />
				</NextUIProvider>
			</body>
		</html>
	)
}