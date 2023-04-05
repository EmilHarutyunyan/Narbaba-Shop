import { v4 as uuidv4 } from "uuid";
// Img
import openBoxIcon from "../../assets/images/open-box_2.png";
import addUserIcon from "../../assets/images/add-user_1.png";
import creditIcon from "../../assets/images/credit-card_1.png";
import cashPaymentIcon from "../../assets/images/cash-payment_1.png";
import mapsFlagIcon from "../../assets/images/maps-and-flags_1.png";
import notIcon from "../../assets/images/g3264.png";
import passIcon from "../../assets/images/password_1.png";

export const dataLinks = [
  {
    id: uuidv4(),
    link: "/profile/my-orders",
    text: "My orders",
    icon: openBoxIcon,
  },
  {
    id: uuidv4(),
    link: "/profile/account",
    text: "Account",
    icon: addUserIcon,
  },
  {
    id: uuidv4(),
    link: "/profile/payment-methods",
    text: "Payment methods",
    icon: creditIcon,
  },
  {
    id: uuidv4(),
    link: "/profile/payment-history",
    text: "Payment history",
    icon: cashPaymentIcon,
  },
  {
    id: uuidv4(),
    link: "/profile/addresses",
    text: "Addresses",
    icon: mapsFlagIcon,
  },
  {
    id: uuidv4(),
    link: "/profile/notifications",
    text: "Notifications",
    icon: notIcon,
  },
  {
    id: uuidv4(),
    link: "/profile/password",
    text: "Password",
    icon: passIcon,
  },
];
