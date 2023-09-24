import React from "react";

function Header() {
    return (
        <>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="/chat" className="nav-link">Chatbot</a></li>
                        <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
                        <li className="nav-item"><a href="/signup" className="nav-link">SignUp</a></li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default Header;