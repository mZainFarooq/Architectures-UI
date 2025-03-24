const HouseCard = ({ image = "", title = "" }) => {
  return (
    <div className="relative w-full ">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="absolute top-0 left-0 bg-black text-white px-2 py-1">
        {title}
      </div>
    </div>
  );
};

export default HouseCard;
