import {placeholder} from '@babel/types';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputData = (props) => {
  if (props.isTextArea) {
    return (
      <>
        <Text style={styles.labelStyle}>{props.labelNama}</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.teksinputArea}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={text => props.onChangeText(props.namaState, text)}
        />
      </>
    );
  }

  return (
    <>
      <Text style={styles.labelStyle}>{props.labelNama}</Text>
      <TextInput
        style={styles.teksinput}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={text => props.onChangeText(props.namaState, text)}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    marginBottom: 5,
  },
  teksinput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  teksinputArea: {
    textAlignVertical:'top',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
