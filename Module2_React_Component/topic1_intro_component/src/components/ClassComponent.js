// Khai báo class Component của React để tạo ra custom Component
import {Component} from "react";

class ClsComponent extends Component{
    // Hàm khởi tạo
    constructor(props){
        // Set giá trị ban đầu cho: Props và State
        super(props);
        this.state = {count : 0};
    }

    // Ghi đè các phương thức của lớp cha Component
    componentDidMount(){
        console.log("Component mounted");
    }

    componentDidUpdate(prevState){
        if(prevState.count != this.state.count){
            console.log("Count state changed");
        }
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    // Các sự kiện làm thay đổi giá trị của state {count}
    incrementCount = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    decrementCount = () => {
        this.setState(prevState => ({count: prevState.count - 1}));
    }

    render(){
        console.log("Component rendered");
        return (
            <>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
            </>
        )
    }
}

export default ClsComponent;

