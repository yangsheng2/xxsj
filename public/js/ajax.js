function ajax(method,url,param,fun) {
    let http;
    if(window.XMLHttpRequest){
        http = new XMLHttpRequest();
    }else{
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(method == "get"){
        http.open(method,url+"?"+param);
    }else if(method == "post"){
        http.open(method,url);
    }


    http.onreadystatechange = function () {
        if(http.readyState==4&&http.status==200){
            fun(http.responseText);
        }
    };

    if(method == "post"){
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        http.send(param);
    }else{
        http.send(null);
    }


}