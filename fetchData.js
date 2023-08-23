const dashboardURL = '';

document.addEventListener('DOMContentLoaded',(event)=>{
    fetchDashboardData(event);
})


async function fetchDashboardData(event){
    await fetch(dashboardURL).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        //showDashboardData();
    }).catch((error)=>{
        console.error(error);
        showMessage('error', 'OOPS' , 'It is not you, it is us! we are trying !!' , 'dashboard.html');
    })
}

function showDashboardData(){

}
