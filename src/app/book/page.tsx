import { Loadingcomponent } from "@/components/LoadingComponent";
import SearchBar from '@/components/SearchBar'
import TabBooks from "@/components/TabBooks";
import NovelCard from "@/components/novel/NovelCard";
import NovelSlider from "@/components/novel/NovelSlider";
import NovelTopBanner from "@/components/novel/NovelTopBanner";

const Book = () => {
    return ( 
        <>
            <NovelTopBanner/>
            <NovelCard/>
            <NovelSlider/>
        </>
     );
}
 
export default Book;