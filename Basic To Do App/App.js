const taskEl = document.getElementById("task");
const listsEl = document.querySelector(".lists");


function clicked(){
    if(taskEl.value===""){
        swal("OOPS!", "PLEASE ADD TEXT");
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskEl.value;
        listsEl.appendChild(li);
        taskEl.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listsEl.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        swal({
            title: "Are you sure?",
            text: "ONCE YOUR ACTIVITY WILL BE DELETED YOU CAN'T RECOVER!",
            icon: "warning",
            button: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("YOUR ACTIVITY WAS DELETED", {
                icon: "success",
              });
              
            } else {
              //swal("YOUR ACTIVITY RETAINED!");
            }
          });
    }
    {
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listsEl.innerHTML);
}

function getData(){
    listsEl.innerHTML = localStorage.getItem("data");
}

getData();