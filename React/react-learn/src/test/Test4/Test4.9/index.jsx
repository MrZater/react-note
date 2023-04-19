import React, { PureComponent, useState, useMemo } from 'react'
class A extends PureComponent {
  render() {
    return (
      <>
        <li>{this.props.a}</li>

      </>
    )
  }
}



function App() {
  const [range,] = useState({ min: 1, max: 10000 })
  const [b, setB] = useState(123)
  // 类似与vue的computed
  // 在useMemo中传入一个函数，保存该函数的返回值
  const list = useMemo(
    () => {
      let list = []
      for (let i = range.min; i < range.max; i++) {
        console.log(i);
        list.push(<A key={i} a={i}></A>)
      }
      return list
    },
    [range],
  )
  // let list = []
  // for (let i = range.min; i < range.max; i++) {
  //   console.log(i);
  //   list.push(<A key={i} a={i}></A>)
  // }


  return (
    <>
      {list}
      <input type="number" value={b} onChange={
        (e) => {
          setB(e.target.value)
        }
      } />
    </>
  )
}

export default App
