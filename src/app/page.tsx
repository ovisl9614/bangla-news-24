
import MainNews from "./components/MainNews";
import NewsCard from "./components/NewsCard";
import MostRead from "./components/MostRead";

interface IotherSection {
  curationId: string;
  article: {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  // console.log(sections)

  const otherSections:IotherSection[] = sections.slice(1)
  // console.log(otherSections)

  return (
    <div>
     
     
    <div className="grid gap-5 grid-cols-3 mt-5">
      {/* news secton */}
      <div className="col-span-2">
        <MainNews news={mainNews}/>

        <div className="grid gap-5 mt-5 gap-2">
          {otherSections.map(otherSections => <div className="" key={otherSections.curationId}>

          <h1 className="font-bold border-b-2 pb-1 border-red-700">{otherSections.title}</h1>

          <div className="grid mt-3 grid-cols-3">
              {
              otherSections.articles.map(news => <NewsCard key={news.id} news={news}/>)
            }
          </div>


        </div>)}
        </div>

        </div> 

         {/* most read section */}
      <div className=" col-span-1">
            <MostRead/>
      </div>

    </div>

    </div>
  );
}
