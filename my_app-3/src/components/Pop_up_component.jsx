import React from 'react'
import {createPortal} from 'react-dom';

const Pop_up_component = ({copied}) => {

  return createPortal(
    <section>
        {copied&&(
            <div>Copied_to_the ClipBoard</div>
        )}
    </section>,document.querySelector("#popup")
  )
}

export default Pop_up_component