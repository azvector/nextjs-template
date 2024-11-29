import Link from "next/link"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 md:flex">
					<Link href="/" className="mr-4 flex items-center space-x-3 lg:mr-6">
						<Icons.logo className="h-6 w-6" />
						<span className="font-novamono text-xl lg:inline-block">
							{siteConfig.name}
						</span>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<nav className="flex items-center">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
									}),
									"h-8 w-8 px-0"
								)}
							>
								<Icons.gitHub className="h-4 w-4" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
									}),
									"h-8 w-8 px-0"
								)}
							>
								<Icons.linkedin className="size-5 fill-current" />
								<span className="sr-only">LinkedIn</span>
							</div>
						</Link>
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	)
}
