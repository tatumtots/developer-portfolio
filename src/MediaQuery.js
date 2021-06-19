import { useEffect, useState } from "react"

function MediaQuery(query) {
  const [] = useState()

  useEffect(() => {
    const media = window.matchMedia("(query)")
  }, [query])
}

export default MediaQuery
