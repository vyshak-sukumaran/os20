import React from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState({
        width: undefined,
        height: undefined,
    });
    
    React.useEffect(() => {

        const changeWindowSize = () => {
            setWindowSize({ 
                width: window.innerWidth, 
                height: window.innerHeight 
            });
        }

        window.addEventListener("resize", changeWindowSize);

        changeWindowSize()

        return () => {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);

    return windowSize;
}

export default useWindowSize