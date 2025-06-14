import React from 'react'
import { MdSportsMotorsports } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";  
import { FaCar } from "react-icons/fa";
import { FaCaravan } from "react-icons/fa";
const Icons_ = () => {
  return (
    <>
        <h1>Icons</h1>
        <div style={{ display: 'flex', gap: '20px', fontSize: '50px' }}>
            <MdSportsMotorsports />
            <MdOutlineSportsMartialArts />
            <IoCarSportSharp />
            <FaCarSide />
            <FaCarAlt />
            <FaCar />
            <FaCaravan />
        </div>
    </>
  )
}

export default Icons_