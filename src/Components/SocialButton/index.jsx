// eslint-disable-next-line react/prop-types
function SocialButton({to,buttonStyle,Icon,Name,iconStyle,nameStyle,color}) {
  return (
    <a href={to}  target="_blank" >
      <button className={`py-2 px-4 rounded-xl border border-solid shadow-md flex gap-2 items-center justify-center gap-x-3 transition-shadow ${buttonStyle} sm:hover:shadow-${color} active:translate-y-[6px] active:transition-transform`}>
        <Icon className={iconStyle}/>
        <p className={nameStyle}>{Name}</p>
      </button>
    </a>
  )
}
export {SocialButton}
