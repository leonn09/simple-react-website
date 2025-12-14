const Card = ({children}) => {


    return (
        <div className="flex justify-center items-center w-75 max-w-sm p-6 border-2 rounded-xl shadow-xs">
            <p className="text-md font-semibold">{children}</p>
        </div>
    )
}

export default Card;