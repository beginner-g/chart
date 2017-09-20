import React, { Component } from 'react';
import { PieChart, Pie, Cell} from 'recharts'
import './app.css'
const Color=['#FFCCBC','#C0CA33','#64FFDA','#7E57C2']
class App extends Component {
  state={
    list:[
      {display:false}
    ]
  }
  handleList=(t,i)=>{
    this.setState({
      list:[...this.state.list,
      {
        name:t.name,
        value:t.value,
        color:Color[i]
      }
    ]
    })
  }
  render() {
    console.log(this.state.list)
    const data = [
      {name: '水分', value: 200},
      {name: '蛋白质', value: 100},
      {name: '碳水化合物', value: 100},
      {name: '淀粉', value: 130}]
    const datalist =data.map((t,i)=>(
        <Cell key={i} fill={Color[i]} onClick={()=>this.handleList(t,i)}/>
      )
    )
    // const newlist =this.state.list.filter(t=>t)
    const newlist =this.state.list.map((t,i)=>(
      <div key={i} className='list'>
        <div className="list-name" style={{'backgroundColor':t.color}}>
          {t.name}
        </div>
        <div className="list-value" style={{'border':`1px solid ${t.color}`}}>
          {t.value}
        </div>
      </div>
    ))
    return (
      <div className='app'>
        <PieChart width={300} height={300} className='pie-chart'>
          <Pie data={data} cx={150} cy={150} dataKey='value' innerRadius={40} outerRadius={80}>
            {datalist}
          </Pie>
       </PieChart>
       {newlist}
      </div>
    );
  }
}

export default App;
