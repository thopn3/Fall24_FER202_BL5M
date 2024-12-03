import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    // Khai báo 1 state quản lý dữ liệu được trả về từ api: http://localhost:9999/users
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    // Quản lý hoạt động của component
    useEffect(()=>{
        // Gửi request tới API để lấy thông tin của tất cả users
        fetch("http://localhost:9999/users")
            .then(response => response.json())
            .then(result => setUsers(result));
    }, []);

    // console.log(users);
    function handleLogin(e){
        e.preventDefault(); // Hoạt động ngăn chặn reload lại trang
        // So sánh dữ liệu trên Form với dữ liệu từ "users"
        const existUser = users?.find(u => u.user == username && u.pass == password);
        if(existUser){
            // Lưu thông tin tài khoản gồm: uId, user vào LocalStorage
            localStorage.setItem("account", JSON.stringify({id: existUser.uId, user: existUser.user}));
            // Điều hướng tới Job component
            navigate("/jobs");
        }else{
            setMessage("This account not registered!");
        }
    }

    return (
        <div>
            <h3>Login System</h3>
            <div>
                {
                    message && <span style={{color:"red"}}>{message}</span>
                }
            </div>

            <form onSubmit={(e) => handleLogin(e)}>
                Username 
                <input onChange={(e) => setUsername(e.target.value)}/> <br/>
                Password
                <input type="password" onChange={(e) => setPassword(e.target.value)}/> <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login;