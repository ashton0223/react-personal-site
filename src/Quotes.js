import React from 'react';
import './Quotes.css';

URL = 'https://personal-website-d1a5b-default-rtdb.firebaseio.com/quotes.json';

function QuoteData(props) {
    const quotes = props.quotes;
    const quoteData = quotes.map((quote) =>
        <div className="quote-card" key={quote.quote}>
            <h3>"{quote.quote}"</h3>
            <p>- {quote.author}</p>
        </div>
    );
    return (
        <>
            {quoteData}
        </>
    );
}

export default class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            quotes: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        quotes: Object.values(result),
                        isLoaded: true
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, quotes, isLoaded } = this.state;
        if (error) {
            return <div className="center">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="center">Loading Quotes</div>;
        } else {
            return (
                <div className="quotes">
                    <QuoteData quotes={quotes} />
                </div>
            );
        }
    }
}