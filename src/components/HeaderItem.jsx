export default function HeaderItem(props){
    return (
        <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
            <props.Icon />
            <h2 className="">{props.name}</h2>
        </div>
    )
}