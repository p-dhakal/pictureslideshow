import React from 'react';
import Image1 from '../src/assets/nepal1.jpg';
import Image2 from '../src/assets/nepal2.jpg';
import Image3 from '../src/assets/nepal3.jpg';
import 'bootstrap/dist/css/bootstrap.css'
let images = [Image1, Image2, Image3]
export class App extends React.Component {
    imageLink() {
        return ("../src/assets/nepal1.jpg")
    }
    render() {
        return (
            <div className="container border m-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', borderWidth: '100px' }}>
                <div>
                    <img className="m-2" src={images[0]} style={{ height: 300, width: 350 }} />
                    <div>
                        <h4>Post comment here: </h4>
                        <form>
                            <label>
                                Comment:
                            <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}