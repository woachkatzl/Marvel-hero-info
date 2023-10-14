import React from "react";

//Компоненты
import { Card } from "./presentation/Card/Card";
import { characters } from "./domain/info/Characters";

function App() {
    return (
        <React.Fragment>
            {characters.map(character =>
                <Card
                    name={character.name}
                    universe={character.universe}
                    alterego={character.alterego}
                    occupation={character.occupation}
                    friends={character.friends}
                    superpowers={character.superpowers}
                    info={character.info}
                    url={character.url}
                ></Card>
            )}
        </React.Fragment>
    )
}

export { App };