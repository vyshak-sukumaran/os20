import React from 'react'

const useDelayUnmount = (isMounted, delayTime) => {
    const [showComponent, setShowComponent] = React.useState(false)
    React.useEffect(() => {
        let timeOut;
        if (isMounted && !showComponent) {
            setShowComponent(true)
        } 
        else if (!isMounted && showComponent) {
            timeOut = setTimeout(() => setShowComponent(false), delayTime)
        }
        return () => clearTimeout(timeOut)
    }, [isMounted, delayTime, showComponent])
  return showComponent
}

export default useDelayUnmount