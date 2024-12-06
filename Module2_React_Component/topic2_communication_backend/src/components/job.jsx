import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./job.css";

function Job() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCatId, setSelectedCatId] = useState(0);

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
                    // TH: search, selectedCatId có dữ liệu
                    let newJobs = [];
                    if(selectedCatId!=0){
                        // Nếu 'search' có dữ liệu => Lọc ra các jobs có title chứa các kí tự của 'search'
                        newJobs = result?.filter(j => (j?.title.toLowerCase().includes(search.toLowerCase()) && j?.cId == selectedCatId));
                        // Cập nhật lại 'jobs' state
                    }else{
                        newJobs = result?.filter(j => j?.title.toLowerCase().includes(search.toLowerCase()));
                    }
                    setJobs(newJobs);
                }
            });

        // Lấy tất cả jobs theo uId
        fetch("http://localhost:9999/categories")
            .then(response => response.json())
            .then(result => setCategories(result));

    }, [search, selectedCatId]);

    function handleRemove(id){
        if(window.confirm(`Do you want to delete Job with id = ${id}?`)){
            // Gửi request bằng phương thức: DELETE tới api
            fetch("http://localhost:9999/jobs/"+id, {
                method: "DELETE",
            })
            .then(()=>{
                alert("Remove success!");
                window.location.reload();
            })
        }
    }

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
                <select onChange={(e) => setSelectedCatId(parseInt(e.target.value))}>
                    <option value="0">-- Select Category --</option>
                    {
                        categories?.map(c => (
                            <option value={c?.cId} key={c?.cId}>{c?.name}</option>
                        ))
                    }
                </select>

                Status:
                <select>
                    <option value="">-- Select Status --</option>
                    <option value="true">Completed</option>
                    <option value="false">In-Completed</option>
                </select>
            </div>

            <div style={{textAlign:"right"}}>
                <Link to={"/jobs/create"}>Add new Job</Link>
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
                                    <td>{j?.id}</td>
                                    <td>{j?.title}</td>
                                    <td>
                                        {
                                            categories?.find(c => c.cId == j?.cId)?.name
                                        }
                                    </td>
                                    <td>{j?.status == true ? <span>Completed</span> : <span>In-Completed</span>}</td>
                                    <td>
                                        <Link to={"/jobs/" + j?.id}>Job details</Link>
                                    </td>
                                    <td>
                                        <a href="#" onClick={()=>handleRemove(j?.id)}>Remove</a>
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