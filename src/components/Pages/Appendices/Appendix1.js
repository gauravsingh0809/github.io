import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import ImageComponent from "material-ui-image";
import { getFirebase } from "../../../firebase/firebase";


const Appendix1 = () => {

    const ctx = useContext(MyContext)

    const [allImages, setImages] = useState({});
    const [allImagesKan, setImagesKan] = useState({});


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
                        <ImageComponent src={allImages["appendix1-1.png"]} aspectRatio="1/0.8" />
                        <ImageComponent src={allImages["appendix1-1_1.png"]} aspectRatio="1/1.6" />
                        {/* <Appendix1_2 /> */}
                        <ImageComponent src={allImages["appendix1-2.png"]} aspectRatio="1/0.8" />
                        <ImageComponent src={allImages["appendix1-3.png"]} aspectRatio="1/0.8" />
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
                        {Object.keys(allImagesKan).sort().map((i) => <ImageComponent src={allImagesKan[i]} />)}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix1
