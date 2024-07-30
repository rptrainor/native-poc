import React from "react";
import { WebView, type WebViewNavigation } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, Linking } from "react-native";

export default function App() {
	const handleNavigationStateChange = (navState: WebViewNavigation) => {
		const { url } = navState;

		if (url.startsWith("https://www.google.com")) {
			// Prevent WebView from loading the URL
			webViewRef.current?.stopLoading();
			// Open the URL in the device's default browser
			Linking.openURL(url);
		}
	};

	const webViewRef = React.useRef<WebView>(null);

	return (
		<WebView
			ref={webViewRef}
			style={styles.container}
			originWhitelist={["*"]}
			source={{
				html: '<div><h1><center>Hello world</center></h1><ul><li><a href="https://www.google.com">https://www.google.com</a></li><li><a href="https://app.ofcolor.com">https://app.ofcolor.com</a></li></ul></div>',
			}}
			onNavigationStateChange={handleNavigationStateChange}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
});
