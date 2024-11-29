interface AppLayoutProps {
	children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className="container relative">
			<div className="hidden space-y-6 p-10 pb-16 md:block">
				<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
					<div className="flex-1 lg:max-w-2xl">{children}</div>
				</div>
			</div>
		</div>
	)
}
