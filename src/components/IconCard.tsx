import { FC, ReactNode } from "react";
import { SEARCH } from "../routes/path";
import { useData } from "../context/DataContext";

interface IIconCard {
  icon: ReactNode,
  label: string,
  size?: string,
  footer?: ReactNode,
}
const IconCard: FC<IIconCard> = (props: IIconCard) => {
  const {
    size = "fs_16",
    icon,
    label,
    footer
  } = props;

  const { navigateRouteWithQuery } = useData();

  const handleNavigater = (label: string) => {
    navigateRouteWithQuery(SEARCH, `id=${label}`);
  }

  return (
    <div className="hover_card_primary br_16_0_16_16 m_12 p_24 box_shadow bg_white">
      <span className={size}>
        {icon}
      </span>
      <p className="fs_20 fw_700 lh_20 font_primary mx_12">{label}</p>
      <div onClick={() => handleNavigater(label)} className="pointer">{footer}</div>
    </div>
  )
}

export default IconCard;
