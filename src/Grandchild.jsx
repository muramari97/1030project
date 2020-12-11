import React from 'react';
import ReactDOM from 'react-dom'
import {Card,Input} from 'react-onsenui';

import Grandchild from 'Grandchild.jsx';

export default class extends React.Component{

  constructor(props){
    super(props);
    this.clearCount = this.clearCount.bind(this);
    this.updateFromGrandchild = this.updateFromGrandchild.bind(this);
  }

  //this.state.countの値を1減らす
  clearCount(){
    var state = this.props;
    state.count = 0;
    this.setState(state);
  }


  render(){
    return(
      <Card>
        <div className="title">Grandchild</div>
        <div>カウント:{this.props.count}</div>
        <Button modifier="large" onClick={this.clearCount}>clear</Button>
      </Card>
    );
  }

}