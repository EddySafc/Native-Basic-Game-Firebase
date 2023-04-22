import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { logInContext } from "./Screens/LoginScreen";
import { userScoreContext } from "./Tabs/HomeTab";
import { allUsersContext } from "./Screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginTab from "./Tabs/LoginTab";
import HomeTab from "./Tabs/HomeTab";
import LeaderBoardTab from "./Tabs/LeaderBoardTab";

const Tab = createBottomTabNavigator();

const HomeTabFunc = () => <HomeTab />;

const LeaderBoardTabFunc = () => <LeaderBoardTab />;

const LoginTabFunc = () => <LoginTab />;

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [userScore, setUserScore] = useState("Zero");
  const [allUsers, setAllUsers] = useState([]);
  return (
    <NavigationContainer>
      <logInContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <userScoreContext.Provider value={{ userScore, setUserScore }}>
          <allUsersContext.Provider value={{ allUsers, setAllUsers }}>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "green",
                tabBarActiveBackgroundColor: "#daf5e1",
              }}
            >
              <Tab.Screen
                options={{
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Ionicons
                        name="earth-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                      />
                    );
                  },
                }}
                name="Home"
                component={HomeTabFunc}
              />
              <Tab.Screen
                options={{
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Ionicons
                        name="trophy-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                      />
                    );
                  },
                }}
                name="Leader Board"
                component={LeaderBoardTabFunc}
              />
              <Tab.Screen
                options={{
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Ionicons
                        name="person-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                      />
                    );
                  },
                }}
                name="Login"
                component={LoginTabFunc}
              />
            </Tab.Navigator>
          </allUsersContext.Provider>
        </userScoreContext.Provider>
      </logInContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
