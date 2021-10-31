import React from 'react'
import { Link, useHistory } from "react-router-dom"

const Component1a = () => {
     let history = useHistory()

    return (
        <div className="comp_1a">

         <div className="head0"><b>THE BEST BOOKS ARE WAITING FOR YOU</b></div>
         <div className="link"><Link  to="/Books" className="link0"><b>(view all)</b></Link></div>
            
            <div className="comp_bc">

                <div className="row_yz">

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book1a.png" alt="" onClick={()=>history.push("/Books")} />
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book3c.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book3d.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book1b.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book1c.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book1d.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book2a.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book2b.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book2c.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book2d.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book3a.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                    <div className="responsive">
                      <div className="gallery">
                      <img src="images/book3b.png" alt=""onClick={()=>history.push("/Books")}/>
                      </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Component1a

