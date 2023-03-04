//>> INFO HIDE/SHOW 

function change(callerId) {
    const destId = callerId + 'info';
    const dest = document.getElementById(destId)
    let isCollapsed = dest.getAttribute('data-collapsed') === 'true';

    if(isCollapsed) {
        showInfo(destId);
    } else {
        hideInfo(destId)
    }
}

function hideInfo(destId) {
    const dest = document.getElementById(destId)
    const destHeight = dest.scrollHeight;

    let ElementTransition = dest.style.transition;
    dest.style.transition = '';

    requestAnimationFrame(function() {
        dest.style.height = destHeight + 'px';
        dest.style.transition = ElementTransition;

        requestAnimationFrame(function() {
            dest.style.height = 0 + 'px';
        });
    });

    dest.setAttribute('data-collapsed', 'true')
}

function showInfo(destId) {
    const dest = document.getElementById(destId)
    const destHeight = dest.scrollHeight;
    dest.style.height = destHeight + 'px';
    dest.addEventListener('transitionend', function(e) {
        dest.removeEventListener('transitionend', arguments.callee);
        dest.style.height = null;
    });

    dest.setAttribute('data-collapsed', 'false');
}

//>> CARD GENERATION

function createCard() {
    const mainCont = document.getElementById('main-cont');

    // card
    const card = document.createElement('div');
    card.className = 'card';
    mainCont.appendChild(card);

    // card/image
    const image = document.createElement('img');
    image.className = 'image b';
    image.src = 'img/lot.png' //! tbc
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
            imgTitle.innerHTML = 'leaves over texas';
            imgTitle.className = 'img-title flex-cont';
            descTitle.appendChild(imgTitle);

            //card/desc/desc-title/img-author

            const imgAuthor = document.createElement('p');
            imgAuthor.innerHTML = 'Lambert Tens';
            imgAuthor.className = 'img-author flex-cont';
            descTitle.appendChild(imgAuthor);

        // card/desc/desc-info

        const descInfo = document.createElement('div');
        descInfo.className = 'desc-info';
        desc.appendChild(descInfo);

            //card/desc/desc-info/year

            const year = document.createElement('div');
            year.className = 'year desc-btn flex-cont b';
            year.innerHTML = '2010'; //!
            descInfo.appendChild(year);

            //card/desc/desc-info/medium

            const medium = document.createElement('div');
            medium.className = 'medium desc-btn flex-cont b';
            medium.innerHTML = 'Pastel'; //!
            descInfo.appendChild(medium);

            //card/desc/desc-info/dimensions

            const dimensions = document.createElement('div');
            dimensions.className = 'year desc-btn flex-cont b';
            dimensions.innerHTML = '60cm x 55.5cm'; //!
            descInfo.appendChild(dimensions);

            //card/desc/desc-info/showmore

            const showmore = document.createElement('button');
            showmore.className = 'showmore desc-btn flex-cont b hvr';
            showmore.id = '2'; //! tbc
            showmore.innerHTML = 'Historia viii*';
            showmore.type = 'button';
            showmore.setAttribute('onclick', 'change(this.id)')
            descInfo.appendChild(showmore);

        //card/desc/more-info

        const moreInfo = document.createElement('div');
        moreInfo.className = 'more-info b';
        moreInfo.id = '2info'; //! tbc
        desc.appendChild(moreInfo);

            //card/desc/more-info/more-info-pad

            const moreInfoPad = document.createElement('div');
            moreInfoPad.className = 'more-info-pad';
            moreInfo.appendChild(moreInfoPad);

                //card/desc/more-info/more-info-pad/<p>

                    const info = document.createElement('p');
                    info.innerHTML = 'ijjfajjljlljljfaljjljljljlafjljlj aajj.......  bbbb uiehrquehfajdfhajldhfljhlfahlhlhfahlhlfahhlfahlafhlhfa aj...... bbbbb adadhlhlhldahlhlhlhljfshljfsjljlsfjsjsjfslkdfj akdaj aj..... bbbbbb hdahadjljljladjljjljadljdajldjldaljfhadjfhadjffkgjeprta jj...... aj aj aj aj ajaja.....'
                    moreInfoPad.appendChild(info);
                
}

createCard();