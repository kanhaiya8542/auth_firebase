import React, { Component } from 'react'
import firebase from 'firebase';
import {Text} from 'react-native';   
import { Button, Card, CardSection, Input ,Spinner } from './Common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
	 
	 handleSumbit=()=> {
		 const {email,password} = this.state;
		 
		 this.setState({error: '', loading:true});
		 
		 firebase.auth().signInWithEmailAndPassword(email,password)
		 .then(this.successSignIn.bind(this))
		 
		 .catch(()=> { 
		 firebase.auth().createUserWithEmailAndPassword(email,password) 
		 .then(this.successSignIn.bind(this))
		 
		 .catch (this.failSignIn.bind(this));
		 });	 
	 }
	 
	 failSignIn(){
	  this.setState({
		  error:"Authentication Fail",
		  loading:false,
	  })
	  
	 
	 }
	 
	 
	 successSignIn(){
		 this.setState({
			 loading:false,
			 email:'',
			 password:'',
			//error:'',
		 });
		 
	 }
	  
	 
	 spinnerButton(){
	   if(this.state.loading){
		   return <Spinner  size1="small"/>;
	   }
	   
	   return(
	   <Button onPress={this.handleSumbit.bind(this) }>
			Log in
       </Button>
	   );
	   
	 }
	
	
	
	
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        Value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />

                </CardSection>
<Text style={{fontSize:20,alignSelf:'center' ,color :'red'}}>
{this.state.error}
</Text>

                <CardSection>
				{this.spinnerButton()}
				</CardSection>
				
			


            </Card>

        );
    }
}


export default LoginForm;