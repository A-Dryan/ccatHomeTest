Vue.component('slider', {
    props:['keyi', 'urlimg'],
    template:
    `

    <div>
    <div class="container-portada__slide"  v-bind:key="keyi" :style="{ 'background-image': 'url(' + urlimg + ')' }">
    </div>
    </div>
    
    `
})