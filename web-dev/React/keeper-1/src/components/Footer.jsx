import React from "react";


function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Created by Me</p>
            <p>Copyright © { year }</p>
        </footer>
    )
}

export default Footer 