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
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  } else if (allUsersLeaderBoard[0] === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  } else
    return (
      <View style={styles.container}>
        <ScrollView style={styles.leader_board_container}>
          {allUsersLeaderBoard.map((user) => (
            <View key={user.user_id} style={styles.leader_board_user}>
              <Text style={styles.text}>
                {user.user_name}
                {"      |      "}Score:{user.score}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
}

export default LeaderBoardTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  leader_board_container: {
    margin: 30,
  },
  leader_board_user: {
    backgroundColor: "white",
    margin: 10,
    padding: 6,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
  },
  text: { color: "black", fontWeight: "500", fontSize: 15 },
});
