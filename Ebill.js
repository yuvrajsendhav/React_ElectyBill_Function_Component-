import { useState } from "react"

let Ebill = () =>
{
    var[u, setU] = useState(0);
    var[p, setP] = useState(0);
    var[t, setT] = useState(0);

    let Unit = (e) =>
    {
        setU(e.target.value);
    }
    let Price = (e) =>
    {
        setP(e.target.value);
    }
    let Calculate = (e) =>
    {
        setT(u*p);
        e.preventDefault();
    }
    return(
        <div>
            <input type="text" onChange= { (e) => Unit (e) } /><br/>
            <input type="text" onChange= { (e) => Price (e) } /><br/>
            <input type="button" value="Check" onClick = { (e) => Calculate (e) } /><br/>
            <p>{t}</p>
        </div>
    )
}
export default Ebill;