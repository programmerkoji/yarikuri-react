import { NAV_LINKS } from "@/constants/navLinks";
import { getNavLinkClass, getSpNavLinkClass } from "@/utils/classUtils";
import { FC, memo, useState } from "react";
import { Link, useLocation } from "react-router";

export const Header: FC = memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<header className="bg-white border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="shrink-0 flex items-center">
								<Link to="/top" className="block text-bold text-gray-800">
									やりくり帳
								</Link>
							</div>
							{NAV_LINKS.map(({ path, label }) => (
								<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
									<Link
										key={path}
										to={path}
										className={getNavLinkClass(location.pathname, path)}
									>
										{label}
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
						>
							<svg
								className="h-6 w-6"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								{isOpen ? (
									<path
										className="inline-flex"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								) : (
									<path
										className="inline-flex"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className={isOpen ? "sm:hidden block" : "sm:hidden hidden"}>
				{NAV_LINKS.map(({ path, label }) => (
					<div className="pt-2 pb-3 space-y-1">
						<Link
							key={path}
							to={path}
							className={getSpNavLinkClass(location.pathname, path)}
              onClick={() => setIsOpen(!isOpen)}
						>
							{label}
						</Link>
					</div>
				))}
				<div className="pt-4 pb-1 border-t border-gray-200">
					<div className="px-4">
						<div className="font-medium text-base text-gray-800">
							テストユーザー
						</div>
						<div className="font-medium text-sm text-gray-500">
							test@test.com
						</div>
					</div>

					<div className="mt-3 space-y-1">
						<form
							method="POST"
							action="https://from-forties.net/yarikuri/logout"
						>
							<input
								type="hidden"
								name="_token"
								value="cGgDxa4dPTpIkOBTkgIlrg1i5r2j1zrHnXzeTKtW"
							/>
							<a
								className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
								href="https://from-forties.net/yarikuri/logout"
							>
								ログアウト
							</a>
						</form>
					</div>
				</div>
			</div>
		</header>
	);
});
