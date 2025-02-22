export default function ScreenCover(props: any) {
    return (
        <div className="absolute w-full min-h-full bg-black opacity-90 z-40 top-0 left-0">
            {props.children}
        </div>
    )
}