const cardContainer = document.getElementById('HouseCardContainer')
setTimeout(() => {
    const heart = document.querySelectorAll('#heart-icon')
    heart.forEach(heart => {
        heart.addEventListener('click', (e) => {
            likeTheHeart(e);
        });
    });
}, 200);

function likeTheHeart(e) {
    const target = e.target;

    // Check if the target is the path with the ID 'heart'
    const heart = target.closest('#heart');

    if (heart) {
        heart.getAttribute('fill') === 'red' ? heart.setAttribute('fill', 'black') : heart.setAttribute('fill', 'red'); // Change fill color
        console.log('Heart clicked:',);
    } else {
        console.log('Click did not target the heart path.');
    }
}


function Cards(cardImgSrc,cardName, [cardBadges1, cardBadges2,cardBadges3], cardPrice){

    return(
        `
            <div class='card'>
                <img width='430px' src=${cardImgSrc} />

                <div class='cardTitleContainer'>
                    <h3>${cardName}</h3>

                    <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            style="cursor: pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            id="heart-icon">
                            <g filter="url(#filter0_b_5778_289)">
                                <path
                                    d="M4.49609 13.5C5.29609 15.1 8.82943 17.8333 10.4961 19L13.9961 17L17.4961 13.5L18.9961 11L19.4961 7.5L18.9961 5.5L17.9961 4.5L15.4961 3L12.9961 3.5L10.9961 5L10.4961 4.5L8.49609 3L4.49609 4C3.82943 5.16667 2.49609 7.1 2.49609 7.5C2.49609 8 3.49609 11.5 4.49609 13.5Z" 
                                    id="heart"
                                    fill="black"
                                    fill-opacity="0.51"
                                />
                            </g>
                            <path
                                d="M18.789 4.22473C18.2871 3.61752 17.6569 3.12918 16.9436 2.79489C16.2303 2.46059 15.4517 2.28866 14.664 2.29148C13.3161 2.25067 12.0039 2.72799 10.9973 3.62523C9.9907 2.72799 8.67848 2.25067 7.33065 2.29148C6.54291 2.28866 5.76435 2.46059 5.05105 2.79489C4.33776 3.12918 3.70749 3.61752 3.20565 4.22473C2.33207 5.2844 1.41815 7.20298 2.02407 10.3297C2.99115 15.3228 10.2429 19.4203 10.5491 19.5881C10.6855 19.6642 10.8392 19.7041 10.9955 19.7041C11.1517 19.7041 11.3054 19.6642 11.4419 19.5881C11.7499 19.4166 19.0016 15.3191 19.9669 10.3297C20.5765 7.20298 19.6626 5.2844 18.789 4.22473ZM18.1711 9.98139C17.4873 13.5115 12.5171 16.795 10.9973 17.7281C8.85598 16.4356 4.45048 13.1906 3.82807 9.98139C3.35782 7.5559 4.00132 6.14698 4.62465 5.39165C4.95429 4.99391 5.36786 4.67406 5.83571 4.45504C6.30355 4.23601 6.81407 4.12324 7.33065 4.12481C7.88238 4.08343 8.43542 4.18573 8.93585 4.42173C9.43628 4.65772 9.86702 5.01937 10.1861 5.4714C10.2647 5.61617 10.3808 5.73719 10.5222 5.82185C10.6635 5.90651 10.825 5.95172 10.9898 5.95275C11.1545 5.95377 11.3165 5.9106 11.459 5.82771C11.6014 5.74482 11.7189 5.62526 11.7994 5.48148C12.1178 5.02593 12.5495 4.66123 13.0518 4.42333C13.5541 4.18542 14.1098 4.08254 14.664 4.12481C15.1816 4.12229 15.6934 4.23461 16.1624 4.45367C16.6315 4.67273 17.0461 4.99308 17.3764 5.39165C17.9979 6.14698 18.6414 7.5559 18.1711 9.98139Z" 
                                fill="white"
                            />
                            <defs>
                                <filter id="filter0_b_5778_289" x="-21.5039" y="-21" width="65" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5778_289" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5778_289" result="shape" />
                                </filter>
                            </defs>
                    </svg>


                </div>
                <div class='badgeContainer'>
                    <div class='cardBadge'>${cardBadges1}</div>
                    <div class='cardBadge'>${cardBadges2}</div>
                    <div class='cardBadge'>${cardBadges3}</div>
                </div>

                <p>From NGN${cardPrice}/year</p>
            </div>

        `
    )
}

cardContainer.innerHTML += Cards('/cardImg1.png', 'Lillian Pepple Estate', ['Duplexes','Bungalows', 'Self-Contains'], '1,500,000')
cardContainer.innerHTML += Cards('/cardImg2.png', 'Naanchin Homes', ['flats','Bungalows', 'Accommodations'], '500,000')
cardContainer.innerHTML += Cards('/cardImg3.png', 'Horeb Accomodations', ['Mansions','Bungalows', 'Office spaces'], '2,500,000')
