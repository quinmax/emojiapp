import { PureComponent } from "react";
import EmojiResultsRow from "./EmojiresultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent
{
    render() 
    {
        const {emojiData} = this.props;
        console.log('XXX: ' + emojiData.length);

        return (
            <div className="component-emoji-results">
                { emojiData.map((emoji) => 
                (
                    <EmojiResultsRow  key={emoji.title} symbol = {emoji.symbol} title={emoji.title} />
                ))}
            </div>
        );
    }
}