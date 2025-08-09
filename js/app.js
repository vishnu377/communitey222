







        document.addEventListener('DOMContentLoaded', () => {

    // --- FINALIZED APP DATA STRUCTURE (v5 - All Features and Fixes) ---
    const samajData = {
        social: {
            homeCategories: [
                { name: 'Village', icon: 'location_city', id: 'village_name' },
                { name: 'Jain Sangh', icon: 'groups', id: 'jain_sangh' },
                { name: 'Death', icon: 'sick', id: 'death', items: [
                    { name: 'By Person Type', id: 'death_person', items: ['Male', 'Female', 'Kids'] },
                    { name: 'Mharaja Shaeb', id: 'death_mharaja' },
                    { name: 'Maha Sati ji', id: 'death_mahasati' }
                ]},
                { name: 'Matrimony', icon: 'favorite', id: 'matrimony', items: [ { name: 'Boy' }, { name: 'Girls' }, { name: 'Divorced', items: ['Male', 'Female'] }, { name: 'Widower' }, { name: 'Widow' } ] },
                { name: 'New marriage', icon: 'celebration', id: 'new_marriage' },
                { name: 'Engagement', icon: 'ring_volume', id: 'engagement' },
                { name: 'New born baby', icon: 'child_care', id: 'new_born_baby' },
                { name: 'Condolence', icon: 'sentiment_very_dissatisfied', id: 'condolence' },
                { name: 'Marriage anniversary', icon: 'cake', id: 'marriage_anniversary' },
                { name: 'Birthday', icon: 'emoji_events', id: 'birthday', items: ['Male', 'Female', 'Kids'] },
                { name: 'New opening', icon: 'store', id: 'new_opening' },
                { name: 'Social', icon: 'people', id: 'social_page' },
                { name: 'Education', icon: 'school', id: 'education' },
                { name: 'Cooking', icon: 'soup_kitchen', id: 'cooking' },
                { name: 'Good Thought', icon: 'lightbulb', id: 'good_thought' },
                { name: 'Dharmik', icon: 'brightness_7', id: 'dharmik' },
                { name: 'Tapsya', icon: 'self_improvement', id: 'tapsya' },
                { name: 'Congratulations', icon: 'thumb_up', id: 'congratulations' },
                { name: 'Thankyou', icon: 'volunteer_activism', id: 'thankyou' },
                { name: 'Medical', icon: 'local_hospital', id: 'medical' },
                { name: 'Panchang', icon: 'event', id: 'panchang' },
                { name: 'Pratika', icon: 'book', id: 'pratika' },
                { name: 'Newspaper', icon: 'newspaper', id: 'newspaper' },
            ],
            villages: ['Mandvi', 'Bhuj', 'Koday', 'Anjar', 'Naliya', 'Bidada'],
            villageStructure: [
                { name: 'History', icon: 'landmark', id: 'history' },
                { name: 'Committee List', icon: 'gavel', id: 'committee_list', items: ['Mahajan Committee', 'Derasar Committee', 'Yuvak Mandal']},
                { name: 'Members List', icon: 'contacts', id: 'members_list' },
                { name: 'Derasar', icon: 'account_balance', id: 'derasar' },
                { name: 'Sathank', icon: 'church', id: 'sathank' },
            ],
            villageDetails: {
                'Bhuj': {
                    history: "Bhuj, the historical capital of Kutch, is known for its resilience and rich cultural heritage...",
                    images: ['assets/images/placeholder.png', 'assets/images/placeholder.png'] 
                },
                'Mandvi': { history: "Mandvi is a port city known for its 400-year-old shipbuilding industry...", images: ['assets/images/placeholder.png'] }
            },
            members: [
                { name: 'Ramesh Shah', id: 'KJS-001', type: 'Male', village: 'Bhuj' },
                { name: 'Viren Shah', id: 'KJS-006', type: 'Male', village: 'Bhuj' },
                { name: 'Priya Mehta', id: 'KJS-002', type: 'Female', village: 'Anjar' },
                { name: 'Aarav Gada', id: 'KJS-003', type: 'Kids', village: 'Bhuj' },
                { name: 'Riya Gada', id: 'KJS-008', type: 'Kids', village: 'Bhuj' },
                { name: 'Ankit Vora', id: 'KJS-005', type: 'Boys', village: 'Mandvi' },
                { name: 'Meena Parekh', id: 'KJS-007', type: 'Female', village: 'Koday' },
            ],
            // FIX: Added placeholder data for all committees to ensure they are clickable
            committeeMembers: {
                'Mahajan Committee': [
                    { id: 1, name: 'Viren Shah', position: 'President', mobile: '9876543210', pic: 'assets/images/placeholder.png', bio: 'Viren Shah has been serving as the President for the last 5 years...' },
                    { id: 2, name: 'Naresh Mehta', position: 'Vice-President', mobile: '9123456789', pic: 'assets/images/placeholder.png', bio: 'Naresh Mehta is the Vice-President...' },
                ],
                'Derasar Committee': [], // Now clickable, will show "No members"
                'Yuvak Mandal': [], // Now clickable, will show "No members"
            },
            jainSanghs: {
                names: ['Shri 6 Koti Sthanakvasi', 'Shri Tapā Gaccha'],
                subTree: { 'Shri 6 Koti Sthanakvasi': ['History', 'Maharaj Saheb details', 'Maha Satiji details'], },
                details: { 'Maharaj Saheb details': { title: 'Acharya Shri Mahashramanji', pic: 'assets/images/placeholder.png', info: 'He is the eleventh Acharya...' } }
            },
            tapsya: {
                types: ['Ekasana', 'Vyasna', 'Upwas', 'Chaat', 'Shst upwas', 'Pandhara upwas'],
                participants: {
                    'Ekasana': [ { name: 'Jinal Mehta', pic: 'assets/images/placeholder.png', details: 'Completed Ekasana for 30 days.' } ],
                    'Upwas': [ { name: 'Rina Vora', pic: 'assets/images/placeholder.png', details: 'Completed Atthai Tap.' } ]
                }
            }
        },
        // FIX: Restored the entire business data object
        business: {
            sellers: [ { id: 1, name: 'Kutchi Handicrafts', sellerPhone: '9725463362' }, { id: 2, name: 'Samaj Foods', sellerPhone: '919876543211' } ],
            categories: [ { id: 'all', name: 'All'}, { id: 1, name: 'Handicrafts' }, { id: 2, name: 'Foods & Spices' }, { id: 3, name: 'Apparel' }, { id: 4, name: 'Decor' } ],
            products: [
                { id: 101, name: 'Handmade Shawl', price: 2500, image: 'assets/images/placeholder.png', categoryId: 1, sellerId: 1, desc: 'A beautiful shawl, hand-woven by local artisans with traditional Kutchi patterns.' },
                { id: 102, name: 'Spicy Mango Pickle', price: 280, image: 'assets/images/placeholder.png', categoryId: 2, sellerId: 2, desc: 'Homemade, traditional mango pickle with a perfect blend of hand-ground spices.' },
                { id: 103, name: 'Wooden Elephant', price: 1200, image: 'assets/images/placeholder.png', categoryId: 4, sellerId: 1, desc: 'Intricately hand-carved wooden elephant statue.' },
                { id: 104, name: 'Bandhani Kurta', price: 1800, image: 'assets/images/placeholder.png', categoryId: 3, sellerId: 1, desc: 'Vibrant and traditional Bandhani Kurta for men.' },
            ],
        }
    };

    const pageContainer = document.getElementById('page-container');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const bottomNavItems = document.querySelectorAll('.nav-item');
    const mainAppBackButton = document.querySelector('#main-app-screen .back-button');

    let navigationStack = [];

    const showScreen = (screenId) => { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(screenId)?.classList.add('active'); };
    const updateHeader = (title, showBack) => {
        document.querySelector('#main-app-screen .page-title').textContent = title;
        mainAppBackButton.style.display = showBack ? 'block' : 'none';
    };

    const renderPage = (state) => {
        let content = '';
        const pageData = state.data || {};

        switch (state.page) {
            case 'socialHome':
                content = `<div class="category-grid">${samajData.social.homeCategories.map(cat => `<div class="category-card" data-page-id="${cat.id}" data-title="${cat.name}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon || 'category'}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader('Social', false); break;

            case 'villageSelector':
                content = `<div class="village-selector-page"><h3>Select your village</h3><select id="village-dropdown"><option value="">-- Choose Village --</option>${samajData.social.villages.map(v => `<option value="${v}">${v}</option>`).join('')}</select></div>`;
                updateHeader('Select Village', true); break;

            case 'villageDashboard':
                content = `<div class="category-grid">${samajData.social.villageStructure.map(cat => `<div class="category-card" data-page-id="${cat.id}" data-title="${cat.name}" data-village="${pageData.village}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader(pageData.village, true); break;
            
            case 'villageHistory':
                const villageInfo = samajData.social.villageDetails[pageData.village] || { history: 'Details coming soon.', images: [] };
                content = `<div class="detail-view"><h3>${pageData.village} History</h3><p>${villageInfo.history}</p><h4>Images</h4><div class="image-gallery">${villageInfo.images.map(img => `<img src="${img}" alt="${pageData.village} image">`).join('')}</div></div>`;
                updateHeader('History', true); break;

            case 'memberList':
                const allMembers = samajData.social.members;
                const counts = { male: allMembers.filter(m => m.type === 'Male').length, female: allMembers.filter(m => m.type === 'Female').length, kids: allMembers.filter(m => m.type === 'Kids').length, boys: allMembers.filter(m => m.type === 'Boys').length, };
                const membersBySurname = allMembers.reduce((acc, member) => {
                    const surname = member.name.split(' ').pop();
                    if (!acc[surname]) acc[surname] = [];
                    acc[surname].push(member);
                    return acc;
                }, {});
                content = `<div class="member-list-page"><div class="member-counts"><div class="count-box"><div class="count-number">${counts.male}</div><div class="count-label">Total Males</div></div><div class="count-box"><div class="count-number">${counts.female}</div><div class="count-label">Total Females</div></div><div class="count-box"><div class="count-number">${counts.kids}</div><div class="count-label">Total Kids</div></div><div class="count-box"><div class="count-number">${counts.boys}</div><div class="count-label">Total Boys</div></div></div><div class="member-list">${Object.keys(membersBySurname).sort().map(surname => `<div class="surname-group"><h5>${surname}</h5>${membersBySurname[surname].map(m => `<div class="member-card"><img src="assets/images/placeholder.png" alt="${m.name}"><div class="member-info"><h4>${m.name}</h4><p>${m.type} / ${m.village}</p><span class="member-id">${m.id}</span></div></div>`).join('')}</div>`).join('')}</div></div>`;
                updateHeader('Members List', true); break;

            case 'committeeMemberList':
                const committee = samajData.social.committeeMembers[pageData.committeeName] || [];
                content = `<div class="list-page">${committee.map(member => `<div class="member-card" data-page-id="memberDetail" data-member-id="${member.id}" data-committee-name="${pageData.committeeName}"><img src="${member.pic}" alt="${member.name}"><div class="member-info"><h4>${member.name}</h4><p>${member.position}</p></div></div>`).join('') || '<div class="detail-view"><p>No members listed for this committee yet.</p></div>'}</div>`;
                updateHeader(pageData.committeeName, true); break;

            case 'memberDetail':
                const member = samajData.social.committeeMembers[pageData.committeeName].find(m => m.id === pageData.memberId);
                content = `<div class="detail-view"><img src="${member.pic}" class="detail-image" alt="${member.name}"><h3>${member.name}</h3><h4>${member.position}</h4><p><strong>Mobile:</strong> ${member.mobile}</p><p>${member.bio}</p></div>`;
                updateHeader('Bio Data', true); break;
            
            case 'tapsyaMemberList':
                const participants = samajData.social.tapsya.participants[pageData.tapsyaType] || [];
                content = `<div class="list-page">${participants.map(p => `<div class="tapsya-card"><img src="${p.pic}" alt="${p.name}"><div class="tapsya-info"><h4>${p.name}</h4><p>${p.details}</p></div></div>`).join('') || '<div class="detail-view"><p>No participants listed for this category yet.</p></div>'}</div>`;
                updateHeader(pageData.tapsyaType, true); break;

            case 'contentDetail':
                const detail = samajData.social.jainSanghs.details[pageData.detailId];
                content = `<div class="detail-view"><img src="${detail.pic}" class="detail-image" alt="${detail.title}"><h3>${detail.title}</h3><p>${detail.info}</p></div>`;
                updateHeader(pageData.title, true); break;

            case 'listPage':
                content = `<div class="list-page">${pageData.items.map(item => {
                    const itemName = typeof item === 'object' ? item.name : item;
                    const itemId = typeof item === 'object' ? item.id || itemName : itemName;
                    const hasSubItems = typeof item === 'object' && item.items;
                    return `<div class="list-item" data-page-id="${itemId}" data-title="${itemName}" data-parent-title="${pageData.title}" ${hasSubItems ? 'data-has-sub-items="true"' : ''}><h4>${itemName}</h4>${hasSubItems ? '<i class="material-icons-sharp">arrow_forward_ios</i>' : ''}</div>`;
                }).join('')}</div>`;
                updateHeader(pageData.title, true); break;
            
            // FIX: Restored business home page
            case 'businessHome':
                const currentBizFilter = pageData.filter || 'all';
                const productsToDisplay = currentBizFilter === 'all' ? samajData.business.products : samajData.business.products.filter(p => p.categoryId === currentBizFilter);
                content = `<div class="business-home-page"><input type="text" class="search-bar" placeholder="Search for products..."><div class="category-filter-container">${samajData.business.categories.map(cat => `<div class="category-filter-tab biz-filter ${currentBizFilter === cat.id ? 'active' : ''}" data-category-id="${cat.id}">${cat.name}</div>`).join('')}</div><h3 class="section-title">Products</h3><div class="product-grid">${productsToDisplay.map(p => `<div class="product-card" data-product-id="${p.id}"><img src="${p.image}" alt="${p.name}"><div class="product-info"><h5>${p.name}</h5><p class="product-price">₹${p.price}</p></div></div>`).join('')}</div></div>`;
                updateHeader('Business', false); break;

            // FIX: Restored product detail page
            case 'productDetail':
                const product = samajData.business.products.find(p => p.id === pageData.productId);
                const seller = samajData.business.sellers.find(s => s.id === product.sellerId);
                const inquiryText = encodeURIComponent(`Hello, I am interested in buying your product: ${product.name} (ID: ${product.id})`);
                const whatsappLink = `https://wa.me/${seller.sellerPhone}?text=${inquiryText}`;
                content = `<div class="product-detail-page"><div class="product-image-slider"><img src="${product.image}" alt="${product.name}"></div><div class="product-detail-content"><h2 class="product-detail-title">${product.name}</h2><p class="product-detail-price">₹${product.price}</p><p class="product-detail-desc">${product.desc}</p><div class="action-buttons"><a href="#" class="btn contact-seller">Contact Seller</a><a href="${whatsappLink}" target="_blank" class="btn whatsapp"><i class="material-icons-sharp">whatsapp</i>Buy Now</a></div></div></div>`;
                updateHeader('Details', true); break;

            default: content = `<div class="detail-view"><h2>${pageData.title || 'Page Not Found'}</h2><p>This section is under construction.</p></div>`; updateHeader(pageData.title || 'Error', true);
        }
        pageContainer.innerHTML = content;
    };
    
    const navigateTo = (state) => { navigationStack.push(state); renderPage(state); };
    const goBack = () => { if (navigationStack.length <= 1) return; navigationStack.pop(); renderPage(navigationStack[navigationStack.length - 1]); };
    
    pageContainer.addEventListener('click', (e) => {
        const currentState = navigationStack[navigationStack.length - 1];
        
        // Filter Clicks
        const bizFilterTab = e.target.closest('.biz-filter');
        if (bizFilterTab) {
            currentState.data.filter = bizFilterTab.dataset.categoryId === 'all' ? 'all' : parseInt(bizFilterTab.dataset.categoryId);
            renderPage(currentState); return;
        }

        const card = e.target.closest('.category-card, .list-item, .member-card, .product-card');
        if (!card) return;

        const pageId = card.dataset.pageId;
        const title = card.dataset.title;
        let newState = { page: 'content', data: { title: title } };

        // Navigation Logic
        if (card.matches('.product-card')) {
            newState = { page: 'productDetail', data: { productId: parseInt(card.dataset.productId) } };
        } else if (currentState.page === 'socialHome') {
            const category = samajData.social.homeCategories.find(c => c.id === pageId);
            if (category && category.items) { newState = { page: 'listPage', data: { title: title, items: category.items, parentTitle: title } }; } 
            else if (pageId === 'village_name') { newState = { page: 'villageSelector' }; }
            else if (pageId === 'jain_sangh') { newState = { page: 'listPage', data: { title: 'Jain Sangh', items: samajData.social.jainSanghs.names } }; }
            else if (pageId === 'tapsya') { newState = { page: 'listPage', data: { title: 'Tapsya', items: samajData.social.tapsya.types } }; }
        } else if (currentState.page === 'villageDashboard') {
            const village = card.dataset.village;
            const selectedCat = samajData.social.villageStructure.find(c => c.id === pageId);
            if (pageId === 'history') { newState = { page: 'villageHistory', data: { village: village } }; }
            else if (pageId === 'members_list') { newState = { page: 'memberList', data: { village: village } }; }
            else if (selectedCat && selectedCat.items) { newState = { page: 'listPage', data: { title: title, items: selectedCat.items, parentTitle: 'Committee List' } }; }
            else { newState = { page: 'content', data: { title: title } }; }
        } else if (currentState.page === 'listPage') {
            const parentTitle = card.dataset.parentTitle;
            if (card.dataset.hasSubItems === 'true') {
                 let parentCategory = samajData.social.homeCategories.find(c => c.name === parentTitle) || samajData.social.villageStructure.find(c => c.name === parentTitle) || samajData.social.matrimony.find(m => m.name === parentTitle);
                const selectedItem = (parentCategory.items || []).find(i => i.name === title);
                if (selectedItem && selectedItem.items) { newState = { page: 'listPage', data: { title: title, items: selectedItem.items, parentTitle: title } }; }
            }
            else if (parentTitle === 'Jain Sangh') { newState = { page: 'listPage', data: { title: title, items: samajData.social.jainSanghs.subTree[title] || [], parentTitle: title } }; }
            else if (parentTitle === 'Committee List') { newState = { page: 'committeeMemberList', data: { committeeName: title } }; }
            else if (parentTitle === 'Tapsya') { newState = { page: 'tapsyaMemberList', data: { tapsyaType: title } }; }
            else if (samajData.social.jainSanghs.details[pageId]) { newState = { page: 'contentDetail', data: { title: title, detailId: pageId } }; }
        } else if (currentState.page === 'committeeMemberList') {
            if (pageId === 'memberDetail') { newState = { page: 'memberDetail', data: { committeeName: card.dataset.committeeName, memberId: parseInt(card.dataset.memberId) } }; }
        }
        
        navigateTo(newState);
    });

    pageContainer.addEventListener('change', (e) => {
        if (e.target.id === 'village-dropdown') {
            const selectedVillage = e.target.value;
            if (selectedVillage) { navigateTo({ page: 'villageDashboard', data: { village: selectedVillage } }); }
        }
    });

    const startApp = () => {
        setTimeout(() => { showScreen('login-screen'); }, 1500);
        loginSubmitBtn.addEventListener('click', () => {
            const homeState = { page: 'socialHome', data:{} };
            navigationStack = [homeState]; renderPage(homeState); showScreen('main-app-screen');
        });
        mainAppBackButton.addEventListener('click', goBack);
        bottomNavItems.forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                bottomNavItems.forEach(i => i.classList.remove('active')); item.classList.add('active');
                const homeState = { page: page, data:{} };
                navigationStack = [homeState]; renderPage(homeState);
            });
        });
    };
    
    startApp();
});