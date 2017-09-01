
import React,{Component,PropTypes} from 'react';
import {requireNativeComponent} from 'react-native';

var RNTMap = requireNativeComponent('RNTMap',MyMapView);

class MyMapView extends React.Component {
  static propTypes = {
    pitchEnabled:PropTypes.bool,
  };
  render(){
    return <RNTMap {...this.props} style={{width:200,height:100}}/>
  }
}

module.exprots = MyMapView;
