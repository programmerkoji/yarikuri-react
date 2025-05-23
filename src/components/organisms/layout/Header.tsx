import { logoutApi } from "@/api/authApi";
import { NAV_LINKS } from "@/constants/navLinks";
import { useAuth } from "@/hooks/useAuth";
import { getNavLinkClass, getSpNavLinkClass } from "@/utils/classUtils";
import { FC, memo, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

export const Header: FC = memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const { logout: setUser, user } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsUserMenuOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleLogout = async () => {
		await logoutApi();
		setUser();
		navigate("login");
	};

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
								<div
									key={path}
									className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
								>
									<Link
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
					<div className="hidden sm:flex sm:items-center sm:ml-6">
						<div className="relative" ref={menuRef}>
							<div>
								<button
									className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
									onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
								>
									<div>{user?.name}</div>
									<div className="ml-1">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
								</button>
							</div>
							<div
								className={`absolute z-50 mt-2 w-48 rounded-md shadow-lg origin-top-right right-0 ${
									isUserMenuOpen || "hidden"
								}`}
							>
								<div className="rounded-md ring-black ring-opacity-5 py-1 bg-white">
									<div
										className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
										onClick={handleLogout}
									>
										ログアウト
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={isOpen ? "sm:hidden block" : "sm:hidden hidden"}>
				{NAV_LINKS.map(({ path, label }) => (
					<div key={path} className="pt-2 pb-3 space-y-1">
						<Link
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
							{user?.name}
						</div>
						<div className="font-medium text-sm text-gray-500">
							{user?.email}
						</div>
					</div>

					<div className="mt-3 space-y-1">
						<div>
							<div
								className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
								onClick={handleLogout}
							>
								ログアウト
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
});
