import SearchBar from "@/components/SearchBar";
import CardCategory from "@/components/CardCategory";
import { dataCategory } from "@/testingData";
const Search = () => {
    return ( 
        <>
            <SearchBar/>
            <div className="mt-4 mx-4">
                <div className="flex flex-wrap gap-2 justify-center ">
                    {
                        dataCategory.map((item:any,index:number) => {
                            return (
                                <div key={index}>
                                    <CardCategory data={item}/>
                                </div>
                            )
                        })
                    }
                </div>    
            </div>
        </>
     );
}
 
export default Search ;