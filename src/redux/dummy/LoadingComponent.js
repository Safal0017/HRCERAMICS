import React from 'react';
import LoaderGif from '../assets/loader.gif'

export const Loading = () => {
    return(
        <div class="loader-container">
                        <div className="loader">
                             <img src={LoaderGif} />
                        </div>
                    </div>
        // <div className="col-12">
        //     {/* <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span> */}
        //     <p>Loading . . .</p>
        // </div>
    );
};