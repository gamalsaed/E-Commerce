import "../../../SASS/Who/Who.css"

const WhoWeAre = () => {
    return (
            <div className="WhoWrapper" >
                <div className="Who-S-One" >
                    <h2>Who we are</h2>
                    <p className="p-1" >Online Shopping on Technocy, Largest Online Mall.</p>
                    <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <u> Ut enim ad minim veniam,</u> quis nostrud exercitation voluptatem accusantium doloremque laudantiumullamco</p>
                    <button className="button-who" >Contact Us</button>
                </div>
                <div className="Who-S-Two" ><img src="https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/08/h1_weare.jpg" alt="" /></div>
                <div className="Who-S-Three" >
                    <div className="Stores" >
                        <div className="stores-number" >25<sup>+</sup> </div>
                        <div className="stores-info" >
                            <div className="stor" >Stores</div>
                            <div>spectacular world of electronics</div>
                        </div>
                        <hr />
                    </div>
                    <div className="Stores" >
                        <div className="stores-number" >115<sup>+</sup> </div>
                        <div className="stores-info" >
                            <div className="stor" >Brands</div>
                            <div>of good quality and repute</div>
                        </div>
                    </div>
                    <div className="Stores" >
                        <div className="stores-number" >90<sup>%</sup> </div>
                        <div className="stores-info" >
                            <div className="stor" >Happy Clients</div>
                            <div>we love clients</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WhoWeAre
