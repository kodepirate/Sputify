import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[3]);
    const [playerState, setPlayerState] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },

    totalTime: {
        second: 0,
        minute: 0
    }
    });

    const play = () => {
        audioRef.current.play();
        setPlayerState(true);   
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayerState(false);
    }


const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playerState,
    setPlayerState,
    time,
    setTime,
    play,
    pause,

}
return (
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
)

}

export default PlayerContextProvider;