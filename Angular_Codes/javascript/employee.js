function addEmployee(){
    var id=document.getElementById('empid').value;
    var name=document.getElementById('empname').value;
    var online=document.emp.online.value;
    var qual=document.getElementById('qual').value;
    var empcourse=document.getElementsByName('ecourse');
    console.log(empcourse.length);
    var array="";
    for(var i=0;i<empcourse.length;i++){
        if(empcourse[i].checked){
            array=array+empcourse[i].value+", ";
        }
    }
  
    alert("Hello,  Emp-id: "+id+"\n Emp-name: "+name+"\nCourse: "+array+"\nQualification: "+qual+"\n Online-course= "+online);
}