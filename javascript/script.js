function showContent(destinationId) {
    const content = {
        destination1: `
        <div class="destination-detail" id="coron-container" style="background-color: #f0f0f0; padding: 20px; border-radius: 10px;">
            <h2>The Pristine Coron</h2>
            <p>Coron, a gem in the northern part of Palawan, captivates visitors with its breathtaking landscapes and crystal-clear lakes. 
            This paradise is perfect for adventurers and tranquility seekers alike. Dive into the world-famous shipwrecks from World War II, or swim in the mesmerizing waters of Kayangan Lake. 
            Coron’s natural beauty and rich history make it a must-visit destination for anyone looking to experience the best of what nature has to offer.</p>
            
            <div class="image-container">
                <img src="images/best-coron-town-in-palawan-island-travel-guide-everything-you-need-to-know-3.jpg" alt="Coron 1">
                <div class="description">
                    <h3>My experience 1:</h3>
                    <p>The chicken wings are delicious here, no other wings can top it.
                    Quite Adventurous, you climb another mountain to explore other islands.
                    </p>
                </div>
            </div>
            <div class="image-container">
                <img src="images/coron-palawan-image-04856.jpg" alt="Coron 2">
                <div class="description">
                    <h3>My Experience 2:</h3>
                    <p>People are very hospitable, street foods are a delicacy, and NOT TOO CROWDED</p>
                </div>
            </div>
            <div class="image-container">
                <img src="images/best-coron-town-in-palawan-island-travel-guide-everything-you-need-to-know-5.jpg" alt="Coron 3">
                <div class="description">
                    <h3>My Experience 3:</h3>
                    <p>The waters are pristine and very clear and deep indeed, and there are floating houses everywhere.</p>
                </div>
            </div>
        </div>
    `,
    

        destination2: 
        `
        <div class="destination-detail" id="elnido-container" style="background-color: #f0f0f0; padding: 20px; border-radius: 10px;">
            <h2>The Jewel of Palawan, El Nido</h2>
            <p>El Nido, located in the northern part of Palawan, Philippines, 
            is a tropical paradise known for its stunning limestone cliffs, crystal-clear waters, and vibrant marine life. This picturesque destination offers a range of activities, from snorkeling and diving in its rich coral reefs to exploring hidden lagoons and pristine beaches. Whether you're cruising through Bacuit Bay or relaxing on the powdery sands of Nacpan Beach, 
            El Nido promises an unforgettable adventure in one of nature's most beautiful settings.</p>
            
            <div class="image-container">
                <img src="images/jules-bassoleil-y-qboGWK7aA-unsplash.webp" alt="Nido 1">
                <div class="description">
                    <h3>Island Hopping:</h3>
                    <p>There are so many Islands u can go to for a cheap price in the trip packages!
                    Not only that, the food is very tasty, a hospitable tour guide, many islands like nacpan, lilo island and more!
                    </p>
                </div>
            </div>
            <div class="image-container">
                <img src="images/nido2.jpg" alt="Nido 2">
                <div class="description">
                    <h3>Big Lagoon:</h3>
                    <p>Experiencing Big Lagoon was incredible. The lagoon is encircled by rock formations reminiscent of Jurassic Park. 
                    The water is so astonishingly blue that it seems unreal. Although we don't usually kayak, we made an exception here, and it was absolutely worth it.
                     This was a standout moment of our to the Palawan.</p>
                </div>
            </div>
            <div class="image-container">
                <img src="images/the-funny-lion-el-nido.jpg" alt="Nido 3">
                <div class="description">
                    <h3>The Funny Lion Hotel:</h3>
                    <p>The Funny Lion is an iconic boutique hotel located right in the heart of El Nido Old Town. 
                    This oasis of fun and excitement offers 49 well-appointed designer rooms with 5-star quality beds and linens. It is approximately 12km from Lio Airport and is within walking distance of several restaurants, bars, dive shops, and boat tour operators, as well as the El Nido bus and ferry terminals.</p>
                </div>
            </div>
        </div>
    `,




        destination3: 
        `
        <div class="destination-detail" id="barton-container" style="background-color: #f0f0f0; padding: 20px; border-radius: 10px;">
            <h2>Port Barton, where Tranquility meets Paradise</h2>
            <p>Port Barton, nestled on the northwest coast of Palawan, is a serene and picturesque village known for its tranquil atmosphere and stunning natural beauty. 
            This hidden gem offers a more laid-back alternative to the more touristy areas of Palawan. With its pristine sandy beaches, crystal-clear waters, 
            and lush rainforest backdrop, Port Barton is perfect for those seeking a peaceful escape.</p>
            
            <div class="image-container">
                <img src="images/bartonnew1.jpg" alt="Barton 1">
                <div class="description">
                    <h3>Secret Paradise Resort and Turtle Sanctuary:</h3>
                    <p>The Secret Paradise Resort & Turtle Sanctuary is set in 2 private coves with a 4.1km coastline, 
                    lined with coconut trees and 4 private white sand beaches with their own waterfalls.
                    </p>
                </div>
            </div>
            <div class="image-container">
                <img src="images/barton2.jpeg" alt="Barton 2">
                <div class="description">
                    <h3>My Experience 1:</h3>
                    <p>We stayed for three nights in a beachside shack, and it was almost perfect in every way. The value for money was exceptional. 
                    The staff were incredibly attentive and friendly. 
                    The peace and quiet at night was absolutely priceless.</p>
                </div>
            </div>
            <div class="image-container">
                <img src="images/barton3.jpeg" alt="Barton 3">
                <div class="description">
                    <h3>My Experience 2:</h3>
                    <p>We went to the snake island, the water there was very fresh, the turtles and the fish could be seen below. The road were very difficult to traverse since the ravines were harsh, overall, 
                    Port Barton was the most difficult to explore but the hard work is very worth it! I'd recommend this place 10/10</p>
                </div>
            </div>
        </div>
    `,
    };

    document.getElementById("dynamicContent").innerHTML = content[destinationId] || "<p>Click on a destination to explore!</p>";
}

window.addEventListener('load', function() {
    const headlineText = document.querySelector('.headline h1');
    headlineText.classList.add('loaded'); 
});

window.addEventListener('load', function() {
    const headerText = document.querySelector('.snake-effect');
    const text = headerText.textContent.trim();
    headerText.innerHTML = '';  
    
    text.split('').forEach(char => {
        const span = document.createElement('span');
        
        if (char === ' ') {
            span.classList.add('space');  
            span.textContent = '\u00A0';  
        } else {
            span.textContent = char;
        }

        headerText.appendChild(span);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".cp-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        
        // Hide the form
        form.style.display = "none";
        
        // Create and show the thank you message
        const thankYouMessage = document.createElement("p");
        thankYouMessage.textContent = "Thank you for filling up the form!";
        thankYouMessage.style.fontSize = "18px";
        thankYouMessage.style.color = "#096093";
        thankYouMessage.style.textAlign = "center";
        thankYouMessage.style.marginTop = "20px";
        
        const formContainer = document.querySelector(".cp-form-container");
        formContainer.appendChild(thankYouMessage);
    });
});





