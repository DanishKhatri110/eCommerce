import { createStackNavigator } from "@react-navigation/stack";
import SCREENS from "../screens";
import intro from "../screens/intro/intro";
import Signup from "../screens/authen/Signup";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (<Stack.Navigator initialRouteName={SCREENS.INTRO}>
        <Stack.Screen
            name={SCREENS.INTRO}
            component={intro}
            options={{ headerShown: false }} />
        <Stack.Screen
            name={SCREENS.SIGNUP}
            component={Signup}
            options={{headerShown:false}}
        />
    </Stack.Navigator>
        
    );
};
export default StackNavigation;