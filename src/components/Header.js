const Header = (props) => {
    return(
        <header className="header">
            <h1 className="title">Memory Card Game</h1>
            <div className="scoreboard">
                <p>Score: {props.score}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </header>
    )
}

export default Header;