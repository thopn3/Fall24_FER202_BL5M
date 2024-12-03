import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Job() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Đọc thông tin từ LocalStorage, đồng thời chuyển đối từ JSON string -> Javascript Object
        const existAccount = JSON.parse(localStorage.getItem("account"));
        if (!existAccount) {
            navigate("/");
        }

        // Lấy tất cả jobs theo uId
        fetch("http://localhost:9999/jobs?uId=" + existAccount?.id)
            .then(response => response.json())
            .then(result => setJobs(result));

    }, []);

    return (
        <div>
            <h3>List of Jobs</h3>
            <div>Job title: </div>
            <table>
                <tr>
                    <th>JobId</th><th>Title</th><th>Category</th><th>Status</th><th colSpan={2}>Functions</th>
                </tr>
                {
                    jobs?.map(j => (
                        <tr>
                            <td>{j?.jId}</td>
                            <td>{j?.title}</td>
                            <td>{j?.cId}</td>
                            <td>{j?.status==true?<span>Completed</span>:<span>In-Completed</span>}</td>
                            <td>
                                <Link to={"/jobs/"+j?.jId}>Job details</Link>
                            </td>
                            <td>
                                <a href="#">Remove</a>
                            </td>
                        </tr>
                    ))
                }

            </table>
        </div>
    )
}

export default Job;