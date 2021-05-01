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
            this.slider.scrollTo({
                left: this.width*n,
                behavior: 'smooth'
            })
        }
    }

});

