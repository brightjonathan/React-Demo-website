import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Footer = () => {
    return (
        <div className="footer_con">

            <div className="footer_a">
                <div className="row_a">

                 <div className="footer_col">
                     <h4>About</h4>
                     <ul>
                         <li><Link className="link1"><p>About scribd</p></Link></li>
                         <li><Link className="link1"><p>Press</p></Link></li>
                         <li><Link className="link1"><p>Our blog</p></Link></li>
                         <li><Link className="link1"><p>Join our team!</p></Link></li>
                         <li><Link className="link1"><p>Contact us</p></Link></li>
                         <li><Link className="link1"><p>Invite friends</p></Link></li>
                         <li><Link className="link1"><p>Gifts</p></Link></li>
                         <li><Link className="link1"><p>Scribd for enterprise</p></Link></li>
                     </ul>

                 </div>

                 <div className="footer_col">
                     <h4>Support</h4>
                     <ul>
                         <li><Link className="link1"><p>Help / FAQ</p></Link></li>
                         <li><Link className="link1"><p>Accessibility</p></Link></li>
                         <li><Link className="link1"><p>Purchase help</p></Link></li>
                         <li><Link className="link1"><p>AdChoice</p></Link></li>
                         <li><Link className="link1"><p>Publishers</p></Link></li>
                     </ul>

                 </div>

                 <div className="footer_col">
                     <h4>Legal</h4>
                     <ul>
                         <li className="link1"><Link className="link1"><p>Terms</p></Link></li>
                         <li><Link className="link1"><p>Privacy</p></Link></li>
                         <li><Link className="link1"><p>Copyright</p></Link></li>
                     </ul>

                 </div>

                 <div className="footer_col">
                     <h4>Social</h4>
                     <ul>
                         <li className="social"><Link className="link1"><InstagramIcon/></Link></li>
                         <li className="social"><Link className="link1"><TwitterIcon/></Link></li>
                         <li className="social"><Link className="link1"><FacebookIcon/></Link></li>
                         <li className="social"><Link className="link1"><PinterestIcon/></Link></li>
                     </ul>

                 </div>

                </div>
            </div>

        </div>
    )
}

export default Footer
