import world from "../../assets/g002.png"
import ExploreMenu from "./ExploreMenu";
function ExploreHerbs(){
    return(
        <>
            <div className="pb-20 w-full">
                <div className="pt-10 pb-10 flex flex-row ">
                    <div className="w-1/2 ">
                        <img src={world} alt="" className="h-[500px]"/>
                    </div>
                    <div className="flex flex-col justify-center items-center p-3 w-1/2">
                        <h1 className="text-2xl italic font-bold text-start pb-8">Explore the Future of Herbal Education</h1>
                        <ExploreMenu/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExploreHerbs;

//St!ll2025  herbaluser
// mongodb+srv://herbaluser:<db_password>@herbalgarden.n8ivjuf.mongodb.net/?retryWrites=true&w=majority&appName=HerbalGarden