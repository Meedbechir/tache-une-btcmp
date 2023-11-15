

export default function Post( {data, liker, supression} ) {
  return (
    <div className={data.liker ? "post active" : "post"}>
        <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
        <div className="btn">
            <button onClick={() => liker(data)}>{data.liker ? "Déja liker" : "Liker"}</button>
            <button className="delete" onClick={() => supression(data.id)}>Effacer</button>
        </div>
    </div>
  )
}
