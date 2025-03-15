import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import { Router } from "./router/Router";

const App: React.FC = () => {
	return (
		<>
			<AuthProvider>
				<Router></Router>
				<Toaster />
			</AuthProvider>
		</>
	);
};

export default App;
