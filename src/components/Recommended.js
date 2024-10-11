//Recommended

import one from "../image/data 1.jpeg"
import two from "../image/web 2.jpeg"
import three from "../image/ui 3.jpeg"
import four from "../image/java 4.jpeg"



function Recommended() {
    return (

        <div className="Recommended">
            <h1>Recommended for you</h1>
            <p className="Recommended-one">Pick the best fit</p>

            <div className="Recommended-1">
                <div className="Recommended-1__one">
                    <img src={one} alt="web" />
                    <h3>2023 Python Data </h3>
                    <p>Visualisazion Masterclass</p>
                    <p>Col Steele</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="Recommended-1__one">
                    <img src={two} alt="ui"/>
                    <h3>Web Developoment</h3>
                    <p>Bootcamp 2023</p>
                    <p>Col Steele</p>
                    <p>3.3 ⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="Recommended-1__one">
                    <img src={three} alt="java" />
                    <h3>Master UI/UX Designing with</h3>
                    <p>Figma</p>
                    <p>Col Steele</p>
                    <p>2.1 ⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="Recommended-1__one">
                    <img src={four} alt="web" />
                    <h3>Basic to Advance Java Core</h3>
                    <p>Training</p>
                    <p>Col Steele</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>
            </div>

        </div>
    )
}


export default Recommended