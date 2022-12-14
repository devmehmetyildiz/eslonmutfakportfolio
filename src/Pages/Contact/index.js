import React, { useEffect, useState } from 'react'
import Map from "./Map"
import Googlemap from "./Googlemap"
import Title from '../Common/Title'
import ThreeDotsWave from '../Common/ThreeDotsWave'
import { motion } from 'framer-motion'
import img from '../../assets/img'
import Loader from '../Common/Loader'

export default function Index(props) {
    const { bodyfunc } = props
    const [PageOpened, setPageOpened] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setPageOpened(true)
            bodyfunc(true)
        }, 2000);
    }, [])
    return (
        <React.Fragment>
            {PageOpened ?
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <Title  title={"İletişim"} isImg={false} />
                    <Googlemap />
                    <Map />
                </motion.div>
                : <Loader />
            }
        </React.Fragment >
    )
}
