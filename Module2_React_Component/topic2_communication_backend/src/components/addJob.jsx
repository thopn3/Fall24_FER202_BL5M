import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddNewJob() {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [catId, setCatId] = useState(0);
    const [msgTitle, setMsgTitle] = useState(null);
    const [msgCatId, setMsgCatId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch categories data from API
        axios.get("http://localhost:9999/categories")
            .then(response => setCategories(response.data))
            .catch(err => console.error(err));
    }, []);

    function checkInput() {
        let status = true;
        // Check input Job title
        if (title.length == 0) {
            setMsgTitle("Title is required!");
            status = false;
        } else {
            setMsgTitle("");
        }

        // Check input Category dropdown list
        if (catId == 0) {
            setMsgCatId("Category must be selected!");
            status = false;
        } else {
            setMsgCatId("");
        }

        if (status == false)
            return false;
        else
            return true;
    }


    function handleAddJob(e) {
        e.preventDefault();
        if (checkInput()) {
            // Send request -> API -> Save into DB
            // axios.post("http://localhost:9999/jobs", {
            //     title: title,
            //     cId: catId,
            //     uId: JSON.parse(localStorage.getItem("account"))?.id,
            //     status: false,
            //     issues: []
            // }).then(()=>{
            //     alert("Create a new job successfully");
            //     navigate("/jobs");
            // })

            fetch("http://localhost:9999/jobs", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    cId: catId,
                    uId: JSON.parse(localStorage.getItem("account"))?.id,
                    status: false,
                    issues: []
                }),
                headers: { "Content-Type": "application/json" }
            }).then(() => {
                alert("Create a new job successfully");
                navigate("/jobs");
            })
        }
    }

    return (
        <div>
            <h3>Add new Job</h3>
            <form onSubmit={e => handleAddJob(e)}>
                Job title (*)
                <input onChange={e => { setTitle(e.target.value) }} />
                {
                    msgTitle && <div style={{ color: "red" }}>{msgTitle}</div>
                }
                <br />
                Category
                <select onChange={e => setCatId(parseInt(e.target.value))}>
                    <option value={0}>-- Select category --</option>
                    {
                        categories?.map(c => (
                            <option key={c?.cId} value={c?.cId}>{c?.name}</option>
                        ))
                    }
                </select>
                {
                    msgCatId && <div style={{ color: "red" }}>{msgCatId}</div>
                }
                <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddNewJob;