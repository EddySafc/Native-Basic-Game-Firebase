import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { auth } from "../firebase";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { getUsers, postUser } from "../Requests";
import { allUsersContext, logInContext } from "../Screens/LoginScreen";
import { userScoreContext } from "./HomeTab";

function LeaderBoardTab() {
  const { loggedInUser, setLoggedInUser } = useContext(logInContext);
  const { userScore, setUserScore } = useContext(userScoreContext);
  const [allUsersLeaderBoard, setAllUsersLeaderBoard] = useState([]);

  useEffect(() => {
    getUsers().then((result) => {
      setAllUsersLeaderBoard(result);
    });
    console.log("use effect test for leader board tab");
    console.log("allUsers:", allUsersLeaderBoard, allUsersLeaderBoard);
  }, [loggedInUser, userScore]);

  if (allUsersLeaderBoard === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  } else if (allUsersLeaderBoard[0] === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No Users.</Text>
      </View>
    );
  } else
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text></Text>
        <Text>Leader Board:</Text>
        <Text></Text>
        <ScrollView>
          {allUsersLeaderBoard.map((user) => (
            <View key={user.user_id}>
              <Text>
                User: {user.user_name} Score:{user.score}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
}

export default LeaderBoardTab;
