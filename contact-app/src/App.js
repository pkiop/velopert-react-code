import React, {Component, Fragment} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfo from './components/PhoneInfo';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-000-0001'
      },
      {
        id: 1,
        name: '길동',
        phone: '010-000-3001'
      },
      {
        id: 2,
        name: '동',
        phone: '010-000-1001'
      }
    ],
    keyword: '',

  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    //이런 식의 비구조할당 문법 적극적으로 활용해서 코드 깔끔하게
    const { information } = this.state;
    this.setState({
      //기존 배열 수정하지 않고 새 배열 만들어 주입. 
      information: information.concat({
        ...data,
        id: this.id++
      })
      // information: information.concat({
      //   name: data.name,
      //   phone: data.phone,
      //   id: this.id++
      // })

      // information: information.concat(Object.assign({}, data, {
      //   id: this.id++
      // }))
    })

  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id == id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input 
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        
        />
        <PhoneInfoList 
          data={this.state.information.filter(
            info=>info.name.indexOf(this.state.keyword) > -1
          )} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default App;
