/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Dialog } from 'tuya-panel-kit'
import ContentLayout from './contentLayout';
import ConsoleLayout from './consoleLayout';

export default class MainLayout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dpData: PropTypes.object.isRequired,
    logs: PropTypes.array,
  };

  static defaultProps = {
    logs: [],
  };

  render() {
    return (
      
      <View style={{ flex: 1, backgroundColor:"black" }}>
        {/* {Dialog.alert({
        title: 'To spiti t',
        subTitle: 'Μη πάρεις mac, δουλεύει με windows 11 και android συσκευή',
        confirmText: 'Confirm',
        onConfirm: (data, { close }) => {
          close();
        },
        })} */}
        <ContentLayout
          style={{ flex: 2, paddingTop: 5 }}
          dpData={this.props.dpData}
          dispatch={this.props.dispatch}
        />

        {/* <ConsoleLayout style={{ flex: 1 }} dispatch={this.props.dispatch} logs={this.props.logs} /> */}
      </View>
    );
  }
}
