import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Job from "./components/job";
import Detail from "./components/detail";
import { useEffect, useState } from "react";
import AddNewJob from "./components/addJob";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Đọc thông tin từ LocalStorage, đồng thời chuyển đối từ JSON string -> Javascript Object
    const existAccount = JSON.parse(localStorage.getItem("account"));
    if(existAccount){
      setLoggedIn(true);
    }

  }, []);

  function handleLogout() {
    // Hủy dữ liệu 'account' trong localStorage
    localStorage.removeItem("account");
    window.location.reload();
    window.location.href = "/login";
  }

  return (
    <div>
      <header>
        {
          loggedIn == true ? 
                <span><a href="#" onClick={() => handleLogout()}>Logout</a></span>
                :
                <span>Header template</span>
        }
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/jobs/:id" element={<Detail />} />
          <Route path="/jobs/create" element={<AddNewJob/>} />
        </Routes>
      </BrowserRouter>
      <footer>Footer template</footer>
    </div>
  );
}

export default App;
