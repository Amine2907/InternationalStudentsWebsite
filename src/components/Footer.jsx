import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor="cyan" className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* University Group Information */}
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='#4169E1' icon='gem' className='me-3' />
                ETUDEX - CESI Campus Nanterre Paris
              </h6>
              <p>Connecting students for better opportunities and experiences at CESI Nanterre Paris.</p>
            </MDBCol>
            {/* Contact Information */}
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                CESI Campus Nanterre, Paris, France
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@etudex.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />
                +33 1 23 45 67 89
              </p>
            </MDBCol>
          </MDBRow>

          {/* Social Media Links */}
          <MDBRow>
            <MDBCol className='text-center'>
              <a href='#!' className='me-4 text-reset'>
                <MDBIcon fab icon='facebook-f' />
              </a>
              <a href='#!' className='me-4 text-reset'>
                <MDBIcon fab icon='twitter' />
              </a>
              <a href='#!' className='me-4 text-reset'>
                <MDBIcon fab icon='linkedin-in' />
              </a>
              <a href='#!' className='me-4 text-reset'>
                <MDBIcon fab icon='instagram' />
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
export default Footer;
