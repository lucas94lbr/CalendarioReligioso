import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class CalendarioScreen extends Component {
    render () {
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                
                <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>Tela de Calendário</Text>
                </View>
    
                <View style={{margin:20}}>
                <Button
                    title = 'Ir para Tela Detalhes'
                    onPress = { () => this.props.navigation.navigate('Details')}
                />
                </View>
                
            </View>
        ); 
    }
}

CalendarioScreen.navigationOptions = {
    title: 'Calendário',
    // backgroundColor: #524203,
    // headerRight: <Button/ />
  }
export default CalendarioScreen;
  
  