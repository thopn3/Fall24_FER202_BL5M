function showStudents(data=[]){
    console.log("List of students");
    for (const {id, name, age} of data) {
        console.log(`${id}\t${name}\t${age}`);
    }
}

export {showStudents};