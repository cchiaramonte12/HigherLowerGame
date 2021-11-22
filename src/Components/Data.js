import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Styles/Data.css';


const Data = (props) => {

    let [score, setScore] = useState(0);
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);
    let [title, setTitle] = useState('');
    let [title2, setTitle2] = useState('');

    let info = props.info;

    const [showResults, setShowResults] = useState(false);

    //useEffects to get the two options view count and article title

    useEffect(() => {
        setShowResults(false);
        axios.get('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/'+info.year+'/'+info.month+'/all-days')
        .then(count => {
            const randInt = Math.floor(Math.random() * count.data.items[0].articles.length) + 1;
            setCount(count.data.items[0].articles[randInt].views);
        });
    }, [info]);

    useEffect(() => {
        setShowResults(false);
        axios.get('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/'+info.year+'/'+info.month+'/all-days')
        .then(count2 => {
            const randInt2 = Math.floor(Math.random() * count2.data.items[0].articles.length) +1;
            setCount2(count2.data.items[0].articles[randInt2].views);
        });
    }, [info]);

    useEffect(() => {
        axios.get('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/'+info.year+'/'+info.month+'/all-days')
        .then(title => {
            const randInt = Math.floor(Math.random() * title.data.items[0].articles.length) + 1;
            setTitle(title.data.items[0].articles[randInt].article)
        });
    }, [info]);

    useEffect(() => {
        axios.get('https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/'+info.year+'/'+info.month+'/all-days')
        .then(title2 => {
            const randInt2 = Math.floor(Math.random() * title2.data.items[0].articles.length) +1;
            setTitle2(title2.data.items[0].articles[randInt2].article)
        });
    }, [info]);

    //function to increase score by one if correct
    const increaseScore = () => {
        setScore(score+1);
    }

    //function to set score to zero if wrong
    const lossScore = () => {
        setScore(score-score);
    }

    //function to check if the guess is right or wrong
    const isCorrect = (guess, count, count2) => {
        setShowResults(true);
        if (guess === "Lower" && count > count2) {
            increaseScore();
            return true;
        }
        else if (guess === "Lower" && count < count2) {
            lossScore();
            return false;
        }
        else if (guess === "Higher" && count < count2) {
            increaseScore();
            return true;
        }
        else {
            lossScore();
            return false;
        }
    }

    return (
        <div>
            <div className = 'options'>
            <div className = 'firstOption'>
            <h3>{title.replaceAll('_', ' ')}</h3>
            <div className = 'count'>
            <h3>{showResults ? count : null}</h3>
            </div>
            </div>
            <div className = 'buttons'>
            <button id = 'Higher' onClick={() => {isCorrect("Higher", count, count2)}}> Higher </ button>
            <button id = 'Lower' onClick={() => {isCorrect("Lower", count, count2)}}> Lower </ button>
            </div>
            <div className = 'secondOption'>
            <h3>{title2.replaceAll('_', ' ')}</h3>
            <div className = 'count2'>
            <h3>{showResults ? count2 : null}</h3>
            </div>
            </div>
            </div>
            <div className = 'Score'>
            <h4>Score: {score}</h4> 
            </div>
        </div>
    );
}

export default Data;