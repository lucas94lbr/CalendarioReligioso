import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class RoteiroScreen extends Component {
    render () {
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                
                <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>Tela de Roteiro de Orações</Text>
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

RoteiroScreen.navigationOptions = {
    title: 'Roteiro de Orações'
  }
export default RoteiroScreen;
  
  