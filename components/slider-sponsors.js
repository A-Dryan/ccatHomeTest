Vue.component('slider-sponsors', {
    props:['urlsponsor','logosponsor'],
    template:
    `
    <div>
      
        <div class="slide-sponsor">
        <a v-bind:href="urlsponsor"><img v-bind:src="logosponsor"></a>
        </div>
     
    </div>
    `
})