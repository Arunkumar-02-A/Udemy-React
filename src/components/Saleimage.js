//Sale Image

import one from "../image/sale-image.jpg"

function SaleImage()
{
    return (
        <div class="image-title">
            <img src={one} alt="sale-image" />
            <div class="sale-image__1">
                <h1>Udemy Flash Sale! 24 hours to save.</h1>
                <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    );
}

export default SaleImage