//source
//https://www.sitepoint.com/use-jquerys-ajax-function/

function ajax(url, option = {method: 'GET'}) {
    const xhr = new XMLHttpRequest();
    xhr.open(option.method, url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                try{
                    const res = JSON.parse(xhr.responseText);
                    option.success && option.success(res);
                    if(res.status === 401) {
                        navigatetoSign();
                    }
                } catch(err) {
                    navigatetoSign();
                    console.log(err);
                }
            }
        }
    }
    const data = option.data;
    let postData = null;
    if(data && typeof data === 'object'){
        postData = JSON.stringify(data);
    }
    xhr.send(postData); //set request body
}

function navigatetoSign(){
    if(window.location.pathname !== '/sign.html'){
        window.location.href = '/sign.html';
    }
}



