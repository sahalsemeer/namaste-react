import { CARD_IMG, LOGO_IMG } from "../utils/constants";
import { CLOUDINARY_URL } from "../utils/constants";

const RestrauntCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, deliveryTime, cuisines } =
    resData;

    const handleClick = (e) => {
      console.log(e.currentTarget.textContent);
    }
  // console.log(cloudinaryImageId);
  return (
    <div data-testid="restoCard" className="m-4 p-[30px] w-[300px] h-[400px] bg-white-100 rounded border-1-gray">
        {/* {if the restro === promoted add <label></label>} */}
      <img
        className="w-[100%] h-[70%] mb-[15px]"
        src={CLOUDINARY_URL + cloudinaryImageId}
      />
      <h5 className="font-bold">{name}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5 >{deliveryTime} mins</h5>
      <h1>test</h1>
    </div>
  );
};

export const withPromotedLabel = (WrappedComponent) => {
    return (props) => {
        return(
            <div>
                <label htmlFor="" className="absolute bg-red-500 rounded-lg text-white p-2 m-2">Promoted</label>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default RestrauntCard;
