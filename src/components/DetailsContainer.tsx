interface IDetailsContainer {
  label: string,
  value: string,
  valueClassName?: string,
  labelClassName?: string,
}

const DetailsContainer = (props: IDetailsContainer) => {
  const { label, value, valueClassName = "fs_16 fw_700 font_primary", labelClassName = "fs_16 fw_400 font_primary" } = props;
  return (
    <div>
      <p className={labelClassName}>{label}</p>
      <p className={valueClassName}>{value}</p>
    </div>
  )
}

export default DetailsContainer