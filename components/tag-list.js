

export default function TagList({tags}) {
    return (
        <div >{tags.split(' ').map(tag => {
            return (<Tag tag={tag}/>)
        })}</div>
    )
}

function Tag({tag}) {
    return (
        <span>{tag} </span>
    )
}