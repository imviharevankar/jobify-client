interface ISkillsListing {
  skills?: string[],
}
const SkillsListing = (props: ISkillsListing) => {
  const { skills = [] } = props;
  return (
    <div className="flex mt_12 g_16 col_center align_center">
      {
        skills?.map((ele: any) => {
          return (
            <p className="px_1_py_12 bg_gray br_8 fs_12">{ele}</p>
          )
        })
      }
    </div>
  )
}

export default SkillsListing