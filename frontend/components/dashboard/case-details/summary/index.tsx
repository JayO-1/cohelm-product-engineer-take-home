import Markdown from 'react-markdown';
import AudioPlayer from './audio-player';

export default function Summary({ isMet, summary }) {
    return (
        <div className={`w-[75%] rounded-lg px-4 py-2 ${ isMet ? 'bg-green-100' : 'bg-red-100' }`}>
            <span className="flex justify-between items-center">
                <h2 className={`font-bold ${ isMet ? 'text-green-600' : 'text-red-600' }`}>Summary</h2>
                <AudioPlayer isMet={ isMet } summary={ summary } />
            </span>
            <Markdown className="markdown mt-4 text-md">{summary}</Markdown>
        </div>
    )
}