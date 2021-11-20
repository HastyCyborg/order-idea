import React from 'react'

export default function Navbar() {
    return (
        <div style={styles.topper}>
            <h1>Decide your cuisine</h1>
        </div>
    )
}

const styles = {
    topper:{
        color: "#fff",
        backgroundColor: "#1a2478",
        borderRadius: "5px",
    }
}