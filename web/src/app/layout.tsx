import React from "react";

import "./globals.css";

import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJumjuree } from "next/font/google";


const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJumjuree = BaiJumjuree({ subsets: ["latin"], weight: "700", variable: "--font-bai-jamjuree" });

export const metadata = {
	title: "Nlw Spacetime",
	description: "Uma cápsula do tempo construido com React, Nextjs, Tailwind e Typescript",
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} ${baiJumjuree.variable} font-sans bg-gray-900 text-gray-200`}>{children}</body>
		</html>
	);
}
