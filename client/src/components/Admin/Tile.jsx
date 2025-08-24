

const Tile = ({count,text}) => {
  return (
    <div className="tile background">
      <span id="count">{count}</span>
      <span id="field">{text}</span>
    </div>
  );
};

export default Tile;
