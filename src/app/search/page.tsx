import SearchBar from "@/components/SearchBar";
import CardCategory from "@/components/CardCategory";
import { dataCategory } from "@/testingData";
import CardCategoryFirst from "@/components/CardCategoryFirst";
const Search = () => {
    return ( 
        <>
            <SearchBar />
            
            <div className="mt-4 mx-4">
                <div className="flex flex-wrap gap-4 justify-center ">
                    {
                        dataCategory.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    <CardCategory index={index} data={item}/>
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