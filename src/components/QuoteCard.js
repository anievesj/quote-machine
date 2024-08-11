import {useEffect, useState} from 'react'
import Wrapper from "./Wrapper";

export default function QuoteCard() {
    const [quote, setQuote] = useState({});
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [color, setColor] = useState("");
    const [colorIndex, setColorIndex] = useState(0);
    console.log("COLOR: ", color)

    const colors = [ "primary", "success", "danger", "warning", "info"];

    const quotes = [
        {
            author:"Marie Curie",
            text:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."
        },
        {
            author:"Michael Jordan",
            text:`I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.`
        },
        {
            author:"Norman Vaughan",
            text:"Dream big and dare to fail."
        },
        {
            author:"Vincent Van Gogh",
            text:"If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced."
        },
        {
            author:"Vincent Van Gogh",
            text:"I would rather die of passion than of boredom."
        },
        {
            author:"Japanese Proverb",
            text:"Fall seven times and stand up eight."
        },
    ]
        
    const getRandomIndex = (max) => {
        return Math.floor(Math.random() * max)
    }

    const handleNewQuote = () => {
        const randomQuoteIndex = getRandomIndex(quotes.length);
        const randomColorIndex = getRandomIndex(colors.length);
        setQuoteIndex(randomQuoteIndex);
        setColorIndex(randomColorIndex);
        setQuote(quotes[quoteIndex]);
        setColor(colors[colorIndex]);
    }

    useEffect(() => {
        handleNewQuote();   
    }, [])


        return (
            <Wrapper color={color}>
                <div id="text" className={`fs-3 text-${color} text-center`}>"{quote.text}"</div>
                <div id="author" className={`fs-5 text-${color} text-end pt-2`}>- {quote.author}</div>
                <div className="d-flex justify-content-between align-items-center pt-2">
                    <a href="https://x.com/intent/post" id="tweet-quote" className={`bg-${color} text-light px-2 py-1 rounded-3`} target="blank">
                        <i id="twitter-icon" className="bi bi-twitter fs-2"></i>
                    </a>
                    <button id="new-quote" className= {`btn bg-${color} text-light rounded-3 p-2`} onClick={handleNewQuote}>New Quote</button>
                </div>    

            </Wrapper>
        )
        }
