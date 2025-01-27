import CapgeminiLogo from "../../public/cap.svg";
import HpLogo from "../../public/hp.svg";
import InspireLogo from "../../public/inspire.svg";
import McDonaldsLogo from "../../public/mcd.svg";
import RaytheonLogo from "../../public/rtx.svg";

interface Company {
  name: string;
  Logo: ImageMetadata;
}

export const companies: Company[] = [
  // {
  //   name: "University of South Carolina",
  //   Logo: UscLogo,
  // },
  {
    name: "Capgemini",
    Logo: CapgeminiLogo,
  },
  {
    name: "Raytheon Technologies",
    Logo: RaytheonLogo,
  },
  {
    name: "HP",
    Logo: HpLogo,
  },
  {
    name: "McDonald's",
    Logo: McDonaldsLogo,
  },
  // {
  //   name: "Walgreens",
  //   Logo: WalgreensLogo,
  // },
  {
    name: "Inspire Brands",
    Logo: InspireLogo,
  },
];
