import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import * as React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
