import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button} from 'react-onsenui';

import Child from 'Child.jsx';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {count:0,data:""};
    this.incrementCount = this.incrementCount.bind(this);
    this.updateFromChild = this.updateFromChild.bind(this);
  }

  //this.state.countの値を1増やす
  incrementCount(){
    var state = this.state;
    state.count += 1;
    //this.stateを更新
    this.setState(state);
  }

  //Childから呼び出される関数
  //value:子から渡されるデータ
  updateFromChild(value){
    var state = this.state;
    state.data = value;
    //this.stateを更新
    this.setState(state);
  }

  render(){
    return(
      <Page>
        <div>App</div>
        <div>カウント:{this.state.count}</div>
        <Button modifier="large" onClick={this.incrementCount}>Up</Button>
        {/*AppのcountとupdateFromChildを渡して、propsで参照できるようにする*/}
        <Child count={this.state.count} updateFromChild={this.updateFromChild} />
      </Page>
    );
  }

}