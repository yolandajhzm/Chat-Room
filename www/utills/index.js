//show error messages
function showMsgTip(msg='Error', delay=2000) {
    const msgNode = document.getElementById('msgTip');
    if(msgNode) {
        msgNode.innerText = msg;
        msgNode.style.display = 'block';
        setTimeout(function(){
            msgNode.style.display = 'none';
        }, delay);
    }
}

//show time besides messages
function formatDate(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    const min = date.getMinutes();

    const pre = hour < 12 && hour >= 0 ? 'AM' : 'PM';
    
    hour = hour < 10 ? '0' + hour : hour;
	const newTime = year + '-' + month + '-' + day + ' ' + hour + ':' + min + pre;
	return newTime;
}