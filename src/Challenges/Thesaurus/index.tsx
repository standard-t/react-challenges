import { useState } from "react";
import { Button } from "react-bootstrap";

type Synonym = {
    word: string;
    score: number;
};

export default function Thesaurus() {

    const [word, setWord] = useState("");
    const [synonyms, setSynonyms] = useState<Synonym[]>([]);

    const fetchSynonyms = (word: string) => {
        fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
            .then((response) => response.json())
            .then(setSynonyms);
    }

    const handleFetchSynonyms = (e: React.FormEvent) => {
        e.preventDefault();
        fetchSynonyms(word);

    }

    const handleSynonymClicked = (synonym: string) => {
        setWord(synonym);
        fetchSynonyms(word);
    }

    return (
        <div>
            <h2>Thesaurus Lookup</h2>
            <p>Look up a word or click on a synonym to find its synonyms!</p>
            <form onSubmit={handleFetchSynonyms}>
                <label htmlFor="word-input">Your Word:</label>
                <input value={word} onChange={(e) => setWord(e.target.value)} className="m-2" id="word-input"></input>
                <Button type="submit" className="btn-primary m-2">Search</Button>
            </form>
            <ul>
                {synonyms.map(synonym => <li onClick={() => handleSynonymClicked(synonym.word)} key={synonym.word}>{synonym.word}</li>)}
            </ul>
        </div>
    )
}