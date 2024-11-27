import React from "react";

class MyComponent extends React.Component{
    render(){
        return (
            <section>
                {this.props.children}
            </section>
        )
    }
}

class First extends React.Component{
    render(){
        return (
            <div>The first component</div>
        )
    }
}

class Second extends React.Component{
    render(){
        return (
            <div>The second component</div>
        )
    }
}

// Chỉ định các component: First, Second trong cùng không gian làm việc
MyComponent.Component1 = First;
MyComponent.Component2 = Second;

// Export
export default MyComponent;
export {First, Second};