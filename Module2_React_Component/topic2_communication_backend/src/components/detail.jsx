import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function IssueItem() {
    return (
        <div>
            Issue <input placeholder="Enter issue title"/>
            EndDate <input type="date"/>
            <button>X</button>
            <br />
        </div>
    )
}

function Detail() {
    // Lấy dữ liệu của các parameters trên URL: http://localhost:3000/jobs/:id/issues/:title
    const { id } = useParams();
    const [jobDetail, setJobDetail] = useState({});
    const [issueTitle, setIssueTitle] = useState("");
    const [endDate, setEndDate] = useState("");

    const [issueItems, setIssueItems] = useState([]);

    useEffect(() => {
        // Gửi request tới API -> Lấy dữ liệu của job theo id
        fetch("http://localhost:9999/jobs/" + id)
            .then(response => response.json())
            .then(result => setJobDetail(result))
            .catch(error => console.error(error));

    }, []);

    function handleAddIssues(e) {
        // Lấy dữ liệu trên Form
        const newIssue = {
            id: jobDetail?.issues?.length + 1,
            title: issueTitle,
            start: (new Date()).toLocaleString(),
            end: endDate,
            status: false
        };

        // Tổ chức mảng issues mới bao gồm chứa các issues hiện tại của Job
        const newIssues = [...jobDetail?.issues, newIssue];

        // Gửi request tới: http://localhost:9999/jobs/:id - method: PATCH
        fetch("http://localhost:9999/jobs/" + id, {
            method: "PATCH",
            body: JSON.stringify(
                {
                    "issues": newIssues
                }
            ),
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            window.location.reload();
        });
    }

    function addIssueItem(){
        setIssueItems([...issueItems, <IssueItem/>]);
    }

    return (
        <div>
            <Link to={"/jobs"}>Back to jobs list</Link>
            <h3>Job Details</h3>
            <div>JobId: {jobDetail?.id}</div>
            <div>Title: {jobDetail?.title}</div>
            <div>Add new issues: <button onClick={()=>addIssueItem()}>+</button></div>
            <div style={{ paddingLeft: "50px", paddingTop: "20px" }}>
                <form onSubmit={(e) => handleAddIssues(e)}>
                    Issue <input placeholder="Enter issue title" onChange={e => setIssueTitle(e.target.value)} />
                    EndDate <input type="datetime-local" onChange={e => setEndDate(e.target.value)} />
                    <button>X</button>
                    <br />
                    <input type="submit" value="Add Issues" />
                </form>

                {
                    issueItems?.map(i => i)
                }
            </div>
            <div>
                <h4>Issues details:</h4>
                <table>
                    <tr>
                        <th>Title</th><th>Start</th><th>End</th><th>Status</th>
                    </tr>
                    {
                        jobDetail?.issues?.map(i => (
                            <tr key={i.id}>
                                <td>{i.title}</td>
                                <td>{i.start}</td>
                                <td>{i.end}</td>
                                <td>
                                    {
                                        i?.status == true ?
                                            <><input type="checkbox" checked={true} /></>
                                            :
                                            <><input type="checkbox" checked={false} /></>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Detail;