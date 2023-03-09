//>> Image Info

let imgList = [
    {
        iTitle : "Call On Amadeus",
        iAuthor : "Ambert Lan",
        iYear : "1988",
        iMedium : "Oil paint on canvas",
        iDimensions : "84.1 cm x 152.4 cm",
        iInfo : "Amadeus sleeps on A CALM ROAD ( to Salvador ). People were sleeping, their sleep is deep. Deep, deep, deep, deep deep sleep. Lorem ipsum dollar in amount.",
        iSrcPath : "img/2000 acres.png"
    },
    {
        iTitle : "Leaves Over Texas",
        iAuthor : "Lambert Tens",
        iYear : "2010",
        iMedium : "Pastel",
        iDimensions : "60cm x 55.5cm",
        iInfo : "ijjfajjljlljljfaljjljljljlafjljlj aajj....... bbbb uiehrquehfajdfhajldhfljhlfahlhlhfahlhlfahhlfahlafhlhfa aj...... bbbbb adadhlhlhldahlhlhlhljfshljfsjljlsfjsjsjfslkdfj akdaj aj..... bbbbbb hdahadjljljladjljjljadljdajldjldaljfhadjfhadjffkgjeprta jj...... aj aj aj aj ajaja.....",
        iSrcPath : "img/lot.png"
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

function createCard() {
    const mainCont = document.getElementById('main-cont');
    const randomImgListId = Math.floor(Math.random() * (ImgListLength - 0 + 1)) // ( max - min + 1 ) + min; 
    console.log(randomImgListId);

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
        moreInfo.className = 'more-info b';
        moreInfo.id = nextId.toString() + 'info';
        moreInfo.setAttribute('data-collapsed', 'true');
        moreInfo.style.height = 0;
        nextId = nextId + 1;
        desc.appendChild(moreInfo);

            //card/desc/more-info/more-info-pad

            const moreInfoPad = document.createElement('div');
            moreInfoPad.className = 'more-info-pad';
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
