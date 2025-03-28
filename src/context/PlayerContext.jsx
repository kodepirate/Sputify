import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playerState, setPlayerState] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        }
    })  ;

    const play = () => {
        audioRef.current.play();
        setPlayerState(true);   
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayerState(false);
    }
    const playwithId = async(id) => {
      await  setTrack(songsData[id]);
         await audioRef.current.play();
          setPlayerState(true);
    }

    const previousTrack = async () => {
        if(track.id>0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayerState(true);
        }
    }
    const nextTrack = async () => {
        if(track.id<songsData.length-1){
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayerState(true);
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
        // seekBar.current.style.width = (e.nativeEvent.offsetX / seekBg.current.clientWidth) * 100 + "%";
    }



useEffect(() => {
setTimeout(() => {
    audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =(Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
        seekBar.current.style.transition = "width 0.1s ease-in-out";
        setTime({
            currentTime: {
                second: Math.floor(audioRef.current.currentTime % 60),
                minute: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
                second: Math.floor(audioRef.current.duration % 60),
                minute: Math.floor(audioRef.current.duration / 60),
            }
        })
    }
}, 1000);
    },[audioRef])


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
    playwithId,
    previousTrack,
    nextTrack,
    seekSong,

}
return (
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
)

}


export default PlayerContextProvider;