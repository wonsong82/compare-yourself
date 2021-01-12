var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://ypvwytsck0.execute-api.us-east-1.amazonaws.com/dev/compare-yourself');
xhr.onreadystatechange = function(e){
    console.log(e.target.response);
};
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({age: 26, height: 71, income: 2100}));
