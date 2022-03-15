import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import ImageComponent from "material-ui-image";
import { getFirebase } from "../../../firebase/firebase";

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import AppendixOne from './../../../AppendixOne.pdf';


const Appendix1 = () => {

    const ctx = useContext(MyContext)

    const [allImages, setImages] = useState({});
    const [allImagesKan, setImagesKan] = useState({});

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    useEffect(() => {
        const getImages = getFirebase()
            .storage()
            .ref('/images/appendices/Appendix1')
            .listAll().then(
                function (res) {
                    res.items.forEach((i) => {
                        i.getDownloadURL().then((res) => {
                            setImages((allImages) => ({ ...allImages, [i.name]: res }));
                        });
                    });
                })
        return getImages
    }, [])

    useEffect(() => {
        const getImages = getFirebase()
            .storage()
            .ref('/images/appendiceskan/Appendix1')
            .listAll().then(
                function (res) {
                    res.items.forEach((i) => {
                        i.getDownloadURL().then((res) => {
                            setImagesKan((allImagesKan) => ({ ...allImagesKan, [i.name]: res }));
                        });
                    });
                })
        return getImages
    }, [])

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/Quality/recommendations" forward="/appendices/appendix-2" />

                        <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                                type="application/pdf" />
                        </object>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/Quality/recommendations" forward="/appendices/appendix-2" />
                        <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                                type="application/pdf" />
                        </object>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix1
