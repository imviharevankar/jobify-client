import { FC, ReactNode } from "react";

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
  } = props
  return (
    <div className="hover_card_primary br_16_0_16_16 m_12 p_16 box_shadow bg_white">
      <div className={size}>
        {icon}
      </div>
      <p className="fs_20 fw_700 lh_20 font_primary mx_12">{label}</p>
      {footer}
    </div>
  )
}

export default IconCard;
