const app = new Vue({
    el: '#app',
    mounted(){
        this.slider = this.$refs.sliderref;
        this.width = this.slider.offsetWidth;  

        
      },
    data:{
    slidesof:[    
    {imgurl: 'https://wallpapercave.com/wp/wp7728133.jpg'},
    {imgurl: 'https://fondosmil.com/fondo/69976.jpg'},
    {imgurl: 'https://wallpx.com/image/2021/04/macbook-air-business-desktop-computer.jpg'},
    {imgurl: 'https://miro.medium.com/max/3200/1*8xSZjQ8Zk--_wx9anAGLXQ.jpeg'},
    {imgurl: 'https://lh5.googleusercontent.com/FIUN1ETn9DDZ73P3laU7Gx_Veoox0Z1idcDDo8rKk-oMs1fUP5Oubk7ogjmJ06KgpSRTic4wXE1c2nvXjhS8eu2uQYwBkWP_RBFE7r_-UB1KGMLmHDWrwJehpS8Q_c8kIE1_ykE'},
    {imgurl: 'https://www.teahub.io/photos/full/224-2249735_most-important-metric-tracked-for-database-performance-2019.jpg'}
    ]
},
    methods: {
        moveSlider(n){
            n= n-1;
            this.slider.scrollTo({
                left: this.width*n,
                behavior: 'smooth'
            });
        },
    }

});

var app2 = new Vue({
    el: '#app-2',
    data:{
        datasponsor:[
            {urlsponsor: '#' , logosponsor: 'https://media.glassdoor.com/sqll/295855/alicorp-squarelogo-1540813111809.png'},
            {urlsponsor: '#' , logosponsor: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGcuhMQLScH8g/company-logo_200_200/0/1584847728945?e=2159024400&v=beta&t=gi0qEf0JkSqvaqqAd-qDJypOTrm43lLGW-Jx5S_T3f4'},
            {urlsponsor: '#' , logosponsor: 'https://image.flaticon.com/icons/png/512/25/25231.png'},
            {urlsponsor: '#' , logosponsor: 'https://pngimg.com/uploads/amazon/amazon_PNG22.png'}
        ]
    }
})

