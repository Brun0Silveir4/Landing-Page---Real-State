import "./MiniCard.scss";

export default function MiniCard({title, subtitle}) {
  return (
    <div className="group-item">
      <p>{title}+</p>
      <p>{subtitle}</p>
    </div>
  );
}
