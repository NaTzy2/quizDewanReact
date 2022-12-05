import React, { useState } from "react";
import './Quiz.css'

import Input from "./component/input/Input";
import { getRoles } from "@testing-library/react";

const Quiz = ()=>{
    const [mth, setMth] = useState(0)
    const [scnce, setScnce] = useState(0)
    const [phys, setPhys] = useState(0)
    const [chem, setChem] = useState(0)
    const [bio, setBio] = useState(0)

    const [sum, setSum] = useState(0)
    const [ttl, setTtl] = useState(0)
    const [grd, setGrd] = useState('')

    const changeMth = (e)=>{
        setMth(e.target.value)
    }
    const changeScnce = (e)=>{
        setScnce(e.target.value)
    }
    const changePhys = (e)=>{
        setPhys(e.target.value)
    }
    const changeChem = (e)=>{
        setChem(e.target.value)
    }
    const changeBio = (e)=>{
        setBio(e.target.value)
    }

    const getRes = (e)=>{
        e.preventDefault()

        setSum(mth + scnce + phys + chem + bio)

        setTtl(sum / 5)


        if(ttl > 80.01 ){
            setGrd('A+')
        }else if(ttl >= 72.01 && ttl <= 80){
            setGrd('A')
        }else if(ttl >= 64.01 && ttl <= 72){
            setGrd('B+')
        }else if(ttl >= 56.01 && ttl <= 64){
            setGrd('B')
        }else if(ttl >= 48.01 && ttl <= 56){
            setGrd('C')
        }else if(ttl >= 40.01 && ttl <= 48){
            setGrd('D')
        }else if(ttl >= 0 && ttl <= 40){
            setGrd('F')
        }
    }

    return(
        <div>
            <h1>Quiz grading</h1>
            <form onSubmit={getRes}>
                <h4 className="header">Cek nilai</h4>
                <table>
                    <tr>
                        <td>Input nilai Matematika</td>
                        <td>:</td>
                        <td>
                            <Input meas = {changeMth}/><br/>
                        </td>
                    </tr>

                    <tr>
                        <td>Input nilai Saintek</td>
                        <td>:</td>
                        <td>
                            <Input meas = {changeScnce}/><br/>
                        </td>
                    </tr>

                    <tr>
                        <td>Input nilai Fisika</td>
                        <td>:</td>
                        <td>
                            <Input meas = {changePhys}/><br/>
                        </td>
                    </tr>

                    <tr>
                        <td>Input nilai Kimia</td>
                        <td>:</td>
                        <td>
                            <Input meas = {changeChem}/><br/>
                        </td>
                    </tr>

                    <tr>
                        <td>Input nilai Biologi</td>
                        <td>:</td>
                        <td>
                            <Input meas = {changeBio}/><br/>
                        </td>
                    </tr>

                    <button type="submit">Submit</button>
                </table>
                <h4 className="footer">Nilai anda: {grd}</h4>
            </form>
        </div>
    )
}

export default Quiz