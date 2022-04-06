const Card = (props) => {
    const {card, clickHandler} = props;
    return(
        <div className="card" onClick={() => {
            clickHandler(card.id);
        }} >
            <div className="card-container">
            <img className="card-image" src={require(`../image/${card.imgSrc}`)} alt="" />
            <h3 className="card-title">{card.title}</h3>
            </div>
        </div>
    )
}

export default Card;