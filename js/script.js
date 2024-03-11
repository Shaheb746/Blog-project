let btn = document.querySelector('.read-more');
let spam = document.querySelector('#more-text');

let flag = 0;

btn.addEventListener('click', function () {
    if (flag === 0) {
        spam.innerHTML = " consequatur eius laborum laboriosam! Omnis doloremque eveniet accusantium, molestiae Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, iure officiis maiores labore impedit deserunt assumenda pariatur. Quisquam beatae voluptate quod non nihil deleniti tempora suscipit labore omnis exercitationem, obcaecati ut harum velit aliquid repellendus molestias quibusdam sequi ipsam corrupti. voluptates vero sint illo velitv ";
        btn.innerText = 'Less text';
        flag = 1;
    } else if (flag === 1) { 
        spam.innerHTML = "";
        btn.innerText = 'Read more';
        flag = 0;
    }
}, false);
