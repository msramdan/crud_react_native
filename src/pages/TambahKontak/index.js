import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {InputData} from './../../components';

export default class TambahKontak extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      nama: '',
      noHp: '',
      alamat: '',
    };
  }

  onChangeText=(namaState,value)=>{
    this.setState({
      [namaState]: value,
    });
  }
  onSubmit=()=>{
    console.log('masuk Submit');
    console.log(this.state);
  }
  
    render() {
        return (
          <View style={styles.wrapper}>
            <InputData
              labelNama="Nama"
              placeholder="Masukan Nama"
              onChangeText={this.onChangeText}
              value={this.state.nama}
              namaState="nama"
            />
            <InputData
              labelNama="No Hp"
              placeholder="Masukan No Hp"
              keyboardType="number-pad"
              onChangeText={this.onChangeText}
              value={this.state.noHp}
              namaState="noHp"
            />
            <InputData
              labelNama="Alamat"
              placeholder="Masukan Alamat"
              isTextArea={true}
              onChangeText={this.onChangeText}
              value={this.state.alamat}
              namaState="alamat"
            />
            <TouchableOpacity style={styles.btn} onPress={()=>this.onSubmit()}>
              <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  btn: {
    backgroundColor: 'black',
    padding:10,
    borderRadius: 10,
    marginTop:10
  },
  submit:{
      fontSize:14,
      color:'white',
      fontWeight:'bold',
      textAlign:'center'
  }
});

