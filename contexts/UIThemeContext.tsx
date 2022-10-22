import * as React from "react";

type effectiveUITheme = "light" | "dark" | String;
type UITheme = "system" | effectiveUITheme;

interface UIThemeContext {
	UITheme: UITheme;
	effectiveUITheme: effectiveUITheme;
	setUITheme: React.Dispatch<React.SetStateAction<effectiveUITheme | String>>;
}

const UIThemeContext = React.createContext<UIThemeContext | null>(null);

const UIThemeContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [theme, setTheme] = React.useState<UITheme>("system");
	const UIThemeContextValue: UIThemeContext = {
		UITheme: theme,
		effectiveUITheme: theme,
		setUITheme: setTheme,
	};
	return (
		<UIThemeContext.Provider value={UIThemeContextValue}>
			{children}
		</UIThemeContext.Provider>
	);
};
