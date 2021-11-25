
import * as React from 'react';
import coverBG from './images/cover-bg.jpg'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
function PatientForm() {
  const [open, setOpen] = React.useState(false);
  const [more, setmore] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMoreOpen = () => {
    setmore(true);
  };

  const handleMoreClose = () => {
    setmore(false);
  };
  return (
    <section className="cover bg-white-100 text-white-600 body-font relative cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-4 lg:px-8 xl:px-40 2xl:px-30 overflow-hidden py-20 flex
      items-center min-h-screen">
      <div className="h-full absolute top-0 left-0 z-0" style={{backgroundColor: "green"}}>
        <img  alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-white text-4xl md:text-5xl xl:text-5xl font-bold leading-tight">Informed Consent and Authorization </h1>
          
          <div className="p-2 w-full ">
            <a className="inline-block px-4 py-2 text-sm text-aqua xl:text-xl focus:outline-none inline-block  px-4 py-2 text-white  text-center md:text-white  focus:outline-none hover:bg-transparent rounded text-lg "
              href="#PatientForm" onClick={handleMoreOpen}>(click here for more information)</a>
          </div>
          <Dialog
            open={more}
            onClose={handleMoreClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

            <DialogContent>
              <DialogContentText id="alert-dialog-description text-sm">
                <b>SUMMARY</b>
                <br />
                You are being participate in this Health Related Quality of life research to study the impact of coronavirus disease 2019 (covid-19) pandamic on the sustainability of quality of life(QQL).The purpose of this electronic
                concentform is to help you decide if you want to be in the research study. Please read this form carefully. To be in a research study you must give your agreement to do so by agreeing to this informed concent.
                <br/>
                <br/>
                <b>SURVEYS</b>
                <br/>
                36-item Short Form Survey(SF-36): SF-36 is a set of generic, coherent,and easily administered quality-of-life measures.
            These measures rely upon patient self-reporting and are now widely utilized by managed care organization by Medicare for routine monitoring and assessment of care outcomes in adult patients.
                <br/>
                <br/>
                <b>RESEARCH CONSENT and HIPAA AUTHORIZATION SIGNATURE</b>
                <br/>
                By clicking the "i agree to participate" button below, i agree that: i have read the consent and HIPAA authorization form. iagree to allow my personal information to be used in the survey study, i authorize the use and disclosure of my health information to the
            parties listed in the HIPAA Authorization section of this concent for the purposes described above. I understand that refusing to participate will cause me no penalty. I understand what may happen if i withdraw from the study. I understand the study's sponsor, regulatory authorities in the US and aborad and the Institutional Review
            Board may have access to my medical records. I have not given up any of my legal rights.
              </DialogContentText>
              <div className="p-2 w-full text-center">
            <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 text-center md:text-white border border-white rounded focus:outline-none hover:bg-indigo-600 rounded text-lg"
                href="#PatientForm" style={{ margiLeft: "500px" }} onClick={handleClose}>Ok</a>
            </div>
            </DialogContent>     
          </Dialog>
          <div style={{ marginLeft: "90%" }} className="inline-block font-semibold px-4 py-2 text-white  md:bg-transparent md:text-white  rounded">

          </div>
        </div>
        <div className=" mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="text-blue-100 text-xl md:text-1xl leading-snug mt-4">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="text-blue-100 text-xl md:text-1xl leading-snug mt-4">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="message" className="text-blue-100 text-xl md:text-1xl leading-snug mt-4">Date Of Birth</label>
                <input type="date" id="message" name="message" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

            </div>
            <br/>
            <br/>
        <FormGroup>
          <FormControlLabel className="text-white" control={<Checkbox defaultUnchecked />} label="I agree to participate in this research survey study." />
          <FormControlLabel className="text-white" control={<Checkbox defaultUnchecked />} label="I agree to allow my personal information to be used in the survey study." />
        </FormGroup>
        <br/>
        <br/>
            <div className="p-2 w-full text-center">
            <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 text-center md:text-white border border-white rounded focus:outline-none hover:bg-indigo-600 rounded text-lg"
                href="#survey" style={{ margiLeft: "500px" }} onClick={handleClickOpen}>I agree</a>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >

              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Have you received a confirmed diagnosis for coronavirus (COVID-19) by a coronavirus (COVID-19) test or from a diagnosis by a health care professional?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Yes</Button>
                <Button onClick={handleClose} autoFocus>
                  No
                </Button>
              </DialogActions>
            </Dialog>
            <div style={{ marginLeft: "90%" }} className="inline-block font-semibold px-4 py-2 text-white  md:bg-transparent md:text-white  rounded">

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default PatientForm