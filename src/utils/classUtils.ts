export const getNavLinkClass = (currentPath: string, linkPath: string) => {
	return `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ${
		currentPath === linkPath
			? "border-indigo-400 text-gray-900 focus:border-indigo-700"
			: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
	}`;
};

export const getSpNavLinkClass = (currentPath: string, linkPath: string) => {
	return `block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out ${
		currentPath === linkPath
			? "border-indigo-400 text-indigo-700 bg-indigo-50  focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
			: "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
	}`;
};