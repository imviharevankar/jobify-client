import { FC } from "react"

interface FormLabelProps {
  label: string,
  required: boolean,
}

const FormLabel: FC<FormLabelProps> = (props: FormLabelProps) => {
  const { label, required } = props;
  return (
    <label>{required ? <>{`${label}`}<span className='error_red'>*</span></> : <>{label}</>}</label>
  )
}

export default FormLabel