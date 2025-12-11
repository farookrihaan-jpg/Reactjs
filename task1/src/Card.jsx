import react from "react"
export default function Card(props){
    return(
        <div className="card">
            <h2>hello iam {props.name}</h2>
            <p>Contact: {props.contact}</p>
        </div>
    )}