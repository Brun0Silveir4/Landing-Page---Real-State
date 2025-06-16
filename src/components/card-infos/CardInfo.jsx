import "./CardInfo.scss"

export default function CardInfo({img, title, text}) {
  return (
    <div className="item">
      <div className="icon">
        <img src={img} alt="" />
      </div>

      <div className="title-card">
        <p>{title}</p>
      </div>

      <div className="text-card">
        {text}
      </div>
    </div>
  );
}
