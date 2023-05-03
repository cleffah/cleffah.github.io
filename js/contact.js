async function sendMessage() {
    let email = $('#inputEmail').val();
    let subject = $('#inputSubject').val();
    let message = $('#inputMessage').val();
    req = {
        method: "POST",
        body: JSON.stringify({
            to: 'cleffah@cleffah.com',
            from: email,
            subject: subject,
            message: message
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };
    res = await fetch("https://api.cleffah.com/v1/message", req);
    console.log(res.json());
}