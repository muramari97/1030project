import React from 'react';
import ReactDOM from 'react-dom'
import {Card,Input} from 'react-onsenui';

import Grandchild from 'Grandchild.jsx';

export default class extends React.Component{

  constructor(props){
    super(props);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.updateFromGrandchild = this.updateFromGrandchild.bind(this);
  }

  //this.state.countの値を1減らす
  decreaseCount(){
    var state = this.props;
    state.count -= 1;
    this.setState(state);
  }


  render(){
    return(
      <Card>
        <div className="title">Child</div>
        <div>カウント:{this.props.count}</div>
        <Button modifier="large" onClick={this.decreaseCount}>Down</Button>
        
        <Grandchild count={this.props.count} updateFromGrandchild={this.updateFromGrandchild} />
      </Card>
    );
  }

}