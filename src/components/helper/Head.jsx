import React from 'react'

const Head = props => {
  React.useEffect(() => {
    document.title = `${props.title ? props.title + ' | ' : ''}Dogs`
    document
      .querySelector('meta[name=description]')
      ?.setAttribute('content', props.dscription || '')
  }, [props])
  return <></>
}

export default Head
