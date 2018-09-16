import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button ,Spinner} from './Components/Common';
import LoginForm from './Components/LoginForm';



class App extends Component {

    state = { loadedIn: null }


    componentWillMount() {
        firebase.initializeApp({

            apiKey: 'AIzaSyAfMy7txUqtLJ-F4c8-GbzQ2V83sXGzHw4',
            authDomain: 'authentication-d1dd6.firebaseapp.com',
            databaseURL: 'https://authentication-d1dd6.firebaseio.com',
            projectId: 'authentication-d1dd6',
            storageBucket: 'authentication-d1dd6.appspot.com',
            messagingSenderId: '864071332985'

        });


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loadedIn: true });
            } else {
                this.setState({ loadedIn: false });
            }
        })
    }


    renderContent() {
        switch (this.state.loadedIn) {
            case true:
                return(
                <Button onPress={ ()=> firenase.auth().signOut()}> 
                    Log Out
               </Button>
                )
            case false:
                return
                <LoginForm />


            default:
                return
                <Spinner size="large" />
        }
    }



    render() {
        return (

            <View>
                 <Header headerText="Authentication" />


                {/* <Button> log out </Button> */}
                {/* <Spinner size="large" /> */}
                { this.renderContent() }
            </View>
        );
    }
}
export default App;