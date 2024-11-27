import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent, { First } from './MyComponent';
import { Requirement1, Requirement2 } from './Exercise';

// Định nghĩa custom Element
class MyButton extends React.Component{
  render(){
    return (
      <button>
        {this.props.children}
      </button>
    )
  }
}

class MySection extends React.Component{
  render(){
    return (
      <div>
        <h1>MySection Component</h1>
        {this.props.children}
      </div>
    )
  }
}

// Khai báo mảng và đối tượng để truyền dữ liệu đọc trong JSX
const recipes = ["FastFood", "Crab", "Noodle"];
const courses = {
  Flutter: 3,
  Vue: 2,
  React: 5,
  Angular: 4
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Nested:
  // <MySection>
  //   {/* Đã có <h1> */}
  //   <MyButton>Click Me!</MyButton>
  // </MySection>
  
  // Namespace:
  // <MyComponent>
  //   <MyComponent.Component1/>
  //   <MyComponent.Component2/>
  //   <First/>
  // </MyComponent>

  // Pass Dynamic properties value
  // <section>
  //   {/* Đọc dữ liệu từ Array - mapping*/}
  //   <ul>
  //     {
  //       recipes?.map(item => (
  //         <li key={item}>{item}</li>
  //       ))
  //     }
  //   </ul>

  //   {/* Đọc dữ liệu từ Object */}
  //   <ul>
  //     {
  //       Object.keys(courses).map(k => (
  //         <li key={k}><b>{k}</b> - {courses[k]}</li>
  //       ))
  //     }
  //   </ul>
  // </section>
  <div>
    <Requirement1/>
    <Requirement2/>
  </div>
  
);