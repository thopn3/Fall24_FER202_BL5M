import { Component } from "react";

class Job extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Job {this.props.index}</div>
    }
}

class ClsComponentEx extends Component {
    constructor(props) {
        super(props);
        // Tạo 1 state quản lý trạng thái dữ liệu của 1 list Job component
        this.state = {
            listJobs: [] // Chứa các Jobs
        };
    }

    handleClick = () => {
        // Cập nhật state {listJobs}
        this.setState((prevState => ({
            listJobs: [...prevState.listJobs, <Job index={prevState.listJobs.length+1}/>]
        })))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Add new Job</button>
                {
                    // Duyệt từ listJobs
                    this.state.listJobs?.map((newComponent, index) => (
                        <div key={index}>
                            {newComponent}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ClsComponentEx;