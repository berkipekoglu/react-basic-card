import './Card.css'
import CardTitle from '../cardTitle/CardTitle'
import CardImage from '../cardImage/CardImage'
import CardInfo from '../cardInfo/CardInfo'

const Card = ({ id, name, url, title, onClick }) => {
    return (
        <div className="card" onClick={() => onClick()}>
            <div className="card-body">
                <CardTitle title={title} />
                <CardImage url={url} />
                <CardInfo info={name} />
            </div>
        </div>
    )
}

export default Card