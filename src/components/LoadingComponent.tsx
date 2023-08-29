export const Loadingcomponent = () => {
    return (
        <div className="flex h-full mt-72 flex-col justify-center items-center">
            <div className="loading-screen">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="text-slate-300 font-semibold text-xl">Memuat</div>
        </div>    
    );
};