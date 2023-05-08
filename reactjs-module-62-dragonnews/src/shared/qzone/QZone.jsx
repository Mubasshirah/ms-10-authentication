import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import bg from '../../assets/bg.png'
import { Button } from 'react-bootstrap';
const QZone = () => {
    return (
        <div>
            <h5 className='mt-3'>Q-Zone</h5>
            <div className='p-4 bg-secondary' >
                <img src={qzone1} alt="" className='img-fluid mb-3'/>
                <img src={qzone2} alt="" className='img-fluid mb-3'/>
                <img src={qzone3} alt="" className='img-fluid'/>
            </div>
            <div className='mt-3 position-relative'>
                <div className=''>
                       <img src={bg} alt="" style={{width:'100%'}}/>
                </div>
                <div className='position-absolute top-50 start-50 translate-middle text-light text-center'>
                       <h2>Create an  </h2>
                       <h2>Amazing</h2>
                       <h2>Newspaper</h2>
                       <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                       <Button variant="danger">Learn more</Button>
                </div>
            </div>
        </div>
    );
};

export default QZone;