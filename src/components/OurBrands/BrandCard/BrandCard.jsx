
const BrandCard = ({brand}) => {
    const {name,img} = brand;
    return (
        <div className="flex items-center bg-[#F3F6FB] rounded-lg justify-between p-4">
            <p className="text-4xl font-bold">{name}</p>
            <img className="w-40 rounded-md" src={img} alt="" />
        </div>
    );
};

export default BrandCard;