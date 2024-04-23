export const Image = ({ src }: { src: string }) => (
  <img
    style={{
      width: "30px",
      height: "20px",
      objectFit: "cover",
    }}
    src={src}
    alt="flag icon"
  />
);
