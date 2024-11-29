import type { Metadata, Viewport } from "next"
import { Nova_Mono as FontNovamono, Inter as FontSans } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const fontNovamono = FontNovamono({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-novamono",
})

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"bg-background font-sans antialiased",
					fontSans.variable,
					fontNovamono.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative flex min-h-screen flex-col">
						<SiteHeader />
						<main className="flex-1">{children}</main>
						<SiteFooter />
					</div>
					<TailwindIndicator />
				</ThemeProvider>
			</body>
		</html>
	)
}
