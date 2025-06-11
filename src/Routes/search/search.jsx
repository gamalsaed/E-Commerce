import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "../../Routes Styling/ProductComponent/product.css"
import { Link } from "react-router-dom"
import "../../Routes Styling/searchComponent/search.css"
import { useState, useEffect, useRef, useLayoutEffect, useId, useInsertionEffect } from "react"
import OfferCard from "../../Components/body/offerCard/offerCard"
import OurFeatcher from "../../Components/body/OurFeatcher/ourFeatcher"
import "../../SASS/ourfeatcherd/ourFeatcher.css"
import Pagination from "../../Components/Pagination/pagination"
const Shop = () => {
    const pagiRef = useRef()
    const pagiRefTwo = useRef()
    const [valueOne, setValueOne] = useState(0)
    const [valueTwo, setValueTwo] = useState(990)
    const rangeOneRef = useRef()
    const rangeTwoRef = useRef()
    const track = useRef()
    const [par , setPar] = useState()
    let wrapperRef = useRef()
    let [massage, setMassage] = useState()
    let para = useParams()
    let [selected, setSelected] = useState(12)
    let [AllData, setAllData] = useState([])
    let [AllDataShortCut, setAllDataShourCut] = useState()
    let [lastIndex, setLastIndex] = useState(12)
    let [firstIndex, setFirstIndex] = useState(0)
    let [searchBar, setSearchBar] = useState(false)
    let [pagiChanged, setPagiChange] = useState(null)
    const openSearch = () => {
        setSearchBar(true)
    }
    const closeSearch = () => {
        setSearchBar(false)
    }
    const {Products, categores, sectionSearch, search, activeSlide} = useSelector(state => state.Products)








    const handleClick = (e) => {
        setLastIndex(prev => {
            let last = Math.ceil(selected * +e.target.textContent)
            setFirstIndex(prevo => {
                return last - selected
            })
            return last
        })
        setPagiChange(e.target.textContent)
        window.scrollTo(0, 0)
        for(let i = 0; i < e.target.parentElement.children.length; i++){
            pagiRef.current.children[0].children[i].classList.remove("activ")
            pagiRefTwo.current.children[0].children[i].classList.remove("activ")
        }
        pagiRef.current.children[0].children[+e.target.textContent - 1].classList.add("activ")
        pagiRefTwo.current.children[0].children[+e.target.textContent - 1].classList.add("activ")
        // console.log(pagiRef.current.children[0].children[+e.target.textContent - 1])
    }

    const trackStyle = {
        background:`linear-gradient(to right, #e5e5e5 ${(valueOne / 990) * 100}%, #e5e5e5 ${(valueOne / 990) * 100}%, black ${(valueOne / 990) * 100}%, black ${(valueTwo / 990) * 100}%, black ${(valueTwo / 990) * 100}%,  #e5e5e5 ${(valueTwo / 990) * 100}%)`
    }

    const minGap = 50
    const RangeOne = () =>{
        setValueOne(rangeOneRef.current.value)
        if(parseInt(rangeTwoRef.current.value) -  parseInt(rangeOneRef.current.value) <= minGap ){
            rangeOneRef.current.value = rangeTwoRef.current.value - minGap
            setValueOne(rangeOneRef.current.value)
        }
    }

    const RangeTwo = () =>{
        setValueTwo(rangeTwoRef.current.value)
        if(parseInt(rangeTwoRef.current.value) -  parseInt(rangeOneRef.current.value) <= minGap ){
            rangeTwoRef.current.value = rangeOneRef.current.value - minGap
            setValueTwo(rangeTwoRef.current.value)
        }
    }
    
    const price = () => {
        let alData = []
        for(let i = 0; i < Products.length; i++){
            if(para.section !== "Shopping" && para.section === Products[i].Section[0].trim() && Products[i].CurrentPrice > valueOne && Products[i].CurrentPrice < valueTwo){
                alData.push(Products[i])
            }else if(para.section === "Shopping" && Products[i].CurrentPrice > valueOne && Products[i].CurrentPrice < valueTwo){
                alData.push(Products[i])
            }
        }
        setAllDataShourCut(alData)
        setAllData(alData)
    }

    useEffect(() => {
        setPar(para.section)
        setLastIndex(12)
        setFirstIndex(0)
        let alData = []
        if(Products){
            for(let i = 0; i < Products.length; i++){
                if(para.section !== "Shopping" && para.section === Products[i].Section[0].trim() && Products[i].CurrentPrice > valueOne && Products[i].CurrentPrice < valueTwo){
                    alData.push(Products[i])
                }else if(para.section === "Shopping" && Products[i].CurrentPrice > valueOne && Products[i].CurrentPrice < valueTwo){
                    alData.push(Products[i])
                }
            }
            setAllDataShourCut(alData)
            setAllData(alData)
            if(pagiRef.current.children[0].children.length !== 0){

                for(let i = 0; i < pagiRef.current.children[0].children.length; i++){
                    pagiRef.current.children[0].children[i].classList.remove("activ")
                    pagiRefTwo.current.children[0].children[i].classList.remove("activ")
                }
                pagiRef.current.children[0].children[0].classList.add("activ")
                pagiRefTwo.current.children[0].children[0].classList.add("activ")
            }
        }  
    }, [para.section])

    return (
        <div className="productComponent" >
            <div className="effe" onClick={closeSearch} style={{display: searchBar ? "block" : "none"}} ></div>
            <div className="locationProduct" >
                <h4 className="location" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> <Link  >{ massage === "" ? para.section : "Shop"}</Link> <span class="material-symbols-outlined">chevron_right</span> </h4>
            </div>
            <div className="productComponent-wrapper" >
                <div className="Categories-Of-Product-Component" style={{left: searchBar ? "0" : "-655px"}} >
                    <div className="head-of-filter" >
                        <div className="head-of-filter-wrapp" onClick={closeSearch} >
                            <div className="hide" >HIDE FILTER</div>
                            <div className="filter-icon" ><span class="material-symbols-outlined">close</span></div>
                        </div>
                    </div>
                    <div className="Product-categories" >
                        <h4>Product categories</h4>
                        <ul className="Product-categories-list">
                            <li >
                                <input type="checkbox"  checked={ para.section === "Shopping" ? true : false} readOnly className="check"  name="" id="" />
                                <Link to="/Home/Shop/Shopping" >All</Link>
                            </li>
                            <li>
                                <input type="checkbox"  checked={ para.section === "Accessories" ? true : false} readOnly className="check"  name="" id="" />
                                <Link to="/Home/Shop/Accessories" >Accessories</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Air Conditioner" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Air Conditioner" >Air Conditioner</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Computer & Gaming" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Computer & Gaming" >Computer & Gaming</Link>
                            </li>
                            <li >  
                                <input type="checkbox"  checked={para.section === "Home Appliances" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Home Appliances" >Home Appliances</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Laptops" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Laptops" >Laptops</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Mobiles" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Mobiles" >Mobiles</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Tablets" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Tablets" >Tablets</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Televisions" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Televisions" >Televisions</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Uncategorized" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Uncategorized" >Uncategorized</Link>
                            </li>
                            <li >
                                <input type="checkbox"  checked={para.section === "Washing Machine" ? true : false} readOnly name="" id="" />
                                <Link to="/Home/Shop/Washing Machine" >Washing Machine</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="filter" >
                        <div className="ranges" >
                            <h4>Filter By Price</h4>
                            <div className="filter-range-wrapper" >
                                <div className="filter-range" >
                                    <div  ref={track} style={trackStyle} className="track"></div>
                                    <input max={990} onInput={RangeOne} value={valueOne} ref={rangeOneRef}  type="range" name="" id="" />
                                    <input max={990} onInput={RangeTwo} value={valueTwo} ref={rangeTwoRef}  type="range" name="" id="" />
                                </div>
                            </div>
                            <div className="range-s-three">
                                <div className="range-price" >
                                    <span className="" >Price: ${valueOne} - ${valueTwo} </span>
                                </div>
                                <div className="range-filter" onClick={price} >
                                    FILTER
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Product-categories brands-list" >
                        <h4>Brands</h4>
                        <ul className="Product-categories-list" >
                            <li>
                                <input type="checkbox" checked={false} className="check"  name="" id="" />
                                <Link>Apple</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={false} name="" id="" />
                                <Link>Game Spot</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={false} name="" id="" />
                                <Link>Google</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={false} name="" id="" />
                                <Link>LG</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={false} name="" id="" />
                                <Link>Microsoft</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={false} name="" id="" />
                                <Link>Nokia</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={false} name="" id="" />
                                <Link>Samsung</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={false} name="" id="" />
                                <Link>Xiaomi</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="show" >
                        <OfferCard name={categores[1].Name} key={categores[1].Name} type={categores[1].type} background={categores[1].background} mode={categores[1].mode}  />
                    </div>
                 </div>
                <div className="filter-header" >
                    <div className="filter-left" onClick={openSearch} >
                        <span class="material-symbols-outlined">filter_alt</span>
                        <span>FILTER</span>
                    </div>
                    <div className="filter-right" >
                        Showing all {wrapperRef.current && wrapperRef.current.children.length} results
                    </div>
                </div>
                <div className="Pagination-wrapper top-pagination" ref={pagiRefTwo} >
                    <Pagination par={para.section} setPage={setPagiChange} Page={pagiChanged}  handling={handleClick}  setStart={setFirstIndex} start={firstIndex} end={lastIndex} setEnd={setLastIndex} length={ AllData && Math.ceil(AllData.length / selected)} selected={selected} elements={selected}/>
                </div>
                <div ref={wrapperRef}  className="shop-products-wrapper"  >
                    {AllData.length !== 0  ? AllData.slice(firstIndex, lastIndex).map((card, i) =>{
                            return <OurFeatcher key={i - 100} styling={0} product={card}/> 
                    } 
                    )  : <h1  >No Results</h1>}
                </div>
            </div>
            <div className="Pagination-wrapper" ref={pagiRef} >
                <Pagination par={para.section} setPage={setPagiChange} Page={pagiChanged}  handling={handleClick}  setStart={setFirstIndex} start={firstIndex} end={lastIndex} setEnd={setLastIndex} length={ AllData && Math.ceil(AllData.length / selected)} selected={selected} elements={selected}/>
            </div>
        </div>
    )
}

export default Shop