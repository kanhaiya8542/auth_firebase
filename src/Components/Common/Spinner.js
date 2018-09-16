import React from 'react';
import {View,ActivityIndicator} from 'react-native';

const Spinner =({size1})=>{

return(  
<View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<ActivityIndicator size={ size1 || 'large' } />
</View>

  );

}    

export {Spinner};