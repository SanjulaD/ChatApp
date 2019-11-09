import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import{
    Action, Actions,
}from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>Enter Your Name : </Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Sanjula De Alwis"
          onChangeText={text => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              name: this.state.name,
            });
          }}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 26,
  },
  nameInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    fontSize: 24,
    padding: 5,
  },
  btnText: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 26,
  }
});
export default Home;
