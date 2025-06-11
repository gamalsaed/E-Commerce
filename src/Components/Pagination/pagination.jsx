import { useRef } from "react"
import { useEffect, useInsertionEffect, useState } from "react"



const Pagination = (props) => {
    let [pages, setPage] = useState(null)
    const pagiRef = useRef()
    useInsertionEffect(() => {
    }, [props.data])
    useEffect(() => {
        console.log(pages)
        setPage(prev => {
            let arr =[]
            for(let i = 0; i < props.length; i++){
                arr.push(i)
            }
            return arr
        })
    }, [props])

        return (
        <div className="Pagination" ref={pagiRef} >
            {pages !== null && pages.length !== 1 && pages.map(page => <span className={page === 0 ? "activ" : "" } onClick={props.handling} >{page + 1}</span>)}
        </div>
    )
}

export default Pagination
