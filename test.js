export function test (element) {
    // maxgräns för visade meddelanden 10 st
    // en meddelande historik
    // lyssna på enter
    // slashcommando /h för hjälp
    // förbjud tomma meddelanden
    const send = element.querySelector('#send')
    const msg = element.querySelector('#msg')

    const msgHistory = [];

    msg.focus()

    msg.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            send.click()
        }
    })

    send.addEventListener('click', (e) => {
        e.preventDefault()
        if (msg.value === '') {
            return
        }
        if (msg.value === '/h') {
            console.log('help')
            return
        }
        msgHistory.push(msg.value)
        const msglist = element.querySelector('#msglist')
        if (msglist.children.length > 10) {
            msglist.removeChild(msglist.firstChild)
        }
        const li = document.createElement('li')
        li.textContent = msg.value
        msglist.appendChild(li)

        // clear input
        element.querySelector('#msg').value = ''
    })

    const history = element.querySelector('#history')
    history.addEventListener('click', (e) => {
        console.log(msgHistory)
    })
}