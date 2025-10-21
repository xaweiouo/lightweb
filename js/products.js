export let products=[
    {
        id:'0',
        imgSrc:'https://images.unsplash.com/photo-1495506539593-87a23e41b6fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwbGlnaHR8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=500',
        p:'Lorem ipsum dolor sit amet',
    },
    {
        id:'1',
        imgSrc:'https://images.unsplash.com/photo-1598586958772-8bf368215c2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
        p:'Lorem adipisicing elit Quidemet',
    },
    {
        id:'2',
        imgSrc:'https://images.unsplash.com/photo-1549207107-2704df6b92ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwbGlnaHR8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=500',
        p:'Lorem similique nihil quod',
    },
    {
        id:'3',
        imgSrc:'https://images.unsplash.com/photo-1655757488255-b701f9886e92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwbGlnaHR8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=500',
        p:'Lorem aspernatur quo officiis',
    },
    {
        id:'4',
        imgSrc:'https://images.unsplash.com/photo-1676288176903-a68732722cce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwbGlnaHR8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=500',
        p:'Lorem fjeo fjeifj  das',
    },
    {
        id:'5',
        imgSrc:'https://images.unsplash.com/photo-1536737017563-ae51f8130022?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhciUyMGxpZ2h0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=500',
        p:'Lorem jaieje ccm cpaipru',
    },
];

export function renderProductsList(){
    let str='';
    products.forEach((product)=>{
        str+=
        `
        <div class="col-4">
                <div class="card">
                    <a href="##">
                        <div class='imgWrap'>
                            <img src=${product.imgSrc} alt="" class="card-img-top">
                        </div>
                        <P class="text-center">${product.p}.Unsplash</P>
                    </a>
                </div>
            </div>
        `
    });
    document.querySelector('.productsList.row').innerHTML=str;
};