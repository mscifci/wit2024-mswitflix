document.querySelector('.hamburger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    const menuItems = navMenu.querySelectorAll('a');
    
   
    navMenu.classList.toggle('active'); 

    if (navMenu.classList.contains('active')) {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show'); 
            }, index * 100); 
        });
    } else {
        
        menuItems.forEach(item => {
            item.classList.remove('show'); 
        });
    }
});