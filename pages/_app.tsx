import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				key="google-ads"
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1807532107669436"
				crossOrigin="anonymous"
			></Script>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

