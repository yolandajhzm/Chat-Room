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