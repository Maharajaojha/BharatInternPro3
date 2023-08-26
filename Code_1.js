function updateTimeDate(){
    const now =new Date();
    const dateTimeSection=document.getElementById('Dateout');
    
    const option={
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false,
    
    };

    const formatteddatetime=now.toLocaleString(undefined,option);
    dateTimeSection.textContent=formatteddatetime;
}
updateTimeDate();

setInterval(updateTimeDate,1000);