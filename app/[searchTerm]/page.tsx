import getWikiResults from "@/lib/getWikiResults"
import { json } from "stream/consumers"
import Item from "./components/Item"

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll("%20", " ") // to make it more human readable
    if(!data.query?.pages) {
        return {
            title: `${displayTerm} not found!!`
        }
    }

    return {
        title: displayTerm,
        descriptions: `Search results for ${searchTerm}`
    }
}

export default async function Page({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages
    const content = (
        <main className="bg-slate-600 mx-auto max-w-lg py-1 min-h-screen">
            {
                results
                    ? Object.values(results).map((result) => {
                        return (
                            // <p className="p-2 text-xl" key={idx}>{JSON.stringify(result)}</p>
                            <Item key={result.pageid} result={result} />
                        )
                    })
                    :  <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
            }
        </main>
    )
    
    return content

    // return (
    //     <div>Page</div>
    // )
}