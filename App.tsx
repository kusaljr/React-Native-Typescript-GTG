import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/drawerNavigator";
import {NativeBaseProvider} from 'native-base'
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <DrawerNavigator/>
          </Provider>
        </QueryClientProvider>
      </NativeBaseProvider>
    </NavigationContainer>
      
  );
}


