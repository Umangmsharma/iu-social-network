import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages";
import LandingPage from "./pages/landingPage";
import IndividualSearchBar from "./components/topbar/individualsearch"
import { Provider } from "./context";
function App() {
	return (
		<Provider>
			<Router>
				<Routes>
					{/* <ToastContainer position="top-center" /> */}
					<Route path="/" element={<Home />} />
					<Route path="/plot" element={<LandingPage />} />
					<Route path="/plot/individualsearch" element={<IndividualSearchBar />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
