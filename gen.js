//>> Image Info

const placeholder = "Norbi quis pulvinar est, at viverra nunc. Cras suscipit, sem ultricies pulvinar fringilla, magna ante molestie elit, et pulvinar nunc nibh vel turpis. Nam in accumsan quam, vel condimentum tortor. Maecenas mollis accumsan orci, a tincidunt augue viverra hendrerit. Nulla et cursus erat, quis suscipit massa. Aliquam nisl erat, lobortis quis facilisis et, aliquet nec elit. Pellentesque nulla nisl, venenatis vel hendrerit vel, hendrerit sed eros."

let imgList = [
    {
        iTitle : "Portrait of Adeline Ravoux I",
        iAuthor : "Vincent van Gogh",
        iYear : "1890",
        iMedium : "Olej na płótnie",
        iDimensions : "52.0 x 52.0 cm",
        iInfo : placeholder,
        iSrcPath : "img/adeline-ravoux.jpg"
    },
    {
        iTitle : "Farmhouse in Provence",
        iAuthor : "Vincent van Gogh",
        iYear : "1898",
        iMedium : "Olej na płótnie",
        iDimensions : "46.1 cm x 60.9 cm",
        iInfo : placeholder,
        iSrcPath : "img/farmhouse in provence.jpg"
    },
    {
        iTitle : "Bedroom in Arles",
        iAuthor : "Vincent van Gogh",
        iYear : "1888",
        iMedium : "Olej na płótnie",
        iDimensions : "72.0 cm x 90.0 cm",
        iInfo : placeholder,
        iSrcPath : "img/the bedroom.jpg"
    },
    {
        iTitle : "The Church at Auvers",
        iAuthor : "Vincent van Gogh",
        iYear : "1890",
        iMedium : "Olej na płótnie",
        iDimensions : "74.0 cm x 94.0 cm",
        iInfo : placeholder,
        iSrcPath : "img/the church at auvers.jpg"
    },
    {
        iTitle : "Wheatfield with Crows",
        iAuthor : "Vincent van Gogh",
        iYear : "1890",
        iMedium : "Olej na płótnie",
        iDimensions : "50.2 cm x 103.0 cm",
        iInfo : placeholder,
        iSrcPath : "img/wheatfield with crows.jpg"
    }
];
const ImgListLength = imgList.length - 1;

//>> INFO HIDE/SHOW 

function change(callerId) {
    const destId = callerId + 'info';
    const dest = document.getElementById(destId);

    const iconId = callerId + 'icon';
    const icon = document.getElementById(iconId);

    let isCollapsed = dest.getAttribute('data-collapsed') === 'true';
    console.log(dest.getAttribute('data-collapsed'));
    if(isCollapsed) {
        console.log('show');
        showInfo(destId, icon);
    } else {
        console.log('hide');
        hideInfo(destId, icon);
    }
}

function hideInfo(destId, icon) {
    const dest = document.getElementById(destId);
    const destHeight = dest.scrollHeight;

    let ElementTransition = dest.style.transition;
    dest.style.transition = '';

    requestAnimationFrame(function() {
        dest.style.height = destHeight + 'px';
        dest.style.transition = ElementTransition;
        icon.style.transform = "rotate(180deg)";

        requestAnimationFrame(function() {
            dest.style.height = 0 + 'px';
            icon.style.transform = "none";
        });
    });

    dest.setAttribute('data-collapsed', 'true');
}

function showInfo(destId, icon) {
    const dest = document.getElementById(destId)
    const destHeight = dest.scrollHeight;
    dest.style.height = destHeight + 'px';
    icon.style.transform = "rotate(180deg)";
    dest.addEventListener('transitionend', function(e) {
        dest.removeEventListener('transitionend', arguments.callee);
        dest.style.height = null;
    });

    dest.setAttribute('data-collapsed', 'false');
}

//>> CARD GENERATION

let nextId = 2;
let startRandom = false;

function createCard() {
    const mainCont = document.getElementById('main-cont');
    let randomImgListId = 0;
    if (startRandom) {
        randomImgListId = Math.floor(Math.random() * (ImgListLength - 0 + 1)) // ( max - min + 1 ) + min; 
    } else {
        randomImgListId = nextId;
    }
   
    

    // card
    const card = document.createElement('div');
    card.className = 'card';
    mainCont.appendChild(card);

    // card/image
    const image = document.createElement('img');
    image.className = 'image b';
    image.src = imgList[randomImgListId].iSrcPath;
    card.appendChild(image);

    // card/desc
    const desc = document.createElement('div');
    desc.className = 'desc';
    card.appendChild(desc);

        // card/desc/desc-title

        const descTitle = document.createElement('div');
        descTitle.className = 'desc-title b';
        desc.appendChild(descTitle);

            // card/desc/desc-title/img-title

            const imgTitle = document.createElement('p');
            imgTitle.innerHTML = imgList[randomImgListId].iTitle;
            imgTitle.className = 'img-title flex-cont';
            descTitle.appendChild(imgTitle);

            //card/desc/desc-title/img-author

            const imgAuthor = document.createElement('p');
            imgAuthor.innerHTML = imgList[randomImgListId].iAuthor;
            imgAuthor.className = 'img-author flex-cont';
            descTitle.appendChild(imgAuthor);

        // card/desc/desc-info

        const descInfo = document.createElement('div');
        descInfo.className = 'desc-info';
        desc.appendChild(descInfo);

            //card/desc/desc-info/year

            const year = document.createElement('div');
            year.className = 'year desc-btn flex-cont b';
            year.innerHTML = imgList[randomImgListId].iYear;
            descInfo.appendChild(year);

            //card/desc/desc-info/medium

            const medium = document.createElement('div');
            medium.className = 'medium desc-btn flex-cont b';
            medium.innerHTML = imgList[randomImgListId].iMedium;
            descInfo.appendChild(medium);

            //card/desc/desc-info/dimensions

            const dimensions = document.createElement('div');
            dimensions.className = 'year desc-btn flex-cont b';
            dimensions.innerHTML = imgList[randomImgListId].iDimensions;
            descInfo.appendChild(dimensions);

            //card/desc/desc-info/showmore

            const showmore = document.createElement('button');
            showmore.className = 'showmore desc-btn flex-cont b hvr';
            showmore.id = nextId.toString();
            showmore.type = 'button';
            showmore.setAttribute('onclick', 'change(this.id)')
            descInfo.appendChild(showmore);

                //card/desc/desc-info/showmore/icon
                
                const icon = document.createElement('img');
                icon.className = 'icon';
                icon.id = nextId.toString() + 'icon';
                icon.src = 'expand-icon.svg';
                icon.alt = 'expand';
                showmore.appendChild(icon);

        //card/desc/more-info

        const moreInfo = document.createElement('div');
        moreInfo.className = 'more-info';
        moreInfo.id = nextId.toString() + 'info';
        moreInfo.setAttribute('data-collapsed', 'true');
        moreInfo.style.height = 0;
        nextId = nextId + 1;
        if (nextId == ImgListLength) {
            startRandom = true;
        }
        desc.appendChild(moreInfo);

            //card/desc/more-info/more-info-pad

            const moreInfoPad = document.createElement('div');
            moreInfoPad.className = 'more-info-pad b';
            moreInfo.appendChild(moreInfoPad);

                //card/desc/more-info/more-info-pad/<p>

                    const info = document.createElement('p');
                    info.innerHTML = imgList[randomImgListId].iInfo;
                    moreInfoPad.appendChild(info);
                
}

createCard();

//>> Card Automation

const scrollHandler = () => {
    const pageEnd = Math.ceil(window.innerHeight + window.pageYOffset) + 1 >= document.body.offsetHeight;
    
    if (pageEnd) {
        createCard();
    }
}

window.addEventListener("scroll", scrollHandler)

//>> HIDE/SHOW FOOTER

document.getElementById('footer').style.height = 0;

document.getElementById('footer-button').addEventListener('click', function() {
    const footer = document.getElementById('footer');
    const footerHeight = footer.scrollHeight;

    if (footer.getAttribute('data-collapsed') === 'true') {
        footer.style.height = footerHeight + 'px';
            footer.addEventListener('transitionend', function(e) {
            footer.removeEventListener('transitionend', arguments.callee);
            footer.style.height = null;
        });

        footer.setAttribute('data-collapsed', 'false');
    } else {
        let ElementTransition = footer.style.transition;
        footer.style.transition = '';
    
        requestAnimationFrame(function() {
            footer.style.height = footerHeight + 'px';
            footer.style.transition = ElementTransition;
    
            requestAnimationFrame(function() {
                footer.style.height = 0 + 'px';
            });
        });
    
        footer.setAttribute('data-collapsed', 'true')
    }
    

});
