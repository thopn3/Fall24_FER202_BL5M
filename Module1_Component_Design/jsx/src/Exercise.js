import React from "react";

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// Y/cầu 1: Tạo 1 class component trả về 1 element hiển thị danh sách các Companies dạng bảng
/*
   | CompanyName| Category  | Start | End |
   | ......     | ....      | ...   | ....|
*/

class Requirement1 extends React.Component{
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies?.map(c => (
                            <tr key={c.name}>
                                <td>{c.name}</td>
                                <td>{c.category}</td>
                                <td>{c.start}</td>
                                <td>{c.end}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}


// Y/cầu 2: Tạo 1 class component trả về 1 element hiển thị các Công ty hoạt động trong lĩnh vực 'Finance'
// Với output như yêu cầu 1
class Requirement2 extends React.Component{
    render(){
        // Xử lý lọc dữ liệu thỏa mãn điều kiện
        const result = companies?.filter(c => c.category == "Finance");

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        result?.map(c => (
                            <tr key={c.name}>
                                <td>{c.name}</td>
                                <td>{c.category}</td>
                                <td>{c.start}</td>
                                <td>{c.end}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

// Y/cầu 3: Tạo 1 class component trả về 1 element hiển thị các Công ty bị dừng hoạt động trước năm 2010
// Với output như yêu cầu 1
class Requirement3 extends React.Component{
    render(){
        return (
            <table>
                
            </table>
        )
    }
}

export {Requirement1, Requirement2, Requirement3};