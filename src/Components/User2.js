import Images from "./Images"

function User2({props}) {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center flex-col mt-[10rem] bg-violet-500 p-12 w-[28rem] rounded-3xl font-serif h-[28rem] space-y-5 text-white">
                <img src={props.image} alt="Profile" className="h-[4rem] w-[4rem] rounded-full ring-4 ring-white" />
                <h3 className="text-[1.2rem] opacity-60">{props.designation}</h3>
                <h1 className="text-[2rem] font-bold">{props.name}</h1>
                <p>{props.description}</p>
                <Images />
            </div>
        </div>
    )
}

export default User2