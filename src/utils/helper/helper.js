import { toast } from "react-toastify";
import creditCardType from "credit-card-type";
import { masterIcon, visaIcon } from "../constant/constants";
const notify = (message) =>
   toast.success(message, {
     position: "top-center",
     autoClose: 3000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });


const cardType = (cardNumber) => {
  
  const card = creditCardType(cardNumber);
  if(card[0].type.toLocaleLowerCase() === 'visa') {
    return { cardType: card[0].type.toLocaleLowerCase(), img: visaIcon };
  }
  if (card[0].type.toLocaleLowerCase() === "mastercard") {
    return { cardType: card[0].type.toLocaleLowerCase(), img: masterIcon };
  }
  return {cardType:card[0].type.toLocaleLowerCase(),img:null};
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

   
export { notify, cardType, capitalizeFirstLetter };
