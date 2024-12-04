import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./job.css";

function Job() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        // Đọc thông tin từ LocalStorage, đồng thời chuyển đối từ JSON string -> Javascript Object
        const existAccount = JSON.parse(localStorage.getItem("account"));
        if (!existAccount) {
            navigate("/");
        }

        // Lấy tất cả jobs theo uId
        fetch("http://localhost:9999/jobs?uId=" + existAccount?.id)
            .then(response => response.json())
            .then(result => {
                // Kiểm tra giá trị của 'search' để update lại dữ liệu của 'jobs'
                if (search.length == 0)
                    setJobs(result);
                else {
                    // Nếu 'search' có dữ liệu => Lọc ra các jobs có title chứa các kí tự của 'search'
                    const newJobs = result?.filter(j => j?.title.toLowerCase().includes(search.toLowerCase()));
                    // Cập nhật lại 'jobs' state
                    setJobs(newJobs);
                }
            });

        // Lấy tất cả jobs theo uId
        fetch("http://localhost:9999/categories")
            .then(response => response.json())
            .then(result => setCategories(result));

    }, [search]);

    return (
        <div>
            <h3>List of Jobs</h3>
            <div>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter title to search ..." />
            </div>
            <div>
                Category:
                <select>
                    <option value="">Cat 1</option>
                </select>

                Status:
                <select>
                    <option value="">Completed</option>
                </select>
            </div>
            <hr />
            {
                jobs.length == 0 ?
                    <div>Job not found</div> :
                    <table>
                        <tr>
                            <th>JobId</th><th>Title</th><th>Category</th><th>Status</th><th colSpan={2}>Functions</th>
                        </tr>
                        {
                            jobs?.map(j => (
                                <tr>
                                    <td>{j?.jId}</td>
                                    <td>{j?.title}</td>
                                    <td>
                                        {
                                            categories?.find(c => c.cId == j?.cId)?.name
                                        }
                                    </td>
                                    <td>{j?.status == true ? <span>Completed</span> : <span>In-Completed</span>}</td>
                                    <td>
                                        <Link to={"/jobs/" + j?.jId}>Job details</Link>
                                    </td>
                                    <td>
                                        <a href="#">Remove</a>
                                    </td>
                                </tr>
                            ))
                        }

                    </table>
            }

        </div>
    )
}

export default Job;