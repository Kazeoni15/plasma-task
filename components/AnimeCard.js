export default function  AnimeCard(props){
    return(
        <div className="card">
            <div>{props.anime}</div>
            <div>{props.character}</div>
            <div>{props.quote}</div>

        </div>
    )
}