import {useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from './ItemTypes.js'
import './css/Card.css'

export const Card = ({id, text, index, moveCard, deleteCard}) => {
    const ref = useRef(null)
    const [{handlerId}, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return {id, index}
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    drag(drop(ref))

    return (
        <div
            ref={ref}
            className="card"
            style={{opacity: isDragging ? 0.2 : 1}}
            data-handler-id={handlerId}
        >
            <img
                className="drag"
                src="https://i.imgur.com/AIGTuv5.png"
                width="20"
                alt="drag"/>
            <div className="num">{index + 1}</div>
            <div className="text">{text}</div>
            <img
                className="trashcan"
                onClick={deleteCard.bind(this, id)}
                src="https://i.imgur.com/VMAZmht.png"
                width="20"
                alt="trashcan"/>
        </div>
    )
}
