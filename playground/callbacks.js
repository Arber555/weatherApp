let getUser = (id, callback) => {
    let user = {
        id,
        name: 'Arber'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(7, (userObject) => {
    console.log(userObject);
});