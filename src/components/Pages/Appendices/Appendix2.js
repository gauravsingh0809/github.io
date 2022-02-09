import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import ImageComponent from "material-ui-image";
import { getFirebase } from "../../../firebase/firebase";


const Appendix2 = () => {

    const ctx = useContext(MyContext)

    const [allImages, setImages] = useState({});
    const [allImagesKan, setImagesKan] = useState({});

    useEffect(() => {
        const getImages = getFirebase()
            .storage()
            .ref('/images/appendices/Appendix2')
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
            .ref('/images/appendiceskan/Appendix2')
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

    console.log(allImagesKan)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-1" forward="/appendices/appendix-3" />
                        {Object.keys(allImages).sort().map((i) => <ImageComponent src={allImages[i]} />)}
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
                        <FloatingActionButtons back="/appendices/appendix-1" forward="/appendices/appendix-3" />
                        {Object.keys(allImagesKan).sort().map((i) => <ImageComponent src={allImagesKan[i]} />)}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix2
