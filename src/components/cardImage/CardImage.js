import './CardImage.css';

export default function CardImage({ url }) {
  return (
    <div className='card-image'>
        <img src={url} alt=""  />
    </div>
  )
}
