import update from 'immutability-helper'
import {useCallback} from 'react'
import {Card} from './Card.js'

export const Container = ({cards, setCards}) => {

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setCards((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        )
    }, [])

    const deleteCard = (id) => {
        let newCards = JSON.parse(JSON.stringify(cards));
        const len = newCards.length
        for (let i = 0; i < len; i++) {
            if (newCards[i].id === id) {
                newCards.splice(i, 1);
                break;
            }
        }
        setCards(newCards)
    }

    const renderCard = useCallback((card, index) => {
        return (
            <Card
                key={card.id}
                index={index}
                id={card.id}
                text={card.text}
                moveCard={moveCard}
                deleteCard={deleteCard}
            />
        )
    }, [cards])

    return (
        <div>
            {cards.map((card, i) => (renderCard(card, i)))}
        </div>
    )
}

