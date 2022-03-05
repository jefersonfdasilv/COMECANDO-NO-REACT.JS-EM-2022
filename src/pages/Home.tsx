import { useState } from "react";
import { Tweet } from "../components/Tweet";

export function Home() {

    const [tweets, setTeweets] = useState<string[]>(
        [
            'Tweet 1',
            'Tweet 2',
            'Tweet 3',
        ]);

    function addTweet() {
        const nextID = tweets.length+1;
        setTeweets([...tweets, "New Tweet "+ nextID])
    }
    return (
        <div>
            {
                tweets.map( (tweet: string) => {
                    return <Tweet text={tweet}/>
                })
            }
            <button onClick={addTweet}>Add New</button>
        </div>
    ) 
}