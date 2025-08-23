

const Tile = ({count,text}) => {
  return (
    <div id="tile">
      <span id="count">{count}</span>
      <span id="field">{text}</span>
    </div>
  );
};

export default Tile;
