import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import React from 'react';
import { useNavigate } from "react-router-dom";
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
function Home() {

    const [apidata, SetData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        getData()

        // fetch("https://fakestoreapi.com/products").then((result) => {
        //     result.json().then((data) => {
        //         SetData(data);
        //         console.log(data);
        //     });
        // });
    }, []);
    function handleclick(pid) {
        const data = { name: pid }
        navigate("/item", {state:data})
    }
    async function getData() {
        const data = await fetch("https://fakestoreapi.com/products")
        const data1 = await data.json()
        SetData(data1)
    }

    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

            {
                apidata.map((item, i) =>
                    <MDBCol key={i}>
                        <MDBCard className='h-100'>
                         <center>
                         <MDBCardImage
                                src={item.image}
                                alt='...'
                                position='top' style={{ width: "100px", height: "100px" }}
                            />
                         </center>
                            <MDBCardBody>
                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                <MDBCardTitle style={{ color: "red" }}>{item.price * 80} Rs</MDBCardTitle>
                                <MDBCardTitle style={{ color: "green" }}>{item.category} </MDBCardTitle>
                           
                                <MDBBtn onClick={()=>handleclick(item.id)}>view details{item.id}</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                )
            }
        </MDBRow>
        // <div>

        //   <Table striped bordered hover variant="dark">
        //     <tbody>
        //       <tr>
        //         <td>Id</td>
        //         <td>Title</td>
        //         <td>Price</td>
        //         <td>Decription</td>
        //         <td>Catogory</td>
        //         <td>Image</td>
        //       </tr>
        //       {apidata.map((item) => (
        //         <tr>
        //           <td>{item.id}</td>
        //           <td>{item.title}</td>
        //           <td>{item.price * 81}Rs</td>
        //           <td>{item.description}</td>
        //           <td>{item.category}</td>
        //           <td>
        //             <img src={item.image} width="200px" height="200px"></img>
        //           </td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </Table>
        // </div>
    );
}
export default Home;