interface ImagesProps {
  images: string[];
}

export const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <div className="bg-[#B8C248] w-full justify-center h-[517px] min-h-[517px] max-h-[517px] flex flex-row gap-4">
      {images.slice(0, 2).map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt="post"
          className={`w-[881px] ${
            images.length > 1 && "max-w-[552px]"
          } h-full object-cover`}
        />
      ))}
    </div>
  );
};
