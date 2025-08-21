const Image = ({ image, setImage }) => {
  return (
    <>
      <label htmlFor="cus-img">
        <div
          id="custom-img"
          style={{
            borderRadius: "10px",
            border: "2px dashed #00bfa6",
            cursor: "pointer",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: image ? `url('${image}')` : "none",
          }}
        >
          {!image && "Upload Image"}
        </div>
      </label>
      <input
        type="file"
        id="cus-img"
        style={{ display: "none" }}
        onChange={setImage}
      />
    </>
  );
};

export default Image