import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';
class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }
  render() {

    const {data, onRemove, onUpdate} = this.props;
    console.log('rendering list');
    // if(!data) return null; defaultProps없으면 이렇게
    const list = data.map(
      // 여기 key값을 줌으로써 나중에 리렌더링할때나 빠르게 찾을 수 있는 인덱싱을 통해 효율적으로 동작하게 한다. 
      info => (
        <PhoneInfo 
          onRemove = {onRemove}
          onUpdate = {onUpdate}
          info={info} 
          key={info.id}
        />)
    )
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;