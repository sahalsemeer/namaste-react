const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
            <form action="">
                <input type="text" placeholder="name" className="border m-2 p-1" />
                <input type="text" placeholder="message" className="border m-2 p-1" />
                <button className="p-2 rounded bg-blue-950 text-white">submit</button>
            </form>
        </div>
    )
}


export default Contact;