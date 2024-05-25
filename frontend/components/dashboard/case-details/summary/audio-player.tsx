'use client'

import { useState, useEffect } from 'react';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';

export default function AudioPlayer({ isMet, summary }) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    
    let utterance;
    let synthesis;

    if (typeof window !== 'undefined') {
        synthesis = window.speechSynthesis;
    }

    const toggleSpeech = () => {
        if (isSpeaking) {
            synthesis.cancel();
        } else if (summary !== '') {
            utterance = new SpeechSynthesisUtterance(summary);
            
            utterance.onstart = () => {
                setIsSpeaking(true);
            };

            utterance.onend = () => {
                setIsSpeaking(false);
            };

            utterance.onerror = () => {
                setIsSpeaking(false);
            };

            synthesis.speak(utterance);
        }
    };

    useEffect(() => {
        return () => {
            if (isSpeaking) {
                synthesis.cancel();
            }
        };
    }, [isSpeaking, synthesis]);

    return (
        <button onClick={ toggleSpeech }>
            {isSpeaking ? (
                <MdVolumeOff className={`text-lg ${isMet ? 'text-green-600' : 'text-red-600'}`} />
            ) : (
                <MdVolumeUp className={`text-lg ${isMet ? 'text-green-600' : 'text-red-600'}`} />
            )}
        </button>
    )
}