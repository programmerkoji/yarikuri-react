import { Route, Routes } from "react-router";
import { Item } from "./pages/Item";
import { Month } from "./pages/Month";
import { Top } from "./pages/Top";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/top" element={<Top />} />
					<Route path="/item" element={<Item />} />
					<Route path="/month" element={<Month />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</AuthProvider>
		</>
	);
};

export default App;
