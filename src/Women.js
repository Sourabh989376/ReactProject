import { useEffect, useState } from "react"
import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';


function Women() {
    const [apidata, setData] = useState([])
    useEffect(() => {
        getData()
        // fetch("https://fakestoreapi.com/products").then((result)=>{
        //     result.json().then((data)=>{
        //         console.log(data)
        //    })
        //    })
    }, [])

    async function getData() {
        const data = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        const data1 = await data.json()

        setData(data1)
    }
    return (
        <div>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                {
                    apidata.map((item, i) =>
                        <MDBCol key={i}>
                            <MDBCard>
                                <center>
                                    <MDBCardImage
                                        src={item.image}
                                        alt='...'
                                        position='top' style={{ width: "100px", height: "100px" }}
                                    />
                                </center>
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardTitle style={{ color: "green" }}>{item.price * 80}Rs</MDBCardTitle>
                                    <MDBCardTitle style={{ color: "red" }}>{item.category}</MDBCardTitle>

                                    <MDBCardText>
                                        {item.description.slice(0, 200)}
                                    </MDBCardText>
                                    <MDBBtn>view details</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>)
                }
            </MDBRow>
        </div>
    )

} export default Women