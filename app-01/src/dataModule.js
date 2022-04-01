const fetch = require('node-fetch');

exports.myDateTime = function () {
    return Date();
};

function checkResponseStatus(res) {
    if (res.ok) {
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}

exports.getGoogle = function () {
    fetch('https://google.com')
        .then(res => res.text())
        .then(text => console.log(text))
}

exports.getUserData = function () {
    var userList = [];
    try {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(json => {
                userList = json;
                // console.log("First user in the array:");
                // console.log(json[0]);
                // console.log("Name of the first user in the array:");
                // console.log(json[0].name);
                console.log("in the array:");
                console.log(json);
            })
            .catch(err => {
                console.error(err);
            })
    } catch (error) {
        console.log(error);
    }
}



exports.getData = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

