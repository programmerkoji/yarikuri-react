import { AuthProvider } from "./context/AuthContext";
import { Router } from "./router/Router";

const App: React.FC = () => {
	return (
		<>
			<AuthProvider>
				<Router></Router>
			</AuthProvider>
		</>
	);
};

export default App;
