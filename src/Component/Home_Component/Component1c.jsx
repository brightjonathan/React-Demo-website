import React from 'react'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HeadsetIcon from '@material-ui/icons/Headset'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import MicNoneIcon from '@material-ui/icons/MicNone'
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Component4 = () => {

const style ={
    width: '10vw',
    height: '10vh',
}

    return (
        <div className="comp_container">
          <div className="comp_ab">
            <div className="head1"><b>All in one simple subscription</b></div>
              <div className="row_z">
                
                <div className="space">
                  <ImportContactsIcon style={style} />
                  <p>Book</p>
                </div>

                <div className="space">
                 <HeadsetIcon style={style} />
                  <p>Audiobooks</p>
                </div>

                <div className="space">
                 < MicNoneIcon style={style} />
                 <p>Magazine</p>
                </div>

                <div className="space">
                 < LibraryBooksIcon style={style} />
                 <p>Podcasts</p>
                 </div>

                <div className="space">
                  < QueueMusicIcon  style={style} />
                  <p>Sheet Music</p>
                </div>

                <div className="space">
                 <AssignmentIcon  style={style} />
                 <p>Documents</p>
                </div>

              </div>


            </div>
            
        </div>
    )
}

export default Component4
