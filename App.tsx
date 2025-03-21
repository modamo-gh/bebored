import {
	Nunito_400Regular,
	Nunito_700Bold,
	useFonts
} from "@expo-google-fonts/nunito";
import { SafeAreaView, Text } from "react-native";

const App = () => {
	const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

	if(!fontsLoaded){
		return null;
	}

	return (
		<SafeAreaView
			style={{
				alignItems: "center",
				backgroundColor: "black",
				display: "flex",
				flex: 1,
				justifyContent: "center"
			}}
		>
			<Text style={{ color: "white", fontFamily: "Nunito_700Bold", fontSize: 48 }}>BeBored.</Text>
		</SafeAreaView>
	);
};

export default App;
