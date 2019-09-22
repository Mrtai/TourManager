const urlApi = "http://localhost:5000/api/login/add-user";
const SignUpOnN = async (values) => {
    //console.log("api : ", values);
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    }
    //console.log(options.body);
    await fetch(urlApi, options)
        .then((res) => res.json())
        .then((options) => console.log(options))
        .catch((err) => console.log(err))
}
export default SignUpOnN;