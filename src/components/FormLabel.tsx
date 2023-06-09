import { FC } from "react"

interface FormLabelProps {
  label: string,
  required: boolean,
}

const FormLabel: FC<FormLabelProps> = (props: FormLabelProps) => {
  const { label, required } = props;
  return (
    <label className="font_primary fs_16 lh_16 mt_16 mb_8 block fw_500 charcoal ">{required ? <>{`${label}`}<span className='error_red'>*</span></> : <>{label}</>}</label>
  )
}

export default FormLabel