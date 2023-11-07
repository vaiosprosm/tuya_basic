import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Modal } from 'react-native';


import { CircleView } from 'tuya-panel-kit';

const Strings = require('../i18n');

export default class DpInfoView extends Component {
  static propTypes = {
    // style: View.propTypes.style,
    dpSchema: PropTypes.shape({
      id: PropTypes.string,
      code: PropTypes.string,
      mode: PropTypes.oneOf(['rw', 'wr', 'ro']),
      name: PropTypes.string,
      type: PropTypes.oneOf(['value', 'enum', 'bool', 'string', 'raw', 'fault', 'bitmap']),
    }).isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      isDialogVisible: false,
      textValue: '',
    };
  }

  showDialog = () => {
    this.setState({ isDialogVisible: true });
  }

  handleCancel = () => {
    this.setState({ isDialogVisible: false });
  }

  handleSave = () => {
    this.setState({ isDialogVisible: false });
  }


  getModeLang(d) {
    return Strings[`dp_mode_${d}`];
  }

  getTypeLang(d) {
    return Strings[`dp_type_${d}`];
  }

  getNameLang(c, name) {
    const strKey = `dp_${c}`.toLowerCase();
    return Strings[strKey] ? Strings[strKey] : name;
  }

  render() {
    const { id, name, type, mode, code } = this.props.dpSchema;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showDialog}>
          <Text>Open Dialog</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.isDialogVisible}
          onRequestClose={this.handleCancel}
        >
          <View>
            <View style={styles.modal}>
              <Text>Enter Text</Text>
              <TextInput
                placeholder="Type something..."
                onChangeText={(text) => this.setState({ textValue: text })}
              />
              <View style={styles.buttonModal}>
                <TouchableOpacity style={styles.touchableButton} onPress={this.handleSave}>
                  <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableButton} onPress={this.handleCancel}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.subject}>
          <CircleView style={styles.dpIdBg} radius={10}>
            <Text style={styles.dpId}>{id}</Text>
          </CircleView>
          {/* <Text style={styles.dpName}>{this.getNameLang(code, name)}</Text> */}
          <Text style={styles.dpName}>{this.state.textValue}</Text>
        </View>

        <Text style={styles.subSubject}>
          {this.getTypeLang(type)} | {this.getModeLang(mode)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  subject: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subSubject: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 10,
    color: '#9B9B9B',
    marginTop: 5,
  },

  dpIdBg: {
    backgroundColor: '#FF5800',
    borderColor: '#FF5800',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dpId: {
    fontSize: 9,
    color: 'white',
  },

  dpName: {
    fontSize: 18,
    color: '#303030',
    marginLeft: 5,
  },
  
  modal: {
    backgroundColor: "black",
    color: 'white',
    marginLeft: 5,
  },

  buttonModal: {
    flex: 2,
    flexDirection: "row",
  },

  touchableButton: {
    width:80,
    height:40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'red',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  
  
});
