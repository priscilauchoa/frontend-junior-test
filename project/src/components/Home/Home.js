// import React, { useState } from 'react';
import './Home.css';

function Home() {
    // const [edit, setEdit] = useState(true);
    const handleEdit = () => {
        console.log('add clicked');
        // setEdit(false);
    };

    return (
        <>
            <table>
                <tr>
                    <th>Tokens</th>
                    <th>Balance</th>
                </tr>
                <tr>
                    <td>KLV</td>
                    <td>10,250.50</td>
                </tr>
                <tr>
                    <td>DVK</td>
                    <td>50,250.71</td>
                </tr>
                <tr>
                    <td>KFI</td>
                    <td>10</td>
                </tr>
            </table>
        </>
    );
}

export default Home;
