import ImageShow from "./ImageShow";

function ImageList({images}) {
  const renderedImages = images.map((image, index) => {
    return <ImageShow key={image.id} image={image}/>;
  })
  return (
    <div>
      {renderedImages}
    </div>
  );
}

export default ImageList;
