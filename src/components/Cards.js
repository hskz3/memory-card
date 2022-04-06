import Card from "./Card"

const Cards = ({cardArr, clickHandler}) => {
    return(
        <div className="cards">
            {cardArr.map((card) => (
                <Card key={card.id} card={card} clickHandler={clickHandler} />
            ))
            }
        </div>
    )
}

export default Cards;