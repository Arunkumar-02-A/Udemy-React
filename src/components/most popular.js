//Most Popular

import one from "../image/data 1.jpeg"
import two from "../image/web 2.jpeg"
import three from "../image/ui 3.jpeg"
import four from "../image/java 4.jpeg"

import five from "../image/data 1.jpeg"
import six from "../image/web 2.jpeg"
import seven from "../image/ui 3.jpeg"
import eight from "../image/java 4.jpeg"

function Most() {
    return (
        <div className="most">
            <h1>Most Popular</h1>
            <p>Pick the best fit</p>

            <div className="most-1">
                <div className="most-1__one">
                    <img src={one} alt="data" />
                    <h3>2023 Python Data </h3>
                    <p>Visualisazion Masterclass</p>
                    <p>Col Steele</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="most-1__one">
                    <img src={two} alt="web" />
                    <h3>Web Developoment</h3>
                    <p>Bootcamp 2023</p>
                    <p>Col Steele</p>
                    <p>3.3 ⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="most-1__one">
                    <img src={three} alt="ui" />
                    <h3>Master UI/UX Designing with</h3>
                    <p>Figma</p>
                    <p>Col Steele</p>
                    <p>2.1 ⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="most-1__one">
                    <img src={four} alt="java" />
                    <h3>Basic to Advance Java Core</h3>
                    <p>Training</p>
                    <p>Col Steele</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="most-1__one">
                    <img src={five} alt="web" />
                    <h3>MERN Stack Full-StackDevelopment </h3>
                    <p>Visualisazion Masterclass</p>
                    <p>Col Steele</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="most-1__one">
                    <img src={six} alt="java" />
                    <h3>React Native and Full Stack Web</h3>
                    <p>Development</p>
                    <p>Col Steele</p>
                    <p>3.3 ⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="most-1__one">
                    <img src={seven} alt="ui" />
                    <h3>Complete Python and Flask Full Stack Web</h3>
                    <p>Development</p>
                    <p>Col Steele</p>
                    <p>2.1 ⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>

                <div className="most-1__one">
                    <img src={eight} alt="java" />
                    <h3>Docker and Kubernetes</h3>
                    <p>Training</p>
                    <p>Col Steele</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>499 <del>999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Most